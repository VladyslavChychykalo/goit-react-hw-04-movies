import React from 'react';
import PropTypes from 'prop-types';
import CastItem from './CastItem/CastItem';

const CastMovies = ({ cast }) => (
  <div>
    {cast.map(item => (
      <div key={item.id}>
        <CastItem {...item} />
      </div>
    ))}
  </div>
);

CastMovies.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      link: PropTypes.string,
    }),
  ).isRequired,
};

export default CastMovies;
