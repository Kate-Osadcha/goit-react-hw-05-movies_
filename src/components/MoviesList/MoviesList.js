import React from 'react';
import { Link } from 'react-router-dom';
import s from './MovieList.module.css';
import PropTypes from 'prop-types';

function MoviesList({ movies }) {
  return (
    movies && (
      <ul>
        {movies.map(movie => (
          <li key={movie.id} className={s.item}>
            <Link to={`/movies/${movie.id}`} className={s.link}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    )
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    }),
  ),
};

export default MoviesList;
