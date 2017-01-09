import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePageContainer from './components/HomePageContainer';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/(:lang)" component={App}>
    <IndexRoute component={HomePageContainer} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
