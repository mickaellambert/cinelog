import { describe, it, expect, vi } from 'vitest'
import { searchShows } from './showService'

// On remplace fetch par une fonction factice pour tous les tests de ce fichier
global.fetch = vi.fn()

describe('ShowService — avec mocks', () => {

  // ✅ Test 1 — les champs OMDb sont correctement transformés
  //
  // On vérifie que searchShows renomme les champs de l'API vers notre format :
  //   imdbID → imdbId
  //   Title  → title
  //   Poster → poster
  it('should map OMDb fields to our format', async () => {
    fetch.mockResolvedValueOnce({
      json: () => Promise.resolve({
        Response: 'True',
        Search: [
          { imdbID: 'tt0903747', Title: 'Breaking Bad', Poster: 'https://fake.jpg' },
        ],
      }),
    })

    const results = await searchShows('Breaking Bad')

    expect(results[0].imdbId).toBe('tt0903747')
    expect(results[0].title).toBe('Breaking Bad')
    expect(results[0].poster).toBe('https://fake.jpg')
  })

  // ✅ Test 2 — Poster: 'N/A' est transformé en null
  //
  // OMDb retourne la chaîne 'N/A' quand une série n'a pas d'affiche.
  // Notre service doit convertir ça en null.
  it('should return null when poster is N/A', async () => {
    fetch.mockResolvedValueOnce({
      json: () => Promise.resolve({
        Response: 'True',
        Search: [
          { imdbID: 'tt9999999', Title: 'Série sans affiche', Poster: 'N/A' },
        ],
      }),
    })

    const results = await searchShows('Série sans affiche')

    expect(results[0].poster).toBeNull()
  })

  // ✅ Test 3 — l'API retourne une erreur → searchShows retourne []
  //
  // OMDb retourne { Response: 'False' } quand il ne trouve rien ou en cas d'erreur.
  // Notre service doit retourner un tableau vide dans ce cas.
  it('should return an empty array when the API returns an error', async () => {
    fetch.mockResolvedValueOnce({
      json: () => Promise.resolve({
        Response: 'False',
      }),
    })

    const results = await searchShows('xkzqjmwplf')

    expect(results).toEqual([])
  })

})
