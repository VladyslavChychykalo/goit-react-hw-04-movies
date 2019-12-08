import React, { Component } from 'react';
import * as moviesAPI from '../services/movies-api';
import MovieList from '../components/MovieList/MovieList';

class HomePage extends Component {
  state = { items: [] };

  componentDidMount() {
    moviesAPI
      .fetchPopularMovies()
      .then(items => this.setState({ items: items.results }));
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <h1>Trending today</h1>
        <MovieList items={items} />
      </div>
    );
  }
}

export default HomePage;
