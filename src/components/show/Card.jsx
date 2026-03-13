import { Button } from '@/components/ui/button'
import { StatusBadge } from '@/components/show/StatusBadge'
import { Rating } from '@/components/show/Rating'

export function Card({ show, onRemove, onMarkWatched }) {
  return (
    <div className="flex gap-4 rounded-lg border border-border bg-card p-4">
      <img
        src={show.poster ?? 'https://placehold.co/80x120?text=?'}
        alt={show.title}
        className="h-28 w-20 rounded object-cover shrink-0"
      />

      <div className="flex flex-1 flex-col justify-between">
        <div className="flex flex-col gap-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-foreground">{show.title}</h3>
            <StatusBadge status={show.status} />
          </div>

          <p className="text-sm text-muted-foreground">{show.genre}</p>

          {show.status === 'watched' && (
            <Rating value={show.rating} className="mt-1" />
          )}
        </div>

        <div className="flex gap-2">
          {show.status === 'to_watch' && (
            <Button size="sm" onClick={() => onMarkWatched(show)}>
              Marquer comme vu
            </Button>
          )}

          <Button
            size="sm"
            variant="outline"
            onClick={() => onRemove(show.id)}
          >
            Supprimer
          </Button>
        </div>
      </div>
    </div>
  )
}
