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

export function StatusBadge({ status, className }) {
  return (
    <span className={cn(badgeVariants({ status }), className)}>
      {STATUSES[status]}
    </span>
  )
}
