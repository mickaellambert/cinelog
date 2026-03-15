# Atelier — Découverte du TDD

**Durée :** 13h30 – 14h30
**Fichiers de travail :** `src/lib/stats.js` et `src/lib/stats.test.js`

---

## Objectif

Jusqu'ici, tu as toujours écrit le code *avant* les tests — ou les deux en même temps.

Dans cet atelier, tu vas faire l'inverse :
**lire un besoin utilisateur → décider ce qu'il faut tester → écrire les tests → écrire le code.**

C'est ça, le TDD. Tu vas le vivre, pas juste l'entendre expliquer.

---

## Le contexte

L'équipe CineLog veut ajouter un module de statistiques.
Voici la demande qui vient d'arriver, sous forme de User Story :

---

> **US — Consulter les statistiques de sa watchlist**
>
> *En tant qu'utilisateur de CineLog,*
> *je veux voir un résumé de mes habitudes de visionnage,*
> *afin de mieux comprendre ce que je regarde.*
>
> **Critères d'acceptance :**
> - Je peux connaître le genre que j'ai le plus regardé
> - Je peux voir quelle série j'ai le mieux notée
> - Je peux savoir combien de séries j'ai dans chaque statut (à voir / vues)

---

Avant d'ouvrir un éditeur, prends 5 minutes pour lire cette US attentivement.

---

## Étape 1 — Écrire les cas de test (juste les noms)

### C'est quoi un cas de test ?

Un cas de test, c'est une phrase qui décrit **un comportement précis** que le code doit avoir.

En Vitest, ça ressemble à ça :

```js
it('should return the most watched genre', ...)
it('should return null if no show has been watched', ...)
```

La phrase après `it(` est le nom du test. C'est une **spécification** — elle dit ce que le code *doit* faire dans une situation donnée.

> **Règle pour bien nommer un test :**
> - Commence par `should` (devrait)
> - Décris le résultat attendu, pas l'implémentation
> - Sois précis : `should return null if watchlist is empty` est meilleur que `should handle empty list`

---

### À toi de jouer

Ouvre `src/lib/stats.test.js`. Il contient déjà la structure de base.

Pour **chacun des 3 critères d'acceptance** de l'US, écris les cas de test que tu penses nécessaires.

Pour l'instant, **écris uniquement les noms** — pas de code à l'intérieur. Juste les `it()` :

```js
it('should ...', () => {})
it('should ...', () => {})
```

> **Conseil :** ne te limite pas au cas "tout va bien". Demande-toi aussi :
> - Que se passe-t-il si la watchlist est vide ?
> - Que se passe-t-il si aucune série n'a encore été notée ?
> - Que se passe-t-il si deux séries ont la même note ?

Prends 10 minutes. On comparera ensemble avant de continuer.

---

## Étape 2 — Implémenter les tests

Maintenant que tu as listé tes cas, il est temps d'écrire le contenu de chaque test.

### Rappel : structure d'un test

```js
it('should return the most watched genre', () => {
  // 1. Prépare les données (le contexte)
  const watchlist = [
    { title: 'Breaking Bad', genre: 'Crime',   status: 'watched', rating: 5 },
    { title: 'Narcos',       genre: 'Crime',   status: 'watched', rating: 4 },
    { title: 'Dark',         genre: 'Sci-Fi',  status: 'watched', rating: 3 },
  ]

  // 2. Appelle la fonction que tu veux tester
  const result = getMostWatchedGenre(watchlist)

  // 3. Vérifie le résultat
  expect(result).toBe('Crime')
})
```

Un test = **un contexte** + **une action** + **une vérification**.

> **Important :** au moment où tu écris ces tests, la fonction `getMostWatchedGenre`
> n'existe pas encore dans `stats.js`. C'est normal — tes tests vont échouer.
> C'est **voulu**. En TDD, un test qui échoue s'appelle un test **Rouge**.
> Il prouve que tu testes quelque chose de réel.

Lance les tests pour confirmer qu'ils échouent :

```bash
npm test
```

Tu devrais voir des erreurs. C'est une bonne nouvelle.

---

## Étape 3 — Implémenter les fonctions

Maintenant tu peux ouvrir `src/lib/stats.js` et écrire le code.

**Règle du TDD :** écris le minimum de code nécessaire pour faire passer **un test à la fois**.

Ne cherche pas à tout implémenter d'un coup. Le cycle est :

```
1. Choisis un test rouge
2. Écris le code minimal pour le faire passer
3. Lance les tests → il doit passer au vert
4. Passe au test suivant
```

Lance les tests après chaque fonction pour vérifier :

```bash
npm test
```

> **Objectif :** tous tes tests doivent être verts à la fin de l'atelier.

---

## Bilan — avant le cours

Prépare tes réponses à ces questions :

1. À l'étape 1, est-ce que tu as pensé aux cas limites (liste vide, pas de note) dès le début — ou seulement après réflexion ?
2. Est-ce que écrire les noms des tests t'a aidé à mieux comprendre ce que le code devait faire ?
3. Est-ce que tes `it()` ressemblaient à une liste de comportements attendus — autrement dit, à une **spec** ?
4. Quelle différence as-tu ressentie entre écrire le test avant ou après le code ?
