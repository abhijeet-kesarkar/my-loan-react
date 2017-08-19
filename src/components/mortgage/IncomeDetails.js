import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Container, Form, Label, Input} from 'semantic-ui-react';
import './IncomeDetails.css';

class IncomeDetails extends Component {
  render() {
    const incomeSourceOptions = [ 
      { key: '1', value: 'Salary', text: 'Salary' },   
      { key: '2', value: 'Rental', text: 'Rental' },   
    ]
    return (
      <Container>
        <Form>
          <Form.Select 
            label='What is the source of income?' 
            options={incomeSourceOptions} 
            placeholder='Please select..' 
            value={this.props.source} 
            onChange={(e, data)=>this.props.onChange({'source':data.value})}
            />
          <Form.Input label="How much do you earn per month before tax?">
            <Input 
              labelPosition='right'  
              placeholder="amount.." 
              type="number" 
              value={this.props.amount} 
              onChange={e=>this.props.onChange({'amount':Number(e.target.value)})}>
              <Label basic>$</Label>
              <input />
              <Label>.00</Label>
            </Input>
          </Form.Input>
          </Form>
      </Container>
            
    );
  }
}
IncomeDetails.propTypes = {
  source: PropTypes.string,
  amount: PropTypes.number,
  onChange: PropTypes.func,
};
export default IncomeDetails;
