# Atelier — Découverte de Playwright

**Durée :** 9h30 – 11h00
**Fichier de travail :** `e2e/watchlist.spec.js`

---

## Objectif

Jusqu'ici, tu as testé des **fonctions JavaScript** — des entrées, des sorties, de la logique.

Aujourd'hui, tu vas tester quelque chose de différent : **ce qu'un utilisateur voit et fait dans le navigateur**.
Playwright va ouvrir Chrome, naviguer dans l'application, cliquer, taper du texte — exactement comme toi.

---

## Avant de commencer — qu'est-ce que Playwright ?

Playwright est un outil qui **pilote un vrai navigateur** depuis ton code.

Au lieu d'écrire :
> *"appelle cette fonction avec ces arguments et vérifie le retour"*

Tu écris :
> *"ouvre cette page, clique sur ce bouton, vérifie que ce texte est visible"*

Playwright ne connaît pas ton code React. Il ne sait pas ce qu'est un composant, un state, un hook.
Il voit uniquement **ce qu'un utilisateur verrait** : des éléments HTML dans un navigateur.

---

## Étape 1 — Mise en place

### 1.1 Vérifie que tu es sur la bonne branche

```bash
git checkout j2/start
npm install
```

### 1.2 Installe Playwright

Playwright est une librairie npm comme les autres. Elle s'installe dans le projet :

```bash
npm install -D @playwright/test
```

> **Pourquoi `-D` ?** C'est une dépendance de développement — elle n'a aucune utilité
> en production, uniquement en local pour faire tourner les tests.

### 1.3 Installe le navigateur

Playwright ne se contente pas d'installer du JavaScript — il a aussi besoin de télécharger
une version de Chrome qu'il va piloter lui-même. C'est une étape à faire **une seule fois**
sur ta machine :

```bash
npx playwright install chromium
```

> **Pourquoi une installation séparée ?** Playwright embarque ses propres navigateurs
> pour garantir que les tests se comportent de la même façon sur toutes les machines —
> indépendamment de la version de Chrome installée sur ton OS.

### 1.4 Lance l'exemple du formateur

Le formateur vient de te montrer comment un test Playwright est structuré.
Ouvre `e2e/watchlist.spec.js` — le premier scénario est partiellement écrit.

Lance-le pour voir Playwright en action :

```bash
npx playwright test
```

Un navigateur Chrome va s'ouvrir, remplir le champ titre, sélectionner un genre, puis s'arrêter.
La suite du test est à compléter.

Ouvre le rapport pour visualiser ce qui s'est passé :

```bash
npx playwright show-report
```

---

## Étape 2 — Comprendre la syntaxe

Voici les outils que tu vas utiliser dans cet atelier :

| Action | Code Playwright |
|---|---|
| Naviguer vers une page | `await page.goto('/')` |
| Trouver un input par son placeholder | `page.getByPlaceholder('Titre de la série *')` |
| Taper du texte dans un input | `await element.fill('Breaking Bad')` |
| Cliquer sur un bouton par son texte | `await page.getByRole('button', { name: 'Ajouter' }).click()` |
| Ouvrir une liste déroulante | `await page.getByRole('combobox').click()` |
| Sélectionner une option | `await page.getByRole('option', { name: 'Crime' }).click()` |
| Vérifier qu'un texte est visible | `await expect(page.getByText('Breaking Bad')).toBeVisible()` |

> **Important :** Playwright attend automatiquement que les éléments apparaissent avant d'agir.
> Si un élément met du temps à s'afficher, Playwright patiente sans que tu aies à écrire quoi que ce soit.
> Par défaut, il attend jusqu'à **30 secondes** avant d'échouer.

---

## Étape 3 — Scénario 1 : ajouter une série à la watchlist

**Objectif :** compléter le premier test dans `watchlist.spec.js`.

Le début est déjà écrit — il remplit le titre et sélectionne le genre.
Tu dois compléter les deux dernières étapes :

1. **Clique sur le bouton "Ajouter"**
2. **Vérifie que "Breaking Bad" apparaît dans la liste**

Lance les tests à chaque étape pour vérifier que ça fonctionne :

```bash
npx playwright test
```

---

## Étape 4 — Scénario 2 : marquer une série comme vue

**Objectif :** écrire le deuxième test de zéro, en suivant les instructions dans les commentaires du fichier.

Ce scénario est plus long — il enchaîne plusieurs actions :

1. Ajouter "Ozark" (genre Thriller) à la watchlist
2. Cliquer sur "Marquer comme vu"
3. Cliquer sur la 4ème étoile dans la modale de notation
4. Confirmer
5. Vérifier que la satisfaction moyenne apparaît dans le header

> **Conseil :** écris et teste une action à la fois. Ne cherche pas à tout écrire d'un coup
> avant de lancer. Playwright te dira exactement quelle action a échoué et pourquoi.

---

## Bilan — avant la correction

Prépare tes réponses à ces questions :

1. Quelle est la différence fondamentale entre ces tests et ceux de Vitest ?
2. Playwright connaît-il tes composants React ? Comment il trouve les éléments dans la page ?
3. À quelle fréquence lancerait-on ces tests dans un vrai projet — à chaque sauvegarde comme Vitest, ou à quel autre moment ?
