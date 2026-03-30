// @ts-check
import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',

  reporter: 'html',

  use: {
    // L'URL de base de l'app — Vite démarre sur ce port par défaut
    baseURL: 'http://localhost:5173',

    // Capture une trace si un test échoue (utile pour déboguer)
    trace: 'on-first-retry',
  },

  // Démarre le serveur de développement automatiquement avant les tests
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: true,
  },

  // On teste uniquement sur Chrome pour cet atelier
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
})
