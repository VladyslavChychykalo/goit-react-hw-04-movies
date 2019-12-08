import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Movie = ({ onClick, movies }) => (
  <div>
    {movies.map(movie => (
      <div key={movie.id}>
        <button type="button" onClick={onClick}>
          Go back
        </button>
        <div>
          <img
            src={
              movie.link !== null
                ? `http://image.tmdb.org/t/p/original${movie.link}`
                : 'http://image.tmdb.org/t/p/original/zUqyn3aQXTzeP1n8yd8Udt1twYA.jpg'
            }
            alt=""
            style={{ width: '400px', height: '500px' }}
          />
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          {movie.genres.map(name => (
            <p key={name.id}>{name.name}</p>
          ))}
        </div>
        <div>
          <ul>
            <li>
              <Link to={`/movies/${movie.id}/cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`/movies/${movie.id}/reviews`}>Review</Link>
            </li>
          </ul>
        </div>
      </div>
    ))}
  </div>

  // <div>
  // <button type="button" onClick={onClick}>
  //   Go back
  // </button>
  // <div>
  //   <img
  //     src={
  //       movie.poster_path !== null
  //         ? `http://image.tmdb.org/t/p/original${movie.poster_path}`
  //         : 'http://image.tmdb.org/t/p/original/zUqyn3aQXTzeP1n8yd8Udt1twYA.jpg'
  //     }
  //     alt=""
  //     style={{ width: '400px', height: '500px' }}
  //   />
  //   <h1>{movie.title}</h1>
  //   <p>{movie.overview}</p>
  //   {movie.genres.map(name => (
  //     <p key={name.id}>{name.name}</p>
  //   ))}
  // </div>
  // <div>
  //   <ul>
  //     <li>
  //       <Link to={`/movies/${movie.id}/cast`}>Cast</Link>
  //     </li>
  //     <li>
  //       <Link to={`/movies/${movie.id}/reviews`}>Review</Link>
  //     </li>
  //   </ul>
  // </div>
  // </div>
);

Movie.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      genres: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
        }),
      ).isRequired,
      overview: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Movie;
