import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import LandingPage from './landing/LandingPage';
import LoanApplicationWizard from './application-wizard/LoanApplicationWizard';

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/apply" component={LoanApplicationWizard}/>
        </div>
      </Router>
    );
  }
}

export default AppRouter;
