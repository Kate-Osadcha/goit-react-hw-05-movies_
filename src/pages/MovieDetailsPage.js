import React from 'react';
import Section from '../components/Section/Section';
import PropTypes from 'prop-types';

function MovieDetailsPage({ children }) {
  return (
    <div>
      <Section title="Movie info">{children}</Section>
    </div>
  );
}

MovieDetailsPage.propTypes = {
  children: PropTypes.any,
};

export default MovieDetailsPage;
