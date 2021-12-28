import axios from 'axios';

const API_KEY = '820ca83899c51858e27ad82c76b45d7b';
const BASE_URL = 'https://api.themoviedb.org/3/';

//  список самых популярных фильмов на сегодня для создания коллекции на главной странице.
const fetchTrends = async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}trending/all/day?api_key=${API_KEY}`,
    );
    const trends = data.results;

    return trends;
  } catch (error) {
    console.error('Smth wrong with fetch trends in api', error);
  }
};

// поиск кинофильма по ключевому слову на странице фильмов.
const fetchMoviesBySearch = async (searchQuery, currentPage) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&page=${currentPage}&include_adult=false&query=${searchQuery}`,
    );

    const results = data.results;

    return results;
  } catch (error) {
    console.error('Smth wrong with fetch movie search in api', error);
  }
};

// запрос полной информации о фильме для страницы кинофильма.
const fetchMovieById = async movie_id => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}movie/${movie_id}?api_key=${API_KEY}&language=en-US`,
    );
    return data;
  } catch (error) {
    console.error('Smth wrong with fetch movie id in api', error);
  }
};

// // запрос информации о актёрском составе для страницы кинофильма.

const fetchCast = async id => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
    );
    return data;
  } catch (error) {
    console.error('Smth wrong with fetch cast in api', error);
  }
};

// запрос обзоров для страницы кинофильма.
const fetchReviews = async id => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
    );
    return data;
  } catch (error) {
    console.error('Smth wrong with fetch reviews in api', error);
  }
};

export {
  fetchTrends,
  fetchMoviesBySearch,
  fetchMovieById,
  fetchCast,
  fetchReviews,
};

// const API_KEY = '820ca83899c51858e27ad82c76b45d7b';
// const BASE_URL = 'https://api.themoviedb.org/3/';

// async function baseFetchWithErrorHandling(url = '', config = {}) {
//   const response = await fetch(url, config);
//   return response.ok
//     ? await response.json()
//     : Promise.reject(new Error('Not found'));
// }

// export function fetchTrends() {
//   return baseFetchWithErrorHandling(
//     `${BASE_URL}trending/all/day?api_key=${API_KEY}`,
//   );
// }

// export function fetchMoviesBySearch(searchQuery, currentPage) {
//   return baseFetchWithErrorHandling(
//     `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&page=${currentPage}&include_adult=false&query=${searchQuery}`,
//   );
// }

// export function fetchMovieById(movieId) {
//   return baseFetchWithErrorHandling(
//     `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`,
//   );
// }

// export function fetchCast(movieId) {
//   return baseFetchWithErrorHandling(
//     `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
//   );
// }

// export function fetchReviews(movieId) {
//   return baseFetchWithErrorHandling(
//     `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
//   );
// }
