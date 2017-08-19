import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card, Button, Statistic} from 'semantic-ui-react';
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
            <Card fluid>
              <Card.Content>
                <Card.Header>Repayment Summary</Card.Header>
                <Statistic>
                  <Statistic.Value>{!isNaN(repayment) ? `$${repayment}`: '-'}</Statistic.Value>
                  <Statistic.Label>per {this.props.frequency.replace('ly', '')}</Statistic.Label>
                </Statistic>
              </Card.Content>
              <Card.Content extra>
                <Button.Group>
                  <Button compact toggle active={this.props.frequency === 'Weekly'} onClick={e=>this.props.onChange({'frequency':'Weekly'})}>Weekly</Button>
                  <Button compact toggle active={this.props.frequency === 'Fortnightly'} onClick={e=>this.props.onChange({'frequency':'Fortnightly'})}>Fortnightly</Button>
                  <Button compact toggle active={this.props.frequency === 'Monthly'} onClick={e=>this.props.onChange({'frequency':'Monthly'})}>Monthly</Button>
                </Button.Group>
              </Card.Content>
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
