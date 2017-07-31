import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/landing/LandingPage';

class App extends Component {
  render() {
    return (
      <div className="Container">
        <div className="Header">
          <h3>My Loans</h3>
        </div>

        <div className="Content">
          <LandingPage></LandingPage>
        </div>

        <div className="Footer">
          <footer>
            <p>Contact information: <a href="mailto:someone@example.com">
            someone@example.com</a>.</p>
          </footer>
        </div>     
      </div>
    );
  }
}

export default App;
