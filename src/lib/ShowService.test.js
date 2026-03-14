import { describe, it, expect } from 'vitest'
import { ShowService } from './ShowService'

// ─────────────────────────────────────────────────────────────
// Bienvenue dans l'atelier "Tester sans mock".
//
// Ce fichier teste ShowService en appelant la VRAIE API OMDb.
// Pas de simulation, pas de données inventées — le vrai réseau.
//
// Lance les tests avec : npm test
// Observe attentivement ce qui se passe.
// Certains tests vont poser problème — c'est volontaire.
// ─────────────────────────────────────────────────────────────

const showService = new ShowService()

describe('ShowService', () => {
  // ✅ Exemple complet — lis-le attentivement avant de continuer
  //
  // Ce test appelle la vraie API OMDb.
  // Il passe... mais remarque deux choses :
  //   1. La durée d'exécution (regarde le temps affiché par Vitest)
  //   2. Le timeout à 10000ms en bas — sans ça, Vitest abandonne après 5s
  //
  // Pose-toi la question : que se passe-t-il si OMDb est en maintenance
  // ce matin et que tu dois présenter ton projet ?
  it('should return results for "Breaking Bad"', async () => {
    const results = await showService.search('Breaking Bad')
    expect(results.length).toBeGreaterThan(0)
  }, 10000)

  // TODO — vérifie que le premier résultat contient bien un titre et une affiche
  //
  // Hint : cherche "Narcos" et inspecte results[0].title et results[0].poster
  //
  // Ce test va probablement passer... mais réfléchis :
  //   - Est-ce que toutes les séries ont forcément une affiche sur OMDb ?
  //   - Si demain OMDb change son format de réponse, ton test casse
  //   - Tu ne contrôles pas ce que l'API retourne — c'est OMDb qui décide
  //
  // Note : tape le mot entier (ex: "Narcos" et pas "Narc") —
  // OMDb recherche sur des mots complets, pas des fragments
  it('should return shows with a title and a poster', async () => {
    // ⚠️ Ne pas supprimer — garantit que tu as bien écrit au moins un expect() ci-dessous
    // Sans cette ligne, un test vide passerait au vert sans rien vérifier
    expect.hasAssertions()
  }, 10000)

  // TODO — vérifie que le service gère correctement une erreur de l'API
  //
  // Par exemple : que se passe-t-il si OMDb répond avec une erreur 500 ?
  // Notre service devrait retourner [] plutôt que de planter.
  //
  // Essaie d'écrire ce test. Tu vas te heurter à un problème :
  //   Comment tu provoques une erreur 500 sur les serveurs d'OMDb ?
  //   Tu ne peux pas. Ce n'est pas ton serveur.
  //
  // C'est exactement le problème qu'on va résoudre avec les mocks.
  // Pour l'instant, laisse ce test de côté et note pourquoi tu bloques.
  it('should return an empty array when the API returns an error', async () => {
    // ⚠️ Ne pas supprimer — garantit que tu as bien écrit au moins un expect() ci-dessous
    // Sans cette ligne, un test vide passerait au vert sans rien vérifier
    expect.hasAssertions()
  }, 10000)

  // TODO — vérifie que le service gère un timeout réseau
  //
  // Imagine que la connexion est très lente ou coupée.
  // Notre service devrait gérer ça proprement.
  //
  // Même problème qu'au-dessus : comment tu coupes internet
  // pendant un test automatisé ? Tu ne peux pas.
  //
  // Ce test est volontairement impossible à écrire ici.
  // Garde-le tel quel et retiens pourquoi — c'est le sujet du cours de cet après-midi.
  it('should handle a network timeout', async () => {
    // ⚠️ Ne pas supprimer — garantit que tu as bien écrit au moins un expect() ci-dessous
    // Sans cette ligne, un test vide passerait au vert sans rien vérifier
    expect.hasAssertions()
  }, 10000)
})
