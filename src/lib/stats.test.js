import { describe, it, expect } from 'vitest'
import { getMostWatchedGenre, getTopRatedShow, countByStatus } from './stats'

// ─── Données de test ──────────────────────────────────────────

const BREAKING_BAD = { id: 1, title: 'Breaking Bad', genre: 'Crime',     status: 'watched',  rating: 5 }
const NARCOS       = { id: 2, title: 'Narcos',       genre: 'Crime',     status: 'watched',  rating: 4 }
const DARK         = { id: 3, title: 'Dark',         genre: 'Sci-Fi',    status: 'watched',  rating: 3 }
const ARCANE       = { id: 4, title: 'Arcane',       genre: 'Animation', status: 'to_watch', rating: null }
const OZARK        = { id: 5, title: 'Ozark',        genre: 'Thriller',  status: 'to_watch', rating: null }

// ─── getMostWatchedGenre ──────────────────────────────────────

describe('getMostWatchedGenre', () => {
  it('should return the most frequent genre among watched shows', () => {
    const result = getMostWatchedGenre([BREAKING_BAD, NARCOS, DARK])
    expect(result).toBe('Crime')
  })

  it('should ignore shows that have not been watched', () => {
    // Arcane (Animation) n'est pas regardé — il ne doit pas compter
    const result = getMostWatchedGenre([BREAKING_BAD, ARCANE])
    expect(result).toBe('Crime')
  })

  it('should return null if no show has been watched', () => {
    const result = getMostWatchedGenre([ARCANE, OZARK])
    expect(result).toBeNull()
  })

  it('should return null for an empty watchlist', () => {
    const result = getMostWatchedGenre([])
    expect(result).toBeNull()
  })
})

// ─── getTopRatedShow ──────────────────────────────────────────

describe('getTopRatedShow', () => {
  it('should return the show with the highest rating', () => {
    const result = getTopRatedShow([DARK, BREAKING_BAD, NARCOS])
    expect(result.title).toBe('Breaking Bad')
  })

  it('should return null if no show has been rated', () => {
    const result = getTopRatedShow([ARCANE, OZARK])
    expect(result).toBeNull()
  })

  it('should return null for an empty watchlist', () => {
    const result = getTopRatedShow([])
    expect(result).toBeNull()
  })
})

// ─── countByStatus ────────────────────────────────────────────

describe('countByStatus', () => {
  it('should return the correct count for each status', () => {
    const result = countByStatus([BREAKING_BAD, NARCOS, ARCANE, OZARK])
    expect(result.watched).toBe(2)
    expect(result.to_watch).toBe(2)
  })

  it('should return 0 for a status with no shows', () => {
    const result = countByStatus([ARCANE, OZARK])
    expect(result.watched).toBe(0)
    expect(result.to_watch).toBe(2)
  })

  it('should return zeros for an empty watchlist', () => {
    const result = countByStatus([])
    expect(result.watched).toBe(0)
    expect(result.to_watch).toBe(0)
  })
})
