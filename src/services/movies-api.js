import axios from 'axios';

const KEY_API = '81fd4871d370f3527eeb90ebea46cab5';

export const fetchPopularMovies = () => {
  const HOME_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY_API}`;
  return axios.get(HOME_URL).then(response => response.data);
};

export const fetchSearchedMovies = query => {
  const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${KEY_API}&query=${query}`;
  return axios.get(SEARCH_URL).then(response => response.data);
};

export const fetchMovieInfo = id => {
  const ALL_MOVIE_INFO = `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY_API}`;
  return axios.get(ALL_MOVIE_INFO).then(response => response.data);
};

export const fetchCast = id => {
  const ACTORS_URL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY_API}`;
  return axios.get(ACTORS_URL).then(response => response.data);
};

export const fetchReviews = id => {
  const REVIEWS_URL = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY_API}`;
  return axios.get(REVIEWS_URL);
};
