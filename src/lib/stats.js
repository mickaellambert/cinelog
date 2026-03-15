export function getMostWatchedGenre(watchlist) {
  const counts = []

  for (let i = 0; i < watchlist.length; i++) {
    if (watchlist[i].status !== 'watched') continue

    const genre = watchlist[i].genre
    let found = false

    for (let j = 0; j < counts.length; j++) {
      if (counts[j].genre === genre) {
        counts[j].count = counts[j].count + 1
        found = true
        break
      }
    }

    if (!found) {
      counts.push({ genre, count: 1 })
    }
  }

  if (counts.length === 0) {
    return null
  }

  let topGenre = counts[0]

  for (let i = 1; i < counts.length; i++) {
    if (counts[i].count > topGenre.count) {
      topGenre = counts[i]
    }
  }

  return topGenre.genre
  // Version alternative :
  // const watched = watchlist.filter(s => s.status === 'watched')
  // if (watched.length === 0) return null
  // const counts = watched.reduce((acc, s) => ({ ...acc, [s.genre]: (acc[s.genre] ?? 0) + 1 }), {})
  // return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0]
}

export function getTopRatedShow(watchlist) {
  let top = null

  for (let i = 0; i < watchlist.length; i++) {
    if (watchlist[i].rating === null) continue

    if (top === null || watchlist[i].rating > top.rating) {
      top = watchlist[i]
    }
  }

  return top
  // Version alternative :
  // const rated = watchlist.filter(s => s.rating !== null)
  // if (rated.length === 0) return null
  // return rated.reduce((best, s) => s.rating > best.rating ? s : best)
}

export function countByStatus(watchlist) {
  const result = { to_watch: 0, watched: 0 }

  for (let i = 0; i < watchlist.length; i++) {
    if (watchlist[i].status === 'watched') {
      result.watched = result.watched + 1
    } else {
      result.to_watch = result.to_watch + 1
    }
  }

  return result
  // Version alternative :
  // return watchlist.reduce(
  //   (acc, s) => ({ ...acc, [s.status]: acc[s.status] + 1 }),
  //   { to_watch: 0, watched: 0 }
  // )
}
