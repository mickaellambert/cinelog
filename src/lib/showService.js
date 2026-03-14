const API_KEY = import.meta.env.VITE_OMDB_API_KEY
const BASE_URL = 'https://www.omdbapi.com'

export async function searchShows(query) {
  const response = await fetch(
    `${BASE_URL}/?s=${encodeURIComponent(query)}&type=series&apikey=${API_KEY}`
  )
  const data = await response.json()

  if (data.Response === 'False') {
    return []
  }

  const results = []

  for (let i = 0; i < data.Search.length; i++) {
    const show = data.Search[i]
    results.push({
      imdbId: show.imdbID,
      title: show.Title,
      poster: show.Poster !== 'N/A' ? show.Poster : null,
    })
  }

  return results
}

export async function getShowDetails(imdbId) {
  const response = await fetch(
    `${BASE_URL}/?i=${imdbId}&apikey=${API_KEY}`
  )
  const data = await response.json()

  return {
    imdbId: data.imdbID,
    title: data.Title,
    poster: data.Poster !== 'N/A' ? data.Poster : null,
    genre: data.Genre ? data.Genre.split(',')[0].trim() : null,
  }
}
