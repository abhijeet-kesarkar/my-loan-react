import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Controls, ApplicationProgress, LoanDetailsContainer, LoanRepaymentSummaryContainer} from '../../config/Components';
import {Grid} from 'semantic-ui-react';
import './LoanCalculator.css';

class LoanCalculator extends Component {
  render() {
    return (
      <div>
        <ApplicationProgress path={this.props.location.pathname}/>
        <Grid padded columns="equal">
            <Grid.Column mobile="16" tablet="10" computer="10">
              <LoanDetailsContainer/>
            </Grid.Column>
            <Grid.Column mobile="16" tablet="6" computer="6">
              <LoanRepaymentSummaryContainer/>
            </Grid.Column>
        </Grid>
        <Controls path={this.props.location.pathname} onNext={this.props.onNext}></Controls>
      </div>
    );
  }
}
LoanCalculator.propTypes = {
  onNext: PropTypes.func,
};
export default LoanCalculator;
