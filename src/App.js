import React, { Component } from 'react';
import './App.css';
import AppRouter from './components/AppRouter';

class App extends Component {
  render() {
    return (
      <div className="Container">
        <div className="Header">
          <h3>My Loans</h3>
        </div>

        <div className="Content">
          <AppRouter></AppRouter>
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
