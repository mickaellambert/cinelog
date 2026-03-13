import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { STATUSES } from '@/lib/constants'

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
  {
    variants: {
      status: {
        watched: 'bg-green-100 text-green-800',
        to_watch: 'bg-gray-100 text-gray-600',
      },
    },
  }
)

export function StatusBadge({ status, onRemove, className }) {
  return (
    <span className={cn(badgeVariants({ status }), 'group', onRemove && 'cursor-pointer', className)}>
      {STATUSES[status]}
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="w-0 overflow-hidden opacity-0 transition-all duration-150 group-hover:w-3 group-hover:opacity-100 leading-none hover:text-green-900"
        >
          ×
        </button>
      )}
    </span>
  )
}
