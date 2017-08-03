import React, { Component } from 'react';
import {Controls, ApplicationProgress} from '../../config/Components';

class FinancialDetails extends Component {
  render() {
    return (
      <div>
        <ApplicationProgress path={this.props.location.pathname}/>
        FinancialDetails
        <Controls path={this.props.location.pathname}></Controls>

      </div>
    );
  }
}

export default FinancialDetails;
