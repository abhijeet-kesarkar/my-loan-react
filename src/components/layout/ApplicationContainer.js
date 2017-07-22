import React, { Component } from 'react';
import LoanApplicationWizard from './LoanApplicationWizard';
import { Container, Row, Col } from 'reactstrap';

class ApplicationContainer extends Component {
    render() {
        return ( 
        <Container>
        <Row>
          <Col>
          < LoanApplicationWizard > </LoanApplicationWizard>
          </Col>
        </Row>
        </Container>
        );
    }
}

export default ApplicationContainer;