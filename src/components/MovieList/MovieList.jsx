import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

const MovieList = ({ items, location }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <Link
          to={{
            pathname: `/movies/${item.id}`,
            state: { from: location },
          }}
        >
          {item.title}
        </Link>
      </li>
    ))}
  </ul>
);

MovieList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  location: PropTypes.shape().isRequired,
};

export default withRouter(MovieList);
