import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import SearchForm from '../components/SearchForm/SearchForm';
import MovieList from '../components/MovieList/MovieList';
import * as moviesAPI from '../services/movies-api';

const getMovieFromLocation = location =>
  queryString.parse(location.search).query;

class MoviePage extends Component {
  state = { items: [] };

  static propTypes = {
    location: PropTypes.shape().isRequired,
    history: PropTypes.shape().isRequired,
  };

  componentDidMount() {
    const { location } = this.props;
    const movie = getMovieFromLocation(location);

    moviesAPI
      .fetchSearchedMovies(movie)
      .then(items => this.setState({ items: items.results }));
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;

    const prevMoviesSearch = getMovieFromLocation(prevProps.location);
    const nextMoviesSearch = getMovieFromLocation(location);

    if (prevMoviesSearch !== nextMoviesSearch) {
      moviesAPI
        .fetchSearchedMovies(nextMoviesSearch)
        .then(items => this.setState({ items: items.results }));
    }
  }

  handleCategoryChange = query => {
    const { history, location } = this.props;

    return history.push(
      query !== ''
        ? { ...location, search: `query=${query}` }
        : { ...location, search: '' },
    );
  };

  render() {
    const { items } = this.state;
    const { location } = this.props;
    const qsMovie = getMovieFromLocation(location);
    return (
      <div>
        <SearchForm onChange={this.handleCategoryChange} value={qsMovie} />
        {items.length > 0 && <MovieList items={items} />}
      </div>
    );
  }
}

export default MoviePage;
