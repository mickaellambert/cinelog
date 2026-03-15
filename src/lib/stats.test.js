import { describe, it, expect } from 'vitest'
import { getMostWatchedGenre, getTopRatedShow, countByStatus } from './stats'

// ─────────────────────────────────────────────────────────────
// Atelier TDD — Module Stats
//
// Tu vas écrire les tests de ce module avant d'implémenter le code.
//
// Étape 1 : lis l'US dans l'atelier et écris les noms des it() ici
// Étape 2 : écris le contenu de chaque test
// Étape 3 : implémente les fonctions dans stats.js
// ─────────────────────────────────────────────────────────────

// ─── Données de test ──────────────────────────────────────────
//
// Tu peux utiliser ces données dans tes tests, ou en créer d'autres.
// Ce sont des séries fictives — pas besoin d'API.

const BREAKING_BAD = { id: 1, title: 'Breaking Bad', genre: 'Crime',   status: 'watched', rating: 5 }
const NARCOS       = { id: 2, title: 'Narcos',       genre: 'Crime',   status: 'watched', rating: 4 }
const DARK         = { id: 3, title: 'Dark',         genre: 'Sci-Fi',  status: 'watched', rating: 3 }
const ARCANE       = { id: 4, title: 'Arcane',       genre: 'Animation', status: 'to_watch', rating: null }
const OZARK        = { id: 5, title: 'Ozark',        genre: 'Thriller', status: 'to_watch', rating: null }

// ─────────────────────────────────────────────────────────────

describe('getMostWatchedGenre', () => {
  // Écris tes it() ici
})

describe('getTopRatedShow', () => {
  // Écris tes it() ici
})

describe('countByStatus', () => {
  // Écris tes it() ici
})
