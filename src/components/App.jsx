import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import HomePage from '../pages/HomePage';
import MoviePage from '../pages/MoviePage';
import MovieDetailPage from '../pages/MovieDetailPage';
import NotFound from '../pages/NotFound';

const containerStyle = {
  maxWidth: 1170,
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: '0 16px',
};

const App = () => (
  <div style={containerStyle}>
    <Navigation />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/movies/:id" component={MovieDetailPage} />
      <Route path="/movies" component={MoviePage} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;
