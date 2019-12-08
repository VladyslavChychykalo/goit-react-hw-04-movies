import React from 'react';
import PropTypes from 'prop-types';

const CastItem = ({ link, name, character, alt }) => (
  <div>
    <img
      src={
        link === null
          ? 'http://image.tmdb.org/t/p/original/zUqyn3aQXTzeP1n8yd8Udt1twYA.jpg'
          : `http://image.tmdb.org/t/p/original${link}`
      }
      alt={alt}
      style={{ width: '185px', height: '200px' }}
    />
    <p>{name}</p>
    <p>{character}</p>
  </div>
);

CastItem.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  link: PropTypes.string,
  alt: PropTypes.string,
};

CastItem.defaultProps = {
  link: 'http://image.tmdb.org/t/p/original/zUqyn3aQXTzeP1n8yd8Udt1twYA.jpg',
  alt: 'cast_image',
};

export default CastItem;
