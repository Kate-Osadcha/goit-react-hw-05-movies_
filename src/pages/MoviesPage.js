import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import Section from '../components/Section/Section';
import MoviesList from '../components/MoviesList/MoviesList';
import fetchMoviedAPI from '../services/movied-api';

function MoviesPage() {
  const [inputValue, setInputValue] = useState('');
  const [searchedMovies, setSearchedMovies] = useState(null);

  function getSubmitValue(value) {
    setInputValue(value);
  }

  useEffect(() => {
    if (!inputValue) return;
    fetchMoviedAPI('/search/movie', `${inputValue}`).then(setSearchedMovies);
  }, [inputValue]);

  return (
    <div>
      <Section title="Search your movie">
        <SearchBar onSubmitGet={getSubmitValue} />
        <MoviesList movies={searchedMovies} />
      </Section>
    </div>
  );
}

export default MoviesPage;
