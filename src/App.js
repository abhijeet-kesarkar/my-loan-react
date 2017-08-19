import React, { Component } from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import { Grid } from 'semantic-ui-react'

class App extends Component {

  render() {
    return (
      <Grid divided='vertically' padded>
        <Grid.Row>
          <Grid.Column color="black">
            <h3>My Loans</h3>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row centered>
          <Grid.Column color="teal" computer={14} tablet={14} mobile={16}>
            <AppRouter></AppRouter>
          </Grid.Column>
        </Grid.Row>
        
        <Grid.Row>
          <Grid.Column color="grey">
            <footer>
              <p>Contact information: <a href="mailto:someone@example.com">
              someone@example.com</a>.</p>
            </footer>          
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
