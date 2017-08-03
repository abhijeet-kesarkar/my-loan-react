import React, { Component } from 'react';
import {Controls, ApplicationProgress} from '../../config/Components';

class PersonalDetails extends Component {
  render() {
    return (
      <div>
        <ApplicationProgress path={this.props.location.pathname}/>
        PersonalDetails
        <Controls path={this.props.location.pathname}></Controls>

      </div>
    );
  }
}

export default PersonalDetails;
