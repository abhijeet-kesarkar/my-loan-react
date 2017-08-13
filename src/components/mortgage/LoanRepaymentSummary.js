import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card, CardBlock, CardText, CardTitle, Button, ButtonGroup} from 'reactstrap';
import './LoanRepaymentSummary.css';

class LoanRepaymentSummary extends Component {

  render() {
    let repayment = 100;
    let totalInterest = this.props.duration * this.props.amount * (this.props.type === 'Fixed' ? 10 : 12) / 100;
    console.log('total interest', totalInterest);

    switch(this.props.frequency){
      case 'Weekly': repayment = (this.props.amount + totalInterest) / (this.props.duration * 52);
      break;
      case 'Fortnightly': repayment = (this.props.amount + totalInterest) / (this.props.duration * 26);
      break;
      case 'Monthly' : repayment = (this.props.amount + totalInterest) / (this.props.duration * 12);
      break;
      default: repayment = 0;
      break;
    }

    repayment = Math.round(repayment);
    return (
            <Card className="LoanRepaymentSummary">
                <CardBlock>
                <CardTitle>Repayment Summary</CardTitle>
                <CardText>
                  <h2>{!isNaN(repayment) ? `$${repayment}`: '-'}</h2>
                </CardText>
                  <Button size="sm" active={this.props.frequency === 'Weekly'} onClick={e=>this.props.onChange({'frequency':'Weekly'})}>Weekly</Button>{' '}
                  <Button size="sm" active={this.props.frequency === 'Fortnightly'} onClick={e=>this.props.onChange({'frequency':'Fortnightly'})}>Fortnightly</Button>{' '}
                  <Button size="sm" active={this.props.frequency === 'Monthly'} onClick={e=>this.props.onChange({'frequency':'Monthly'})}>Monthly</Button>
                </CardBlock>
            </Card>
    );
  }
}
LoanRepaymentSummary.propTypes = {
  purpose: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.number,
  duration: PropTypes.number,
  onChange: PropTypes.func,
};
export default LoanRepaymentSummary;
