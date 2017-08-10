import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon} from 'reactstrap';
import './LoanDetails.css';

class LoanDetails extends Component {
  render() {
    return (
      <Card className="ContentContainer">
        <Form >
              <FormGroup>
                <Label for="loanPurpose">What will you be using the loan for?</Label>
                <Input type="select" name="loanPurpose" id="loanPurpose" placeholder="Please select" value={this.props.purpose} onChange={e=>this.props.onChange({'purpose':e.target.value})}>
                  <option>Please Select</option>
                  <option>Purchase a new car</option>
                  <option>Purchase an used car</option>
                  <option>Refinance a loan</option>
                  <option>Travel or Holiday</option>
                  <option>Home Improvement</option>
                  <option>Education</option>
                  <option>Medical</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="loanAmount">How much would you like to borrow?</Label>
                <InputGroup>
                  <InputGroupAddon>$</InputGroupAddon>
                  <Input type="number" name="loanAmount" id="loanAmount" placeholder="amount.." value={this.props.amount} onChange={e=>this.props.onChange({'amount':Number(e.target.value)})}/>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label for="loanDuration">Over what period will you repay the loan?</Label>
                <Input type="select" name="loanDuration" id="loanDuration" value={this.props.duration} onChange={e=>this.props.onChange({'duration':Number(e.target.value)})}>
                  <option>Please Select</option>
                  <option value="1">1 Years</option>
                  <option value="2">2 Years</option>
                  <option value="3">3 Years</option>
                  <option value="4">4 Years</option>
                  <option value="5">5 Years</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="loanType">What type of loan would you like?</Label>
                <Input type="select" name="loanType" id="loanType" value={this.props.type} onChange={e=>this.props.onChange({'type':e.target.value})}>
                  <option>Please Select</option>
                  <option value="Fixed">Fixed 10.5% Interest Rate</option>
                  <option value="Variable">Variable @11% Interest Rate</option>
                </Input>
              </FormGroup>
            </Form>
          </Card>
            
    );
  }
}
LoanDetails.propTypes = {
  purpose: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.number,
  duration: PropTypes.number,
  onChange: PropTypes.func,
};
export default LoanDetails;
