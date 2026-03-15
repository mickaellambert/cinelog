// Module Stats — CineLog
//
// Ce fichier contient les fonctions de statistiques de la watchlist.
// Pour l'instant, toutes les fonctions sont vides — c'est toi qui vas les implémenter.
//
// Rappel TDD : implémente une fonction à la fois, fais passer ses tests,
// puis passe à la suivante.

export function getMostWatchedGenre(watchlist) {
  // Retourne le genre le plus fréquent parmi les séries regardées (status: 'watched')
  // Retourne null si aucune série n'a été regardée
}

export function getTopRatedShow(watchlist) {
  // Retourne la série avec la note la plus haute parmi les séries regardées
  // Retourne null si aucune série n'a été notée
}

export function countByStatus(watchlist) {
  // Retourne un objet avec le nombre de séries par statut
  // Exemple : { to_watch: 3, watched: 2 }
  // Retourne { to_watch: 0, watched: 0 } si la watchlist est vide
}
