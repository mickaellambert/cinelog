import { describe, it, expect } from 'vitest'
import { addToWatchlist, removeFromWatchlist, isInWatchlist } from './watchlist'

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

// ─── addToWatchlist ───────────────────────────────────────────

describe('addToWatchlist', () => {
  // ✅ Exemple complet — lis-le avant de continuer
  it('should add a show to an empty watchlist', () => {
    const result = addToWatchlist([], BREAKING_BAD)
    expect(result).toHaveLength(1)
    expect(result[0].title).toBe('Breaking Bad')
  })

  // TODO — ajouter une série à une liste qui en contient déjà une
  // Hint : pars d'une liste avec BREAKING_BAD, ajoute DARK
  // La liste résultante doit contenir 2 éléments
  it('should add a show to an existing watchlist', () => {
    expect.hasAssertions()
  })

  // TODO — essaie d'ajouter une série déjà présente dans la liste
  // Hint : appelle addToWatchlist deux fois avec BREAKING_BAD
  // La liste résultante devrait contenir 1 seul élément... mais est-ce vraiment le cas ?
  it('should not add a show already in the list', () => {
    expect.hasAssertions()
  })
})

// ─── removeFromWatchlist ──────────────────────────────────────

describe('removeFromWatchlist', () => {
  // ✅ Exemple complet — la fonction reçoit une liste et l'id de la série à supprimer
  it('should remove a show from the watchlist', () => {
    const result = removeFromWatchlist([BREAKING_BAD, DARK], 1)
    expect(result).toHaveLength(1)
    expect(result[0].title).toBe('Dark')
  })

  // TODO — que se passe-t-il si l'id ne correspond à aucune série ?
  // Hint : pars d'une liste avec BREAKING_BAD et DARK, essaie de supprimer l'id 99
  // La liste doit rester intacte (2 éléments)
  it('should return the same list if the show is not found', () => {
    expect.hasAssertions()
  })

  // TODO — supprimer la seule série d'une liste à un élément
  // Résultat attendu : une liste vide
  it('should return an empty list if the only show is removed', () => {
    expect.hasAssertions()
  })
})

// ─── isInWatchlist ────────────────────────────────────────────

describe('isInWatchlist', () => {
  // ✅ Exemple complet
  it('should return true if the show is in the watchlist', () => {
    const result = isInWatchlist([BREAKING_BAD, DARK], 1)
    expect(result).toBe(true)
  })

  // TODO — vérifier que la fonction retourne false si la série n'est pas dans la liste
  // Hint : utilise une liste avec BREAKING_BAD et DARK, cherche l'id de NARCOS
  it('should return false if the show is not in the watchlist', () => {
    expect.hasAssertions()
  })

  // TODO — cas limite : que retourne la fonction sur une liste vide ?
  it('should return false for an empty watchlist', () => {
    expect.hasAssertions()
  })
})
