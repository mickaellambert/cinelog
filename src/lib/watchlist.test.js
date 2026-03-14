import { describe, it, expect } from 'vitest'
import {
  addToWatchlist,
  removeFromWatchlist,
  isInWatchlist,
  filterByGenre,
  filterByStatus,
  sortByRating,
  calculateAverageRating,
} from './watchlist'

// ─── Données de test ──────────────────────────────────────────

const BREAKING_BAD = {
  id: 1,
  title: 'Breaking Bad',
  genre: 'Crime',
  status: 'to_watch',
  rating: null,
}

const DARK = {
  id: 2,
  title: 'Dark',
  genre: 'Sci-Fi',
  status: 'to_watch',
  rating: null,
}

const NARCOS = {
  id: 3,
  title: 'Narcos',
  genre: 'Crime',
  status: 'to_watch',
  rating: null,
}

const ARCANE = {
  id: 4,
  title: 'Arcane',
  genre: 'Animation',
  status: 'watched',
  rating: 5,
}

const OZARK = {
  id: 5,
  title: 'Ozark',
  genre: 'Thriller',
  status: 'watched',
  rating: 4,
}

const SQUID_GAME = {
  id: 6,
  title: 'Squid Game',
  genre: 'Thriller',
  status: 'watched',
  rating: 3,
}

// ─── addToWatchlist ───────────────────────────────────────────

describe('addToWatchlist', () => {
  it('should add a show to an empty watchlist', () => {
    const result = addToWatchlist([], BREAKING_BAD)
    expect(result).toHaveLength(1)
    expect(result[0].title).toBe('Breaking Bad')
  })

  it('should add a show to an existing watchlist', () => {
    const result = addToWatchlist([BREAKING_BAD], DARK)
    expect(result).toHaveLength(2)
  })

  it('should not add a show already in the list', () => {
    const watchlist = [BREAKING_BAD]
    const result = addToWatchlist(watchlist, BREAKING_BAD)
    expect(result).toHaveLength(1)
  })
})

// ─── removeFromWatchlist ──────────────────────────────────────

describe('removeFromWatchlist', () => {
  it('should remove a show from the watchlist', () => {
    const result = removeFromWatchlist([BREAKING_BAD, DARK], 1)
    expect(result).toHaveLength(1)
    expect(result[0].title).toBe('Dark')
  })

  it('should return the same list if the show is not found', () => {
    const result = removeFromWatchlist([BREAKING_BAD, DARK], 99)
    expect(result).toHaveLength(2)
  })

  it('should return an empty list if the only show is removed', () => {
    const result = removeFromWatchlist([BREAKING_BAD], 1)
    expect(result).toHaveLength(0)
  })
})

// ─── isInWatchlist ────────────────────────────────────────────

describe('isInWatchlist', () => {
  it('should return true if the show is in the watchlist', () => {
    const result = isInWatchlist([BREAKING_BAD, DARK], 1)
    expect(result).toBe(true)
  })

  it('should return false if the show is not in the watchlist', () => {
    const result = isInWatchlist([BREAKING_BAD, DARK], NARCOS.id)
    expect(result).toBe(false)
  })

  it('should return false for an empty watchlist', () => {
    const result = isInWatchlist([], 1)
    expect(result).toBe(false)
  })
})

// ─── filterByGenre ────────────────────────────────────────────

describe('filterByGenre', () => {
  it('should return only shows matching the genre', () => {
    const result = filterByGenre([BREAKING_BAD, DARK, NARCOS], 'Crime')
    expect(result).toHaveLength(2)
    expect(result[0].title).toBe('Breaking Bad')
    expect(result[1].title).toBe('Narcos')
  })

  it('should return an empty list if no show matches the genre', () => {
    const result = filterByGenre([BREAKING_BAD, NARCOS], 'Sci-Fi')
    expect(result).toHaveLength(0)
  })

  it('should return an empty list for an empty watchlist', () => {
    const result = filterByGenre([], 'Crime')
    expect(result).toHaveLength(0)
  })
})

// ─── filterByStatus ───────────────────────────────────────────

describe('filterByStatus', () => {
  it('should return only shows matching the status', () => {
    const result = filterByStatus([BREAKING_BAD, ARCANE], 'watched')
    expect(result).toHaveLength(1)
    expect(result[0].title).toBe('Arcane')
  })

  it('should return an empty list if no show matches the status', () => {
    const result = filterByStatus([ARCANE, OZARK], 'to_watch')
    expect(result).toHaveLength(0)
  })

  it('should return an empty list for an empty watchlist', () => {
    const result = filterByStatus([], 'watched')
    expect(result).toHaveLength(0)
  })
})

// ─── sortByRating ─────────────────────────────────────────────

describe('sortByRating', () => {
  it('should sort shows from highest to lowest rating', () => {
    const result = sortByRating([SQUID_GAME, ARCANE, OZARK])
    expect(result[0].title).toBe('Arcane')
    expect(result[1].title).toBe('Ozark')
    expect(result[2].title).toBe('Squid Game')
  })

  it('should not modify the original watchlist', () => {
    const watchlist = [SQUID_GAME, ARCANE, OZARK]
    sortByRating(watchlist)
    expect(watchlist[0].title).toBe('Squid Game')
  })

  it('should return an empty list for an empty watchlist', () => {
    const result = sortByRating([])
    expect(result).toHaveLength(0)
  })
})

// ─── calculateAverageRating ───────────────────────────────────

describe('calculateAverageRating', () => {
  it('should calculate the average of rated shows', () => {
    const result = calculateAverageRating([ARCANE, OZARK])
    expect(result).toBe(4.5)
  })

  it('should ignore shows without a rating', () => {
    const result = calculateAverageRating([ARCANE, BREAKING_BAD])
    expect(result).toBe(5)
  })

  it('should return 0 for an empty watchlist', () => {
    const result = calculateAverageRating([])
    expect(result).toBe(0)
  })

  it('should return 0 if no show is rated', () => {
    const result = calculateAverageRating([BREAKING_BAD, DARK])
    expect(result).toBe(0)
  })
})
