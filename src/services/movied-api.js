// import axios from 'axios';

const API_KEY = '820ca83899c51858e27ad82c76b45d7b';
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchMoviedAPI(query, searchQuery = '') {
  const request = await fetch(
    `${BASE_URL}${query}?api_key=${API_KEY}${
      !searchQuery ? '' : `&query=${searchQuery}`
    }`,
  );
  const response = await request.json();
  const { results } = response;

  return results ?? response;
}

export default fetchMoviedAPI;

// const fetchTrends = async () => {
//   const responce = await axios.get(
//     `${BASE_URL}trending/movie/day?api_key=${API_KEY}`,
//   );
//   const trendingMovies = responce.data.results.map(({ id, title }) => {
//     return { id, title };
//   });

//   return trendingMovies;
// };

// const fetchMoviesBySearch = async query => {
//   const responceCasts = await axios.get(
//     `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`,
//   );

//   return responceCasts.data.results;
// };

// const fetchMovieById = async movie_id => {
//   const responceId = await axios.get(
//     `${BASE_URL}movie/${movie_id}?api_key=${API_KEY}&language=en-US`,
//   );
//   return responceId.data;
// };

// const fetchCast = async id => {
//   const responceCasts = await axios.get(
//     `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`,
//   );
//   return responceCasts.data;
// };

// const fetchReviews = async id => {
//   const responceReviews = await axios.get(
//     `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`,
//   );

//   const reviewsMovies = responceReviews.data.results.map(
//     ({ author, content, id }) => {
//       return { author, content, id };
//     },
//   );

//   return reviewsMovies;
// };

// export {
//   fetchTrends,
//   fetchMoviesBySearch,
//   fetchMovieById,
//   fetchCast,
//   fetchReviews,
// };
