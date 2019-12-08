import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Movie from '../components/Movie/Movie';
import Cast from './Cast';
import Review from './Review';
import * as moviesAPI from '../services/movies-api';
import getId from '../utils/getIdFromProps';
import posterMapper from '../utils/posterMapper';

class MovieDetailPage extends Component {
  state = { movie: [] };

  static propTypes = {
    location: PropTypes.shape().isRequired,
    history: PropTypes.shape().isRequired,
  };

  componentDidMount() {
    const id = getId(this.props);
    moviesAPI
      .fetchMovieInfo(id)
      .then(movie => this.setState({ movie: [{ ...movie }] }));
  }

  handleGoBack = () => {
    const { history, location } = this.props;

    return history.push(location.state ? location.state.from : '/');
  };

  render() {
    const { movie } = this.state;
    const movieItem = posterMapper(movie);
    return (
      <div>
        {movie && <Movie onClick={this.handleGoBack} movies={movieItem} />}
        <Route path="/movies/:id/cast" component={Cast} />
        <Route path="/movies/:id/reviews" component={Review} />
      </div>
    );
  }
}

export default MovieDetailPage;
