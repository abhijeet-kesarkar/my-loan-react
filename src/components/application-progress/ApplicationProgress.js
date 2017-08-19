import React, { Component } from 'react';
import { Step } from 'semantic-ui-react';
import { ROUTER_CONFIG } from '../../config/Router';
import './ApplicationProgress.css';

class ApplicationProgress extends Component {
  render() {
    const currentProcess = this.props.path.split('/')[1];
    let steps = ROUTER_CONFIG.filter(route => route.path.includes(`/${currentProcess}/`));
    let currentStep = steps.findIndex(route => route.path === this.props.path);
    if( currentStep === -1 ){
      currentStep = 0;
    }
    steps = steps.map((step, index) => Object.assign(step, {active:index===currentStep, completed:index<currentStep}));
    return (
      <div>
      <Step.Group fluid size='mini' items={steps}/>
      </div>
    );
  }
}

export default ApplicationProgress;
