import React, { Component } from 'react';
import CastMovies from '../components/CastMovies/CastMovies';
import * as moviesAPI from '../services/movies-api';

const getIdFromProps = props => props.match.params.id;

const mapper = cast => {
  return cast.map(({ profile_path: link, ...props }) => ({
    link,
    ...props,
  }));
};

class Cast extends Component {
  state = { cast: [] };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    moviesAPI.fetchCast(id).then(data => this.setState({ cast: data.cast }));
  }

  render() {
    const { cast } = this.state;
    const mapperFn = mapper(cast);
    return (
      <div>
        <CastMovies cast={mapperFn} />
      </div>
    );
  }
}

export default Cast;
