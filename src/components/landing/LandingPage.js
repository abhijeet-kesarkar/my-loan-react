import React, { Component } from 'react';
import { Button, Card, Grid } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom';
import './LandingPage.css';

class LandingPage extends Component {
   
    render() {
        const applyNow = (loanType) => (
            <Button primary onClick={()=>{this.props.history.push(`/${loanType}`)}}>Apply Now</Button>
            );

        return ( 

                    <Grid stackable padded columns="equal" stretched>
                        <Grid.Column>
                            <Card
                                fluid
                                image='http://www.newsilike.in/wp-content/uploads/2016/09/personal-loans.jpg'
                                header='Personal Loan'
                                description='Personal loan can help you meet unexpected expenses such as wedding expenditure, school or college fees, dream vacations, home renovation projects or even for the purchase of consumer durables.'
                                extra={applyNow('mortgage')}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Card
                                fluid
                                image='https://media.nomadicmatt.com/travelccbackup1.jpg'
                                header='Credit Cards'
                                description='Get amazing offers, deals, rewards & cashbacks on using credit card on all your different spends such as travel, entertainment, shopping, bill payments etc.'
                                extra={applyNow('creditcard')}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Card
                                fluid
                                image='http://www.hlf.com.sg/assets/images/corporate/loans/hdb-sme/banner_hdb_sme.png'
                                header='SME Loans'
                                description='Whether you are expanding into a new vertical or growing your existing business, you can avail of a small business loan for finance.'
                                extra={applyNow('sme')}
                            />
                        </Grid.Column>
                    </Grid>        
        );
    }
}

export default withRouter(LandingPage);