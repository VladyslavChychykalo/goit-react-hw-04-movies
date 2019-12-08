import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Movie from '../components/Movie/Movie';
import Cast from './Cast';
import Review from './Review';
import * as moviesAPI from '../services/movies-api';

const getIdFromProps = props => props.match.params.id;

const mapper = movie => {
  return movie.map(({ poster_path: link, ...props }) => ({
    link,
    ...props,
  }));
};

class MovieDetailPage extends Component {
  state = { movie: [] };

  static propTypes = {
    location: PropTypes.shape().isRequired,
    history: PropTypes.shape().isRequired,
  };

  componentDidMount() {
    const id = getIdFromProps(this.props);
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
    const movieItem = mapper(movie);
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
