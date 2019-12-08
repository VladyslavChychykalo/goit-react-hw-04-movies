import React from 'react';
import { NavLink } from 'react-router-dom';

const articleStyle = {
  color: 'palevioletred',
};

const Navigation = () => (
  <ul>
    <li>
      <NavLink to="/" exact activeStyle={articleStyle}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/movies" activeStyle={articleStyle}>
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
