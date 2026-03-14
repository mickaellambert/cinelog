import { describe, it, expect } from 'vitest'
import {
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

// ─── filterByGenre ────────────────────────────────────────────

describe('filterByGenre', () => {
  // ✅ Exemple complet — lis-le avant de continuer
  it('should return only shows matching the genre', () => {
    const result = filterByGenre([BREAKING_BAD, DARK, NARCOS], 'Crime')
    expect(result).toHaveLength(2)
    expect(result[0].title).toBe('Breaking Bad')
    expect(result[1].title).toBe('Narcos')
  })

  // TODO — aucune série ne correspond au genre demandé
  // Hint : filtre par 'Horror' dans une liste qui n'en contient pas
  // Résultat attendu : une liste vide
  it('should return an empty list if no show matches the genre', () => {
    // ⚠️ Ne pas supprimer — garantit que tu as bien écrit au moins un expect() ci-dessous
    // Sans cette ligne, un test vide passerait au vert sans rien vérifier
    expect.hasAssertions()
  })

  // TODO — cas limite : que retourne la fonction sur une liste vide ?
  it('should return an empty list for an empty watchlist', () => {
    // ⚠️ Ne pas supprimer — garantit que tu as bien écrit au moins un expect() ci-dessous
    // Sans cette ligne, un test vide passerait au vert sans rien vérifier
    expect.hasAssertions()
  })
})

// ─── filterByStatus ───────────────────────────────────────────

describe('filterByStatus', () => {
  // ✅ Exemple complet
  it('should return only watched shows', () => {
    const result = filterByStatus([BREAKING_BAD, ARCANE, OZARK], 'watched')
    expect(result).toHaveLength(2)
    expect(result[0].title).toBe('Arcane')
    expect(result[1].title).toBe('Ozark')
  })

  // TODO — filtrer par 'to_watch' dans une liste qui n'en contient pas
  // Résultat attendu : une liste vide
  it('should return an empty list if no show matches the status', () => {
    // ⚠️ Ne pas supprimer — garantit que tu as bien écrit au moins un expect() ci-dessous
    // Sans cette ligne, un test vide passerait au vert sans rien vérifier
    expect.hasAssertions()
  })

  // TODO — cas limite : que retourne la fonction sur une liste vide ?
  it('should return an empty list for an empty watchlist', () => {
    // ⚠️ Ne pas supprimer — garantit que tu as bien écrit au moins un expect() ci-dessous
    // Sans cette ligne, un test vide passerait au vert sans rien vérifier
    expect.hasAssertions()
  })
})

// ─── sortByRating ─────────────────────────────────────────────

describe('sortByRating', () => {
  // ✅ Exemple complet
  it('should sort shows from highest to lowest rating', () => {
    const result = sortByRating([SQUID_GAME, ARCANE, OZARK])
    expect(result[0].title).toBe('Arcane')    // 5 étoiles
    expect(result[1].title).toBe('Ozark')     // 4 étoiles
    expect(result[2].title).toBe('Squid Game') // 3 étoiles
  })

  // TODO — vérifier qu'une liste à un seul élément reste inchangée
  it('should return a single show unchanged', () => {
    // ⚠️ Ne pas supprimer — garantit que tu as bien écrit au moins un expect() ci-dessous
    // Sans cette ligne, un test vide passerait au vert sans rien vérifier
    expect.hasAssertions()
  })

  // TODO — cas limite : que retourne la fonction sur une liste vide ?
  it('should return an empty list for an empty watchlist', () => {
    // ⚠️ Ne pas supprimer — garantit que tu as bien écrit au moins un expect() ci-dessous
    // Sans cette ligne, un test vide passerait au vert sans rien vérifier
    expect.hasAssertions()
  })
})

// ─── calculateAverageRating ───────────────────────────────────

describe('calculateAverageRating', () => {
  // ✅ Exemple complet
  it('should calculate the average of rated shows', () => {
    const result = calculateAverageRating([ARCANE, OZARK])
    expect(result).toBe(4.5) // (5 + 4) / 2
  })

  // TODO — la liste contient des séries sans note (rating: null)
  // Hint : utilise ARCANE (noté 5) et BREAKING_BAD (rating: null)
  // La moyenne doit être 5, pas 2.5
  // Ce test va peut-être te surprendre...
  it('should ignore shows without a rating', () => {
    // ⚠️ Ne pas supprimer — garantit que tu as bien écrit au moins un expect() ci-dessous
    // Sans cette ligne, un test vide passerait au vert sans rien vérifier
    expect.hasAssertions()
  })

  // TODO — cas limite : que retourne la fonction sur une liste vide ?
  it('should return 0 for an empty watchlist', () => {
    // ⚠️ Ne pas supprimer — garantit que tu as bien écrit au moins un expect() ci-dessous
    // Sans cette ligne, un test vide passerait au vert sans rien vérifier
    expect.hasAssertions()
  })

  // TODO — toutes les séries sont sans note
  // Résultat attendu : 0
  it('should return 0 if no show is rated', () => {
    // ⚠️ Ne pas supprimer — garantit que tu as bien écrit au moins un expect() ci-dessous
    // Sans cette ligne, un test vide passerait au vert sans rien vérifier
    expect.hasAssertions()
  })
})
