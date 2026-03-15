import { test, expect } from '@playwright/test'

// ─────────────────────────────────────────────────────────────
// Bienvenue dans l'atelier Playwright.
//
// Ici, on ne teste plus des fonctions JavaScript.
// On pilote un vrai navigateur Chrome comme le ferait un utilisateur.
//
// Lance les tests avec : npx playwright test
// Ouvre le rapport avec : npx playwright show-report
// ─────────────────────────────────────────────────────────────

// Vide la watchlist avant chaque test pour partir d'une liste propre.
// L'app charge des séries par défaut — sans ça, elles interfèrent avec nos vérifications.
test.beforeEach(async ({ page }) => {
  await page.goto('/')
  await page.evaluate(() => {
    localStorage.setItem('cinelog_watchlist', JSON.stringify([]))
  })
  await page.reload()
})

test.describe('CineLog', () => {

  // ✅ Scénario 1 — ajouter une série à la watchlist
  //
  // Ce test simule exactement ce qu'un utilisateur ferait :
  //   1. Il tape un titre dans le champ "Titre de la série"
  //   2. Il sélectionne un genre dans la liste déroulante
  //   3. Il clique sur "Ajouter"
  //   4. Il vérifie que la série apparaît dans sa liste
  //
  // Les étapes 1 et 2 sont écrites pour toi — complète la suite.
  test('should add a show to the watchlist', async ({ page }) => {
    // Tape le titre dans le champ de saisie
    await page.getByPlaceholder('Titre de la série *').fill('Breaking Bad')

    // Ouvre la liste déroulante et sélectionne un genre
    // Note : page.locator('form') est nécessaire car il y a aussi un select dans les filtres
    await page.locator('form').getByRole('combobox').click()
    await page.getByRole('option', { name: 'Crime' }).click()

    // TODO — clique sur le bouton "Ajouter"
    // Hint : page.getByRole('button', { name: '...' }).click()

    // TODO — vérifie que "Breaking Bad" apparaît dans la liste
    // Hint : page.getByText('...') et toBeVisible()
  })

  // TODO — Scénario 2 : marquer une série comme vue et vérifier la moyenne
  //
  // Ce scénario enchaîne plusieurs actions :
  //   1. Ajoute "Ozark" (genre : Thriller) à la watchlist
  //      → mêmes étapes que le scénario 1
  //   2. Clique sur "Marquer comme vu"
  //      → Hint : page.getByRole('button', { name: 'Marquer comme vu' })
  //   3. Dans la modale, clique sur la 4ème étoile
  //      → Hint : page.getByRole('dialog').getByRole('button').nth(3).click()
  //   4. Clique sur "Confirmer"
  //      → Hint : page.getByRole('button', { name: 'Confirmer' })
  //   5. Vérifie que la satisfaction moyenne apparaît dans le header
  //      → Hint : page.getByText('Satisfaction moyenne')
  test('should mark a show as watched and update the average rating', async ({ page }) => {

  })

})
