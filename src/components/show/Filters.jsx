import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { GENRES, STATUSES } from '@/lib/constants'

const ALL_STATUSES = [
  { value: 'all', label: 'Tous' },
  { value: 'to_watch', label: STATUSES.to_watch },
  { value: 'watched', label: STATUSES.watched },
]

export function Filters({ filters, onChange }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="flex gap-1">
        {ALL_STATUSES.map(({ value, label }) => (
          <Button
            key={value}
            size="sm"
            variant={filters.status === value ? 'default' : 'outline'}
            onClick={() => onChange({ ...filters, status: value })}
          >
            {label}
          </Button>
        ))}
      </div>

      <Select
        value={filters.genre ?? ''}
        onValueChange={(value) =>
          onChange({ ...filters, genre: value === 'all' ? null : value })
        }
      >
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Genre" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Tous les genres</SelectItem>
          {GENRES.map((genre) => (
            <SelectItem key={genre} value={genre}>
              {genre}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
