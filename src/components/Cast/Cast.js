import React, { useState, useEffect } from 'react';
import fetchMoviedAPI from '../../services/movied-api';
import PropTypes from 'prop-types';

function Cast({ movieId }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchMoviedAPI(`/movie/${movieId}/credits`)
      .then(credits => {
        return credits.cast;
      })
      .then(setCast);
  }, [movieId]);

  return (
    cast && (
      <div>
        <ul>
          {cast.map(actor => {
            return (
              <li key={actor.cast_id}>
                {actor.profile_path && (
                  <img
                    src={`https://www.themoviedb.org/t/p/w500${actor.profile_path}`}
                    alt={actor.name}
                  ></img>
                )}
                <h4>{actor.name}</h4>
                <p>{actor.character}</p>
              </li>
            );
          })}
        </ul>
      </div>
    )
  );
}

Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default Cast;
