import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ShowService } from '@/lib/ShowService'

const showService = new ShowService()

export function AddForm({ onAdd }) {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [selected, setSelected] = useState(null)
  const [isSearching, setIsSearching] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (query.length < 2) {
      setSuggestions([])
      return
    }

    const timeout = setTimeout(async () => {
      setIsSearching(true)
      const results = await showService.search(query)
      setSuggestions(results)
      setIsSearching(false)
    }, 400)

    return () => clearTimeout(timeout)
  }, [query])

  async function selectSuggestion(suggestion) {
    const details = await showService.getDetails(suggestion.imdbId)
    setSelected(details)
    setSuggestions([])
    setQuery('')
  }

  function submit(e) {
    e.preventDefault()

    if (!selected) {
      setError('Sélectionne une série dans les suggestions.')
      return
    }

    setError(null)

    onAdd({
      id: Date.now(),
      title: selected.title,
      genre: selected.genre,
      poster: selected.poster,
      status: 'to_watch',
      rating: null,
    })

    setSelected(null)
    setQuery('')
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-3">
      <div className="relative">
        <Input
          placeholder="Rechercher une série..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setSelected(null)
          }}
        />

        {isSearching && (
          <p className="text-xs text-muted-foreground mt-1">Recherche en cours...</p>
        )}

        {suggestions.length > 0 && (
          <ul className="absolute z-10 w-full mt-1 bg-card border border-border rounded-md shadow-lg overflow-hidden">
            {suggestions.map((suggestion) => (
              <li
                key={suggestion.imdbId}
                onClick={() => selectSuggestion(suggestion)}
                className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-accent"
              >
                <img
                  src={suggestion.poster ?? 'https://placehold.co/32x48?text=?'}
                  alt={suggestion.title}
                  className="w-8 h-12 object-cover rounded flex-shrink-0"
                />
                <span className="text-sm font-medium">{suggestion.title}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {selected && (
        <div className="flex items-center gap-3 p-3 rounded-md border border-border bg-muted">
          <img
            src={selected.poster ?? 'https://placehold.co/32x48?text=?'}
            alt={selected.title}
            className="w-8 h-12 object-cover rounded flex-shrink-0"
          />
          <div className="text-sm">
            <p className="font-medium">{selected.title}</p>
            <p className="text-muted-foreground">{selected.genre ?? 'Genre inconnu'}</p>
          </div>
        </div>
      )}

      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}

      <Button type="submit" disabled={!selected}>
        Ajouter
      </Button>
    </form>
  )
}
