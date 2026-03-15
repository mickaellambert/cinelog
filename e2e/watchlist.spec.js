import { test, expect } from '@playwright/test'

// Vide le localStorage avant chaque test pour partir d'une liste vide.
// Sans ça, les séries pré-chargées de l'app interfèrent avec nos vérifications.
test.beforeEach(async ({ page }) => {
  await page.goto('/')
  await page.evaluate(() => {
    localStorage.setItem('cinelog_watchlist', JSON.stringify([]))
  })
  await page.reload()
})

test.describe('CineLog', () => {

  // Scénario 1 — ajouter une série à la watchlist
  test('should add a show to the watchlist', async ({ page }) => {
    await page.getByPlaceholder('Titre de la série *').fill('Breaking Bad')

    await page.locator('form').getByRole('combobox').click()
    await page.getByRole('option', { name: 'Crime' }).click()

    await page.getByRole('button', { name: 'Ajouter' }).click()

    await expect(page.getByText('Breaking Bad')).toBeVisible()
  })

  // Scénario 2 — marquer une série comme vue et vérifier la moyenne
  test('should mark a show as watched and update the average rating', async ({ page }) => {
    // Ajouter "Ozark" à la watchlist
    await page.getByPlaceholder('Titre de la série *').fill('Ozark')
    await page.locator('form').getByRole('combobox').click()
    await page.getByRole('option', { name: 'Thriller' }).click()
    await page.getByRole('button', { name: 'Ajouter' }).click()

    // Marquer comme vu
    await page.getByRole('button', { name: 'Marquer comme vu' }).click()

    // Cliquer sur la 4ème étoile dans la modale
    await page.getByRole('dialog').getByRole('button').nth(3).click()

    // Confirmer
    await page.getByRole('button', { name: 'Confirmer' }).click()

    // Vérifier que la moyenne apparaît dans le header
    await expect(page.getByText('Satisfaction moyenne')).toBeVisible()
  })

})
