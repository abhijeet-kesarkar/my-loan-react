import React, { Component } from 'react';
import {Controls, ApplicationProgress, IncomeDetailsContainer} from '../../config/Components';

class FinancialDetails extends Component {
  render() {
    return (
      <div>
        <ApplicationProgress path={this.props.location.pathname}/>
        <div className="ContentContainer">
        <IncomeDetailsContainer/>
        </div>
        <Controls path={this.props.location.pathname}></Controls>

      </div>
    );
  }
}

export default FinancialDetails;
