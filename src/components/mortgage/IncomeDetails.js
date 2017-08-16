import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card, CardTitle, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon} from 'reactstrap';
import './IncomeDetails.css';

class IncomeDetails extends Component {
  render() {
    return (
      <Card className="ContentContainer">
        <CardTitle>Income Details</CardTitle>
        <Form >
          <FormGroup>
            <Label for="incomeSource">What is the source of income?</Label>
            <Input type="select" name="incomeSource" id="incomeSource" placeholder="Please select" value={this.props.source} onChange={e=>this.props.onChange({'source':e.target.value})}>
              <option>Please Select</option>
              <option>Salary</option>
              <option>Rental</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="incomeAmount">How much do you earn per month before tax?</Label>
            <InputGroup>
              <InputGroupAddon>$</InputGroupAddon>
              <Input type="number" name="incomeAmount" id="incomeAmount" placeholder="amount.." value={this.props.amount} onChange={e=>this.props.onChange({'amount':Number(e.target.value)})}/>
            </InputGroup>
          </FormGroup>
        </Form>
      </Card>
            
    );
  }
}
IncomeDetails.propTypes = {
  source: PropTypes.string,
  amount: PropTypes.number,
  onChange: PropTypes.func,
};
export default IncomeDetails;
