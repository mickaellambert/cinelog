import { useState, useEffect } from 'react'
import { AddForm } from '@/components/show/AddForm'
import { Filters } from '@/components/show/Filters'
import { List } from '@/components/show/List'
import { RatingModal } from '@/components/show/RatingModal'
import { Button } from '@/components/ui/button'
import {
  addToWatchlist,
  removeFromWatchlist,
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
    <div className="mx-auto flex max-w-2xl flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">CineLog</h1>
        {averageRating > 0 && (
          <p className="text-sm text-muted-foreground">
            Satisfaction moyenne :{' '}
            <span className="font-medium text-foreground">
              {averageRating.toFixed(1)} / 5
            </span>
          </p>
        )}
      </div>

      <AddForm onAdd={(show) => setWatchlist(addToWatchlist(watchlist, show))} />

      <div className="flex flex-wrap items-center justify-between gap-2">
        <Filters filters={filters} onChange={setFilters} />
        <Button
          size="sm"
          variant={isSortedByRating ? 'default' : 'outline'}
          onClick={() => setIsSortedByRating(!isSortedByRating)}
        >
          Trier par note
        </Button>
      </div>

      <List
        shows={displayedShows}
        onRemove={(id) => setWatchlist(removeFromWatchlist(watchlist, id))}
        onMarkWatched={setSelectedShow}
      />

      <RatingModal
        show={selectedShow}
        onConfirm={confirmRating}
        onClose={() => setSelectedShow(null)}
      />
    </div>
  )
}
