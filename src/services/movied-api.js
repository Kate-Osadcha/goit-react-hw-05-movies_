const API_KEY = '820ca83899c51858e27ad82c76b45d7b';
const BASE_URL = 'https://api.themoviedb.org/3/';

async function baseFetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchTrends() {
  return baseFetchWithErrorHandling(
    `${BASE_URL}trending/all/day?api_key=${API_KEY}`,
  );
}

export function fetchMoviesBySearch(searchQuery, currentPage) {
  return baseFetchWithErrorHandling(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&page=${currentPage}&include_adult=false&query=${searchQuery}`,
  );
}

export function fetchMovieById(movieId) {
  return baseFetchWithErrorHandling(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  );
}

export function fetchCast(movieId) {
  return baseFetchWithErrorHandling(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
  );
}

export function fetchReviews(movieId) {
  return baseFetchWithErrorHandling(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  );
}
