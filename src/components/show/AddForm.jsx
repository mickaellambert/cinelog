import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { GENRES } from '@/lib/constants'

const EMPTY_FORM = {
  title: '',
  genre: '',
  poster: '',
}

export function AddForm({ onAdd }) {
  const [form, setForm] = useState(EMPTY_FORM)
  const [error, setError] = useState(null)

  function submit(e) {
    e.preventDefault()

    if (!form.title || !form.genre) {
      setError('Le titre et le genre sont obligatoires.')
      return
    }

    setError(null)

    onAdd({
      id: Date.now(),
      title: form.title,
      genre: form.genre,
      poster: form.poster || null,
      status: 'to_watch',
      rating: null,
    })

    setForm(EMPTY_FORM)
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-3">
      <Input
        placeholder="Titre de la série *"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <Select
        value={form.genre}
        onValueChange={(value) => setForm({ ...form, genre: value })}
      >
        <SelectTrigger>
          <SelectValue placeholder="Genre *" />
        </SelectTrigger>
        <SelectContent>
          {GENRES.map((genre) => (
            <SelectItem key={genre} value={genre}>
              {genre}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Input
        placeholder="URL de l'affiche (optionnel)"
        value={form.poster}
        onChange={(e) => setForm({ ...form, poster: e.target.value })}
      />

      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}

      <Button type="submit">Ajouter</Button>
    </form>
  )
}
