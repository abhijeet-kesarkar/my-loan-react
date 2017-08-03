import React, { Component } from 'react';
import {Controls, ApplicationProgress} from '../../config/Components';

class Identification extends Component {
  render() {
    return (
      <div>
        <ApplicationProgress path={this.props.location.pathname}/>
        Identification
        <Controls path={this.props.location.pathname}></Controls>

      </div>
    );
  }
}

export default Identification;
