import React, { Component } from 'react';
import * as moviesAPI from '../services/movies-api';
import ReviewMovies from '../components/ReviewMovies/ReviewMovies';

const getIdFromProps = props => props.match.params.id;

class Review extends Component {
  state = { results: [] };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    moviesAPI
      .fetchReviews(id)
      .then(data => this.setState({ results: data.data.results }));
  }

  render() {
    const { results } = this.state;
    return (
      <div>
        {results.length === 0 ? (
          <p>We dont have any reviews for this movie</p>
        ) : (
          <ReviewMovies results={results} />
        )}
      </div>
    );
  }
}

export default Review;
