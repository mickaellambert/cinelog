const BASE_URL = 'https://image.tmdb.org/t/p/original'

export const DEFAULT_WATCHLIST = [
  // Action
  {
    id: 1,
    title: 'Game of Thrones',
    genre: 'Action',
    poster: `${BASE_URL}/eRMfekBOnwyE9G0ffyEJIBOjX2n.jpg`,
    status: 'to_watch',
    rating: null,
  },
  {
    id: 2,
    title: 'Peaky Blinders',
    genre: 'Action',
    poster: `${BASE_URL}/wfD5hDb61sS203D0te7JbIzeyQe.jpg`,
    status: 'to_watch',
    rating: null,
  },

  // Animation
  {
    id: 3,
    title: 'Arcane',
    genre: 'Animation',
    poster: `${BASE_URL}/ypS7R36Vjcn51zZsXsta5onnaCo.jpg`,
    status: 'to_watch',
    rating: null,
  },
  {
    id: 4,
    title: 'Rick and Morty',
    genre: 'Animation',
    poster: `${BASE_URL}/tOpp4yPODFeaEr1KLz5fQ9jkJFx.jpg`,
    status: 'to_watch',
    rating: null,
  },

  // Comedy
  {
    id: 5,
    title: 'The Office',
    genre: 'Comedy',
    poster: `${BASE_URL}/2dApsoX4bd98szjrbj5i3syYOh2.jpg`,
    status: 'to_watch',
    rating: null,
  },
  {
    id: 6,
    title: 'Sex Education',
    genre: 'Comedy',
    poster: `${BASE_URL}/ikF16kXvZLi3feEAqX0oZu81uj2.jpg`,
    status: 'to_watch',
    rating: null,
  },
  {
    id: 7,
    title: 'Emily in Paris',
    genre: 'Comedy',
    poster: `${BASE_URL}/3Q0hd3heuWwDWpwcDkhQOA6TYWI.jpg`,
    status: 'to_watch',
    rating: null,
  },

  // Crime
  {
    id: 8,
    title: 'Breaking Bad',
    genre: 'Crime',
    poster: `${BASE_URL}/4YLQj5XRrMJ7gp8eb0h6umd0iNx.jpg`,
    status: 'to_watch',
    rating: null,
  },
  {
    id: 9,
    title: 'Narcos',
    genre: 'Crime',
    poster: `${BASE_URL}/lE81IZv7mCYxbanB4ibDeivB1qs.jpg`,
    status: 'to_watch',
    rating: null,
  },
  {
    id: 10,
    title: 'Money Heist',
    genre: 'Crime',
    poster: `${BASE_URL}/u5Ye3LqV5LqTGjLqtkTCkA4m63W.jpg`,
    status: 'to_watch',
    rating: null,
  },
  {
    id: 11,
    title: 'Mindhunter',
    genre: 'Crime',
    poster: `${BASE_URL}/fbKE87mojpIETWepSbD5Qt741fp.jpg`,
    status: 'to_watch',
    rating: null,
  },

  // Documentary
  {
    id: 12,
    title: 'Chernobyl',
    genre: 'Documentary',
    poster: `${BASE_URL}/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg`,
    status: 'to_watch',
    rating: null,
  },
  {
    id: 13,
    title: 'Planet Earth II',
    genre: 'Documentary',
    poster: `${BASE_URL}/tUKomxy50suT4MyxjYfOJDkZUq3.jpg`,
    status: 'to_watch',
    rating: null,
  },

  // Drama
  {
    id: 14,
    title: 'The Crown',
    genre: 'Drama',
    poster: `${BASE_URL}/1dWaBW3AESKJDWeXdFaPkJiOseM.jpg`,
    status: 'to_watch',
    rating: null,
  },
  {
    id: 15,
    title: 'Succession',
    genre: 'Drama',
    poster: `${BASE_URL}/aOXBLBRg7M5D2Zrs5luKD5cDB8O.jpg`,
    status: 'to_watch',
    rating: null,
  },

  // Horror
  {
    id: 16,
    title: 'Stranger Things',
    genre: 'Horror',
    poster: `${BASE_URL}/4Y5ZXYnWBIV8Vpe8hcA0LH6hC80.jpg`,
    status: 'to_watch',
    rating: null,
  },
  {
    id: 17,
    title: 'Wednesday',
    genre: 'Horror',
    poster: `${BASE_URL}/1UzED7WZJgzEIeVz1xiuZ1529nb.jpg`,
    status: 'to_watch',
    rating: null,
  },

  // Romance
  {
    id: 18,
    title: 'Normal People',
    genre: 'Romance',
    poster: `${BASE_URL}/x2NSrTSM9bZCADxn4A56VV83S6h.jpg`,
    status: 'to_watch',
    rating: null,
  },

  // Sci-Fi
  {
    id: 19,
    title: 'Dark',
    genre: 'Sci-Fi',
    poster: `${BASE_URL}/vbG0zu0lIVDZZaUVOZuBIE9kno3.jpg`,
    status: 'to_watch',
    rating: null,
  },
  {
    id: 20,
    title: 'Black Mirror',
    genre: 'Sci-Fi',
    poster: `${BASE_URL}/9acfIYfBuB4GFVROipM9YrqxsXd.jpg`,
    status: 'to_watch',
    rating: null,
  },
  {
    id: 21,
    title: 'The Mandalorian',
    genre: 'Sci-Fi',
    poster: `${BASE_URL}/s8lHYTNYM919rDFvMs33tOeMbYf.jpg`,
    status: 'to_watch',
    rating: null,
  },
  {
    id: 22,
    title: 'The Last of Us',
    genre: 'Sci-Fi',
    poster: `${BASE_URL}/4pMd9VAdqm96KA2W4X8yetgc7EF.jpg`,
    status: 'to_watch',
    rating: null,
  },

  // Thriller
  {
    id: 23,
    title: 'Ozark',
    genre: 'Thriller',
    poster: `${BASE_URL}/pCGyPVrI9Fzw6rE1Pvi4BIXF6ET.jpg`,
    status: 'to_watch',
    rating: null,
  },
  {
    id: 24,
    title: 'Squid Game',
    genre: 'Thriller',
    poster: `${BASE_URL}/heV89pC6pv5fz1plikfyQxYuE4L.jpg`,
    status: 'to_watch',
    rating: null,
  },
  {
    id: 25,
    title: 'The Witcher',
    genre: 'Thriller',
    poster: `${BASE_URL}/rhErSlk0M236rNFertVAZa9lz9S.jpg`,
    status: 'to_watch',
    rating: null,
  },
]
