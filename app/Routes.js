import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import Works from './containers/Works';

export default () => (
  <App>
    <Switch>
      <Route path={routes.WORKSPACE} component={Works} />
      <Route path={routes.HOME} component={HomePage} />
    </Switch>
  </App>
);
