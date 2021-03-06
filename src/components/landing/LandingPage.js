import React, { Component } from 'react';
import { Row, Col, Card, CardImg, CardTitle, CardBlock, CardText, Button } from 'reactstrap';
import {withRouter} from 'react-router-dom';
import './LandingPage.css';

class LandingPage extends Component {

    applyNow = () => {
        this.props.history.push('/mortgage');
    }

    render() {
        return ( 
        <div className="ContentContainer">
            <Row>
                <Col md="6" lg="4" xs="12">
                    <Card>
                        <CardImg top width="100%" src="http://www.newsilike.in/wp-content/uploads/2016/09/personal-loans.jpg" alt="Card image cap" />
                        <CardBlock>
                        <CardTitle>Personal Loan</CardTitle>
                        <CardText>Personal loan can help you meet unexpected expenses such as wedding expenditure, school or college fees, dream vacations, home renovation projects or even for the purchase of consumer durables.</CardText>
                        <Button onClick={this.applyNow}>Apply Now</Button>
                        </CardBlock>
                    </Card>
                </Col>
                <Col md="6" lg="4" xs="12">
                    <Card>
                        <CardImg top width="100%" src="https://media.nomadicmatt.com/travelccbackup1.jpg" alt="Card image cap" />
                        <CardBlock>
                        <CardTitle>Credit Cards</CardTitle>
                        <CardText>Get amazing offers, deals, rewards & cashbacks on using credit card on all your different spends such as travel, entertainment, shopping, bill payments etc.</CardText>
                        <Button onClick={this.applyNow}>Apply Now</Button>
                        </CardBlock>
                    </Card>
                </Col>
                <Col md="6" lg="4" xs="12">
                    <Card>
                        <CardImg top width="100%" src="http://www.hlf.com.sg/assets/images/corporate/loans/hdb-sme/banner_hdb_sme.png" alt="Card image cap" />
                        <CardBlock>
                        <CardTitle>SME Loans</CardTitle>
                        <CardText>Whether you are expanding into a new vertical or growing your existing business, you can avail of a small business loan for finance.</CardText>
                        <Button onClick={this.applyNow}>Apply Now</Button>
                        </CardBlock>
                    </Card>
                </Col>
            </Row>            
        </div>
        );
    }
}

export default withRouter(LandingPage);