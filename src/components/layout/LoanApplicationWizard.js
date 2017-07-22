import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class LoanApplicationWizard extends Component {
  render() {
    return (
      <div>
        <Nav pills>
          <NavItem>
            <NavLink href="#" active>Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default LoanApplicationWizard;
