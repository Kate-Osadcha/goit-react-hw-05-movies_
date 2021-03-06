import React, { useState, useEffect } from 'react';
import { NavLink, useRouteMatch, Route } from 'react-router-dom';
import { useParams, useHistory } from 'react-router-dom';
import fetchMoviedAPI from '../../services/movied-api';
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews/Reviews';
import s from './MovieCard.module.css';

function MovieCard() {
  const { movieId } = useParams();
  const { url } = useRouteMatch();
  const history = useHistory();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMoviedAPI(`/movie/${movieId}`).then(setMovie);
  }, [movieId]);

  return (
    <div>
      <button
        type="button"
        className={s.button}
        onClick={() => history.goBack()}
      >
        Go Back
      </button>

      <>
        {movie && (
          <div>
            <div>
              <img
                src={`https://www.themoviedb.org/t/p/w500${movie.poster_path}`}
                alt=""
              />
            </div>
            <div>
              <h3>{movie.title}</h3>
              <h4>{movie.tagline}</h4>
              <ul>
                <li>Vote: {movie.vote_average}/10</li>
                <li>Votes: {movie.vote_count}</li>
                <li>Release date: {movie.release_date}</li>
                <li>
                  Runtime: {Math.floor(movie.runtime / 60)}:{movie.runtime % 60}
                </li>
              </ul>
              <h4>Overview</h4>
              <p>{movie.overview}</p>
              <ul>
                Genres
                {movie.genres.map(genre => {
                  return <li key={genre.id}>{genre.name}</li>;
                })}
              </ul>
            </div>
            <div>
              <h4>Additional information</h4>
              <ul>
                <li>
                  <NavLink to={`${url}/cast`}>Cast</NavLink>
                </li>
                <li>
                  <NavLink to={`${url}/reviews`}>Reviews</NavLink>
                </li>
              </ul>
            </div>

            <Route path="/movies/:movieId/cast">
              <Cast movieId={movieId} />
            </Route>
            <Route path="/movies/:movieId/reviews">
              <Reviews movieId={movieId} />
            </Route>
          </div>
        )}
      </>
    </div>
  );
}

export default MovieCard;
