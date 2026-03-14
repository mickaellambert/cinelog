import { describe, it, expect } from 'vitest'
import { addToWatchlist, removeFromWatchlist, isInWatchlist } from './watchlist'

// ─── Données de test ──────────────────────────────────────────
//
// On définit des séries "fixes" en dehors des tests pour ne pas
// les réécrire à chaque fois. C'est une bonne pratique.

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
  // ✅ Exemple fourni — lis-le attentivement avant de continuer
  it('should add a show to an empty watchlist', () => {
    const result = addToWatchlist([], BREAKING_BAD)
    expect(result).toHaveLength(1)
  })

  // TODO — ajouter une série à une liste qui en contient déjà une
  // Vérifie que la liste résultante contient bien 2 éléments
  it('should add a show to an existing watchlist', () => {})

  // TODO — vérifier que la fonction ne modifie pas la liste d'origine
  // Hint : appelle addToWatchlist, puis vérifie que watchlist.length n'a pas changé
  it('should not modify the original watchlist', () => {
    const watchlist = [BREAKING_BAD]
    addToWatchlist(watchlist, DARK)
    // à compléter
  })

  // TODO — essaie d'ajouter une série déjà présente dans la liste
  // Hint : appelle addToWatchlist deux fois avec BREAKING_BAD
  // La liste résultante devrait toujours contenir 1 élément... mais est-ce le cas ?
  it('should not add a show already in the list', () => {})
})

// ─── removeFromWatchlist ──────────────────────────────────────

describe('removeFromWatchlist', () => {
  // ✅ Exemple fourni
  it('should remove a show by id', () => {
    const result = removeFromWatchlist([BREAKING_BAD, DARK], BREAKING_BAD.id)
    expect(result).toHaveLength(1)
    // TODO — vérifie aussi que c'est bien DARK qui reste dans la liste
    // Hint : expect(result[0].id).toBe(...)
  })

  // TODO — que se passe-t-il si on essaie de supprimer un id qui n'existe pas ?
  // La liste originale doit être retournée intacte
  it('should return the same list if the id does not exist', () => {
    const watchlist = [BREAKING_BAD, DARK]
    // à compléter
  })

  // TODO — supprimer la seule série d'une liste à un élément
  // Résultat attendu : une liste vide
  it('should return an empty list if the only show is removed', () => {})

  // TODO — vérifier que la fonction ne modifie pas la liste d'origine
  // Même principe que pour addToWatchlist
  it('should not modify the original watchlist', () => {})
})

// ─── isInWatchlist ────────────────────────────────────────────

describe('isInWatchlist', () => {
  // TODO — BREAKING_BAD est dans la liste : la fonction doit retourner true
  it('should return true if the show is in the watchlist', () => {})

  // TODO — NARCOS n'est pas dans la liste : la fonction doit retourner false
  it('should return false if the show is not in the watchlist', () => {
    const watchlist = [BREAKING_BAD, DARK]
    // à compléter
  })

  // TODO — cas limite : que retourne la fonction sur une liste vide ?
  it('should return false for an empty watchlist', () => {})
})
