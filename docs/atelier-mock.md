# Atelier — Écrire des tests avec des mocks

**Durée :** 13h30 – 15h00
**Fichier de travail :** `src/lib/showService.test.js`

---

## Objectif

Ce matin, tu appellais la vraie API OMDb dans tes tests.
Cet après-midi, tu vas mocker `fetch` — la fonction qui fait les appels réseau —
pour tester **la logique de ton propre code**, sans jamais toucher internet.

---

## Avant de commencer — comprendre l'outil

### Ce qu'on mocke, et pourquoi

`searchShows` reçoit une réponse de `fetch` et la **transforme** :

```
OMDb retourne :          searchShows retourne :
─────────────────        ──────────────────────
imdbID: 'tt0903747'  →   imdbId: 'tt0903747'
Title:  'Breaking Bad' → title:  'Breaking Bad'
Poster: 'N/A'        →   poster: null
```

C'est cette transformation qu'on veut tester.
Pour ça, on a besoin de **contrôler ce que `fetch` retourne** — c'est lui qu'on mocke.

> ⚠️ On ne mocke jamais la fonction qu'on est en train de tester.
> On mocke ses **dépendances** — ici, `fetch`.

---

### `vi.fn()` — créer une fausse fonction

```js
global.fetch = vi.fn()
```

Cette ligne remplace `fetch` par une version factice que tu contrôles.

---

### `mockResolvedValueOnce()` — décider ce que le mock retourne

```js
fetch.mockResolvedValueOnce({
  json: () => Promise.resolve({ ... })
})
```

Tu lui dis : *"la prochaine fois qu'on t'appelle, retourne ça"*.

`fetch` retourne normalement une `Response` avec une méthode `.json()`.
C'est pourquoi on simule exactement cette forme — `searchShows` appelle `.json()` sur le résultat.

---

## Étape 1 — Remplacer le fichier par le template

Ouvre `src/lib/showService.test.js` et **remplace tout le contenu** par ce template :

```js
import { describe, it, expect, vi } from 'vitest'
import { searchShows } from './showService'

// On remplace fetch par une fonction factice pour tous les tests de ce fichier
global.fetch = vi.fn()

describe('ShowService — avec mocks', () => {

  // ✅ Exemple complet — lis-le attentivement avant de continuer
  //
  // On contrôle exactement ce que fetch retourne.
  // searchShows va s'exécuter pour de vrai — on teste sa logique de transformation.
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

    expect(results[0].imdbId).toBe('tt0903747')    // imdbID  → imdbId
    expect(results[0].title).toBe('Breaking Bad')  // Title   → title
    expect(results[0].poster).toBe('https://fake.jpg') // Poster → poster
  })

  // TODO — Test 2 : vérifie que Poster: 'N/A' est transformé en null
  //
  // Dans showService.js, il y a cette ligne :
  //   poster: show.Poster !== 'N/A' ? show.Poster : null
  //
  // 1. Configure fetch pour qu'il retourne un show avec Poster: 'N/A'
  // 2. Appelle searchShows
  // 3. Vérifie que results[0].poster vaut null
  it('should return null when poster is N/A', async () => {
    expect.hasAssertions()
  })

  // TODO — Test 3 : vérifie que searchShows retourne [] quand l'API échoue
  //
  // Dans showService.js, il y a cette condition :
  //   if (data.Response === 'False') return []
  //
  // 1. Configure fetch pour qu'il retourne { Response: 'False' }
  // 2. Appelle searchShows avec n'importe quelle requête
  // 3. Vérifie que le résultat est un tableau vide
  it('should return an empty array when the API returns an error', async () => {
    expect.hasAssertions()
  })

})
```

Lance les tests avec `npm test`.
Le test 1 doit passer. Les tests 2 et 3 échouent — c'est normal, ils sont vides.

---

## Étape 2 — Test 2 : `Poster: 'N/A'` devient `null`

Complète le test 2 en suivant les instructions dans les commentaires.

**Hint :** ton mock doit ressembler à ça, avec `Poster: 'N/A'` :

```js
fetch.mockResolvedValueOnce({
  json: () => Promise.resolve({
    Response: 'True',
    Search: [
      { imdbID: 'tt9999999', Title: 'Série sans affiche', Poster: 'N/A' },
    ],
  }),
})
```

---

## Étape 3 — Test 3 : l'API retourne une erreur

Complète le test 3 en suivant les instructions dans les commentaires.

**Hint :** cette fois, `fetch` retourne simplement `{ Response: 'False' }`.
Pas de champ `Search`. C'est exactement ce qu'OMDb retourne quand il ne trouve rien.

---

## Bilan — avant la correction

Prépare tes réponses à ces questions :

1. Combien de temps ont pris tes tests ? Compare avec ce matin.
2. Dans le test 2, qu'est-ce qu'on teste exactement — l'API ou notre code ?
3. Si quelqu'un supprime la ligne `poster: show.Poster !== 'N/A' ? show.Poster : null`
   dans `showService.js`, lequel de tes tests va échouer ?
