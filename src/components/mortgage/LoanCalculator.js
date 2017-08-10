import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Controls, ApplicationProgress, LoanDetailsContainer, LoanRepaymentSummaryContainer} from '../../config/Components';
import {Container, Row, Col} from 'reactstrap';
import './LoanCalculator.css';

class LoanCalculator extends Component {
  render() {
    return (
      <div>
        <ApplicationProgress path={this.props.location.pathname}/>
        <Container className="ContentContainer">
          <Row>
            <Col xs="12" md="8">
              <LoanDetailsContainer/>
            </Col>
            <Col xs="12" md="4">
              <LoanRepaymentSummaryContainer/>
            </Col>
          </Row>
        </Container>
        <Controls path={this.props.location.pathname}></Controls>
      </div>
    );
  }
}
LoanCalculator.propTypes = {
  loanPurpose: PropTypes.string,
  onChange: PropTypes.func,
  loanType: PropTypes.string,
  loanAmount: PropTypes.number,
  loanDuration: PropTypes.number
};
export default LoanCalculator;
