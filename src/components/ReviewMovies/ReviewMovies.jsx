import React from 'react';
import PropTypes from 'prop-types';

const ReviewMovies = ({ results }) => (
  <div>
    {results.length === 0 ? (
      <p>We dont have reviews for this movie</p>
    ) : (
      results.map(({ id, author, content }) => (
        <div key={id}>
          <p>{author}</p>
          <p>{content}</p>
        </div>
      ))
    )}
  </div>
);

ReviewMovies.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ReviewMovies;
