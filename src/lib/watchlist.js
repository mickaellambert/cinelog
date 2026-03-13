export function addToWatchlist(watchlist, show) {
  const newWatchlist = []

  for (let i = 0; i < watchlist.length; i++) {
    newWatchlist.push(watchlist[i])
  }

  newWatchlist.push(show)

  return newWatchlist
  // Version alternative : return [...watchlist, show]
}

export function removeFromWatchlist(watchlist, id) {
  const newWatchlist = []

  for (let i = 0; i < watchlist.length; i++) {
    if (watchlist[i].id !== id) {
      newWatchlist.push(watchlist[i])
    }
  }

  return newWatchlist
  // Version alternative : return watchlist.filter(show => show.id !== id)
}

export function isInWatchlist(watchlist, id) {
  for (let i = 0; i < watchlist.length; i++) {
    if (watchlist[i].id === id) {
      return true
    }
  }

  return false
  // Version alternative : return watchlist.some(show => show.id === id)
}

export function filterByGenre(watchlist, genre) {
  const newWatchlist = []

  for (let i = 0; i < watchlist.length; i++) {
    if (watchlist[i].genre === genre) {
      newWatchlist.push(watchlist[i])
    }
  }

  return watchlist
}

export function filterByStatus(watchlist, status) {
  const newWatchlist = []

  for (let i = 0; i < watchlist.length; i++) {
    if (watchlist[i].status === status) {
      newWatchlist.push(watchlist[i])
    }
  }

  return newWatchlist
  // Version alternative : return watchlist.filter(show => show.status === status)
}

export function sortByRating(watchlist) {
  const newWatchlist = []

  for (let i = 0; i < watchlist.length; i++) {
    newWatchlist.push(watchlist[i])
  }

  for (let i = 0; i < newWatchlist.length - 1; i++) {
    for (let j = i + 1; j < newWatchlist.length; j++) {
      if (newWatchlist[j].rating > newWatchlist[i].rating) {
        const temp = newWatchlist[i]
        newWatchlist[i] = newWatchlist[j]
        newWatchlist[j] = temp
      }
    }
  }

  return newWatchlist
  // Version alternative : return [...watchlist].sort((a, b) => b.rating - a.rating)
}

export function calculateAverageRating(watchlist) {
  if (watchlist.length === 0) {
    return 0
  }

  let total = 0

  for (let i = 0; i < watchlist.length; i++) {
    if (watchlist[i].rating !== null) {
      total = total + watchlist[i].rating
    }
  }

  return total / watchlist.length
}
