import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {Button} from 'reactstrap';

import './Controls.css';
import { ROUTER_CONFIG } from '../../config/Router';

class Controls extends Component {

    go = (to) => {
        this.props.history.push(to);
    }

  render() {
    const currentProcess = this.props.path.split('/')[1];
    const steps = ROUTER_CONFIG.filter(route => route.path.includes(`/${currentProcess}/`));
    let currentStep = steps.findIndex(route => route.path === this.props.path);
    if( currentStep === -1 ){
      currentStep = 0;
    }
    return (
      <div className="ContentContainer ControlsContainer">
        {currentStep === 0 ? null : <Button color="primary" onClick={ () => this.go(steps[currentStep - 1].path)}>Back</Button>}
        {currentStep < steps.length - 1 ? <Button color="primary" onClick={ () => this.go(steps[currentStep + 1].path)}>Continue</Button> : null}
      </div>
    );
  }
  
}

export default withRouter(Controls);