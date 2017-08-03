import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import LandingPage from './landing/LandingPage';
import { ROUTER_CONFIG } from '../config/Router';


class AppRouter extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path="/" component={LandingPage}/>
        {
          ROUTER_CONFIG.map(route => {
            return <Route path={route.path} exact component={route.component} key={route.path}/>
          })
        }
        </div>
      </Router>
    );
  }
}

export default AppRouter;
