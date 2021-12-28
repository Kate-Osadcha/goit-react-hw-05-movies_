import { fetchTrends } from '../../services/movied-api';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import PageHeading from '../../components/PageHeading/PageHeading';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchTrends().then(setMovies);
  }, []);

  return (
    <>
      <PageHeading text="Trending today" />

      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <Link
              to={{
                pathname: `movies/${movies.id}`,
                state: { params: location },
              }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
    </>
  );
};

export default HomePage;
