import React, { Component } from 'react';
import {Controls, ApplicationProgress, IncomeDetailsContainer} from '../../config/Components';
import {Accordion, Icon} from 'semantic-ui-react';

class FinancialDetails extends Component {
  render() {
    return (
      <div>
        <ApplicationProgress path={this.props.location.pathname}/>
        <Accordion styled fluid>
          <Accordion.Title>
            <Icon name='dropdown' />
            Income Details
          </Accordion.Title>
          <Accordion.Content>
              <IncomeDetailsContainer/>
          </Accordion.Content>
          <Accordion.Title>
            <Icon name='dropdown' />
            Expense Details
          </Accordion.Title>
          <Accordion.Content>
              <IncomeDetailsContainer/>
          </Accordion.Content>
          <Accordion.Title>
            <Icon name='dropdown' />
            Asset Details
          </Accordion.Title>
          <Accordion.Content>
              <IncomeDetailsContainer/>
          </Accordion.Content>
          <Accordion.Title>
            <Icon name='dropdown' />
            Liability Details
          </Accordion.Title>
          <Accordion.Content>
              <IncomeDetailsContainer/>
          </Accordion.Content>
        </Accordion>
        <Controls path={this.props.location.pathname}></Controls>

      </div>
    );
  }
}

export default FinancialDetails;
