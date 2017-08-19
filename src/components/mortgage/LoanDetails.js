import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Container, Form, Label, Input} from 'semantic-ui-react';
import './LoanDetails.css';

class LoanDetails extends Component {
  render() {
    const loanPurposeOptions = [ 
      { key: '1', value: 'Purchase a new car', text: 'Purchase a new car' },   
      { key: '2', value: 'Purchase an used car', text: 'Purchase an used car' },   
      { key: '3', value: 'Refinance a loan', text: 'Refinance a loan' },   
      { key: '4', value: 'Travel or Holiday', text: 'Travel or Holiday' },   
      { key: '5', value: 'Home Improvement', text: 'Home Improvement' },   
      { key: '6', value: 'Education', text: 'Education' },   
      { key: '7', value: 'Medical', text: 'Medical' },   
    ]
    const yearOptions = [ 
      { key: '1', value: 1, text: '1 year' },   
      { key: '2', value: 2, text: '2 years' },   
      { key: '3', value: 3, text: '3 years' },   
      { key: '4', value: 4, text: '4 years' },   
      { key: '5', value: 5, text: '5 years' },   
      { key: '6', value: 6, text: '6 years' },   
      { key: '7', value: 7, text: '7 years' },   
    ]
    const loanTypeOptions = [ 
      { key: '1', value: 'Fixed', text: 'Fixed 10.5% Interest Rate' },   
      { key: '2', value: 'Variable', text: 'Variable @11% Interest Rate' },   
    ]

    return (
      <Container fluid>
        <Form >
              <Form.Select 
                label='What will you be using the loan for?' 
                options={loanPurposeOptions} 
                placeholder='Please select..' 
                value={this.props.purpose} 
                onChange={(e, data)=>this.props.onChange({'purpose':data.value})}
                />
              <Form.Input label="How much would you like to borrow?">
                <Input labelPosition='right'  placeholder="amount.." type="number" name="loanAmount" id="loanAmount" value={this.props.amount} onChange={e=>this.props.onChange({'amount':Number(e.target.value)})}>
                <Label basic>$</Label>
                <input />
                <Label>.00</Label>
                </Input>
              </Form.Input>
              <Form.Select 
                label='Over what period will you repay the loan?' 
                options={yearOptions} 
                placeholder='Please select..' 
                value={this.props.duration} 
                onChange={(e,data)=>this.props.onChange({'duration':Number(data.value)})}
                error={this.props.errors && this.props.errors.duration}
                />
              <Form.Select 
                label='What type of loan would you like?' 
                options={loanTypeOptions} 
                placeholder='Please select..' 
                value={this.props.type} 
                onChange={(e,data)=>this.props.onChange({'type':data.value})}
                />
            </Form>
          </Container>
            
    );
  }
}
LoanDetails.propTypes = {
  errors: PropTypes.object,
  purpose: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.number,
  duration: PropTypes.number,
  onChange: PropTypes.func,
};
export default LoanDetails;
