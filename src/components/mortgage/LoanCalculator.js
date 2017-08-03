import React, { Component } from 'react';
import {Controls, ApplicationProgress} from '../../config/Components';

class LoanCalculator extends Component {
  render() {
    return (
      <div>
        <ApplicationProgress path={this.props.location.pathname}/>
        Loan Calculator
        <Controls path={this.props.location.pathname}></Controls>
      </div>
    );
  }
}

export default LoanCalculator;
