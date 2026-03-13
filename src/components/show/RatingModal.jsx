import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Rating } from '@/components/show/Rating'

export function RatingModal({ show, onConfirm, onClose }) {
  const [rating, setRating] = useState(null)

  function confirm() {
    if (!rating) return
    onConfirm(rating)
    setRating(null)
  }

  function close() {
    setRating(null)
    onClose()
  }

  return (
    <Dialog open={show !== null} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tu as regardé {show?.title} ?</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center gap-4 py-4">
          <p className="text-sm text-muted-foreground">Donne lui une note</p>
          <Rating value={rating} onChange={setRating} />
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={close}>
            Annuler
          </Button>
          <Button onClick={confirm} disabled={!rating}>
            Confirmer
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
