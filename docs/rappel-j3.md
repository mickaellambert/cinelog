# Rappel J3 — Ce qu'on a appris hier

**Durée :** 30 minutes

---

## 1. Le matin — les tests E2E avec Playwright

Hier matin, vous avez découvert un nouveau type de test : les tests **End-to-End**.

Contrairement aux tests unitaires de J1, Playwright ne connaît pas votre code React.
Il pilote un **vrai navigateur Chrome** et interagit avec l'application exactement comme un utilisateur :

```js
await page.getByPlaceholder('Titre de la série *').fill('Breaking Bad')
await page.locator('form').getByRole('combobox').click()
await page.getByRole('option', { name: 'Crime' }).click()
await page.getByRole('button', { name: 'Ajouter' }).click()
await expect(page.getByText('Breaking Bad')).toBeVisible()
```

**Ce qu'il faut retenir :**
- Un test E2E teste un **scénario utilisateur complet**, pas une fonction isolée
- Playwright attend automatiquement que les éléments apparaissent — pas de `setTimeout`
- Ces tests sont plus lents que les tests unitaires — on ne les lance pas à chaque sauvegarde

---

## 2. L'après-midi — TDD et CI/CD

### Le TDD

Vous avez écrit les tests *avant* le code pour le module Stats.

Le cycle que vous avez vécu :

```
  🔴 Red    → écrire un test qui échoue
      ↓
  🟢 Green  → écrire le code minimal pour le faire passer
      ↓
  🔵 Refactor → améliorer le code sans casser les tests
      ↓
  recommencer
```

**Ce qu'il faut retenir :**
- TDD est une méthode de **conception**, pas juste de test
- Écrire les noms des `it()` avant le code, c'est écrire une spec
- Un code difficile à tester est souvent un code mal conçu

### Le CI/CD

Un pipeline CI/CD automatise la vérification du code à chaque push :

```
Push → Build → Tests → Livraison prête
```

**Ce qu'il faut retenir :**
- CI = vérifier automatiquement que rien n'est cassé à chaque push
- CD = le code est toujours dans un état prêt à livrer
- Un pipeline vert est aussi fiable que les tests qu'il exécute — pas plus

---

## 3. Où on en est dans la pyramide

```
        /\
       /  \
      / E2E \    ← hier matin : Playwright
     /--------\
    / Intégra- \
   /   tion    \  ← aujourd'hui : mocks
  /--------------\
 /  Unitaires    \  ← J1 : watchlist.js / J1 après-midi : TDD Stats
/------------------\
```

Aujourd'hui, on revient dans la couche **intégration** — mais avec les outils pour la faire correctement.

---

## 4. Le problème qu'on n'a pas encore résolu

En J1, vos tests unitaires étaient rapides et fiables.
En J2 matin, vos tests Playwright appelaient la vraie API OMDb — lents, dépendants du réseau.

Il reste une couche entre les deux : les **tests d'intégration avec mocks**.

Comment tester une fonction qui dépend d'une API externe — sans appeler cette API ?
C'est exactement ce qu'on fait aujourd'hui.

---

## 5. Ce qu'on fait aujourd'hui

| Créneau | Contenu |
|---|---|
| Maintenant | Rappel J2 (vous y êtes) |
| 9h30 – 11h00 | Atelier — Tester sans mock |
| 11h15 – 12h30 | Cours — Tests d'intégration & Mocks |
| 13h30 – 15h00 | Atelier — Écrire des tests avec des mocks |
| 15h15 – 16h30 | Correction live coding |
