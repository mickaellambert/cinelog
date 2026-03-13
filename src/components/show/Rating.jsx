import { useState } from 'react'
import { cn } from '@/lib/utils'

const STARS_COUNT = 5

export function Rating({ value, onChange, className }) {
  const [hovered, setHovered] = useState(null)

  const isInteractive = onChange !== undefined
  const displayValue = hovered ?? value

  const stars = []

  for (let i = 0; i < STARS_COUNT; i++) {
    const starValue = i + 1
    const isFilled = displayValue !== null && starValue <= displayValue

    stars.push(
      <button
        key={starValue}
        type="button"
        disabled={!isInteractive}
        onClick={() => isInteractive && onChange(starValue)}
        onMouseEnter={() => isInteractive && setHovered(starValue)}
        onMouseLeave={() => isInteractive && setHovered(null)}
        className={cn(
          'text-xl leading-none transition-colors',
          isFilled ? 'text-yellow-400' : 'text-gray-300',
          isInteractive && 'cursor-pointer hover:scale-110'
        )}
      >
        ★
      </button>
    )
  }

  return (
    <div className={cn('flex items-center gap-0.5', className)}>
      {stars}
    </div>
  )
}
