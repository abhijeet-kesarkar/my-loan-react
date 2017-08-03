import React, { Component } from 'react';
import {Controls, ApplicationProgress} from '../../config/Components';

class Summary extends Component {
  render() {
    return (
      <div>
        <ApplicationProgress path={this.props.location.pathname}/>
        Summary
        <Controls path={this.props.location.pathname}></Controls>

      </div>
    );
  }
}

export default Summary;
