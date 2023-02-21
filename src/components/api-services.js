import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchPopularMovies = async () => {
  return await axios.get(
    'trending/all/day?api_key=6f17361e35711c6d99e819ce4497326d'
  );
};

export const fetchMovieBySearch = async (filmName) => {
  return await axios.get(`search/movie?api_key=6f17361e35711c6d99e819ce4497326d&query=${filmName}&language=en-US&page=1&include_adult=false`);
};

export const fetchMovieById = async filmId => {
  return await axios.get(
    `movie/${filmId}?api_key=6f17361e35711c6d99e819ce4497326d&language=en-US`
  );
};

export const fetchCastByMovie = async movieId => {
  return await axios.get(
    `movie/${movieId}/credits?api_key=6f17361e35711c6d99e819ce4497326d&language=en-US`
  );
};

export const fetchReviewsByMovie = async movieId => {
  return await axios.get(
    `movie/${movieId}/reviews?api_key=6f17361e35711c6d99e819ce4497326d&language=en-US&page=1`
  );
};
