import React, { Component } from 'react';
import CastMovies from '../components/CastMovies/CastMovies';
import * as moviesAPI from '../services/movies-api';
import profileMapper from '../utils/profileMapper';
import getId from '../utils/getIdFromProps';

class Cast extends Component {
  state = { cast: [] };

  componentDidMount() {
    const id = getId(this.props);
    moviesAPI.fetchCast(id).then(data => this.setState({ cast: data.cast }));
  }

  render() {
    const { cast } = this.state;
    const mapperFn = profileMapper(cast);
    return (
      <div>
        <CastMovies cast={mapperFn} />
      </div>
    );
  }
}

export default Cast;
