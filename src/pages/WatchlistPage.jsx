import { useState, useEffect } from 'react'
import { PlusCircle, SlidersHorizontal } from 'lucide-react'
import { AddForm } from '@/components/show/AddForm'
import { Filters } from '@/components/show/Filters'
import { List } from '@/components/show/List'
import { RatingModal } from '@/components/show/RatingModal'
import { Button } from '@/components/ui/button'
import {
  addToWatchlist,
  filterByGenre,
  filterByStatus,
  sortByRating,
  calculateAverageRating,
} from '@/lib/watchlist'
const STORAGE_KEY = 'cinelog_watchlist'

const DEFAULT_FILTERS = {
  genre: null,
  status: 'all',
}

function loadWatchlist() {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored) {
    return JSON.parse(stored)
  }
  return []
}

export function WatchlistPage() {
  const [watchlist, setWatchlist] = useState(loadWatchlist)
  const [filters, setFilters] = useState(DEFAULT_FILTERS)
  const [isSortedByRating, setIsSortedByRating] = useState(false)
  const [selectedShow, setSelectedShow] = useState(null)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(watchlist))
  }, [watchlist])

  function markUnwatched(id) {
    const newWatchlist = []
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === id) {
        newWatchlist.push({ ...watchlist[i], status: 'to_watch', rating: null })
      } else {
        newWatchlist.push(watchlist[i])
      }
    }
    setWatchlist(newWatchlist)
  }

  function confirmRating(rating) {
    const newWatchlist = []
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === selectedShow.id) {
        newWatchlist.push({ ...watchlist[i], status: 'watched', rating })
      } else {
        newWatchlist.push(watchlist[i])
      }
    }
    setWatchlist(newWatchlist)
    setSelectedShow(null)
  }

  function getDisplayedShows() {
    let displayed = watchlist

    if (filters.status !== 'all') {
      displayed = filterByStatus(displayed, filters.status)
    }

    if (filters.genre !== null) {
      displayed = filterByGenre(displayed, filters.genre)
    }

    if (isSortedByRating) {
      displayed = sortByRating(displayed)
    }

    return displayed
  }

  const displayedShows = getDisplayedShows()
  const averageRating = calculateAverageRating(
    filterByStatus(watchlist, 'watched')
  )

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-foreground px-6 py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <h1 className="text-xl font-bold text-background">CineLog</h1>
          {averageRating > 0 && (
            <p className="text-sm text-background/60">
              Satisfaction moyenne :{' '}
              <span className="font-semibold text-background">
                {averageRating.toFixed(1)} / 5
              </span>
            </p>
          )}
        </div>
      </header>

      <main className="mx-auto grid max-w-5xl grid-cols-1 gap-6 p-6 md:grid-cols-[320px_1fr]">
        <aside className="flex flex-col gap-4">
          <div className="rounded-lg border border-border bg-card p-4">
            <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
              <PlusCircle className="h-4 w-4" />
              Ajouter une série
            </h2>
            <AddForm watchlist={watchlist} onAdd={(show) => setWatchlist(addToWatchlist(watchlist, show))} />
          </div>

          <div className="rounded-lg border border-border bg-card p-4">
            <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
              <SlidersHorizontal className="h-4 w-4" />
              Filtrer
            </h2>
            <div className="flex flex-col gap-3">
              <Filters filters={filters} onChange={setFilters} />
              <Button
                size="sm"
                variant={isSortedByRating ? 'default' : 'outline'}
                className="w-full"
                onClick={() => setIsSortedByRating(!isSortedByRating)}
              >
                Trier par note
              </Button>
            </div>
          </div>
        </aside>

        <section>
          <List
            shows={displayedShows}
            onMarkWatched={setSelectedShow}
            onMarkUnwatched={markUnwatched}
          />
        </section>
      </main>

      <RatingModal
        show={selectedShow}
        onConfirm={confirmRating}
        onClose={() => setSelectedShow(null)}
      />
    </div>
  )
}
