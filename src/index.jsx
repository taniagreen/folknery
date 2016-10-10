/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
// import jquery from 'jquery';
import routes from './routes';

// Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import './styles/styles.scss';
import './styles/_bootstrap.scss';

// window.jQuery = jquery;

// require('bootstrap');
require('./favicon.ico'); // Tell webpack to load favicon.ico

render(
  <Router history={browserHistory} routes={routes} />
  , document.getElementById('app')
);
