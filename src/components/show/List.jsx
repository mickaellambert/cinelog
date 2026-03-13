import { Card } from '@/components/show/Card'

export function List({ shows, onRemove, onMarkWatched }) {
  if (shows.length === 0) {
    return (
      <p className="py-12 text-center text-muted-foreground">
        Aucune série à afficher.
      </p>
    )
  }

  const cards = []

  for (let i = 0; i < shows.length; i++) {
    cards.push(
      <Card
        key={shows[i].id}
        show={shows[i]}
        onRemove={onRemove}
        onMarkWatched={onMarkWatched}
      />
    )
  }

  return <div className="flex flex-col gap-3">{cards}</div>
}
