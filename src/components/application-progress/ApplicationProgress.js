import React, { Component } from 'react';
import { Progress } from 'reactstrap';
import { ROUTER_CONFIG } from '../../config/Router';
import './ApplicationProgress.css';

class ApplicationProgress extends Component {
  render() {
    const currentProcess = this.props.path.split('/')[1];
    const steps = ROUTER_CONFIG.filter(route => route.path.includes(`/${currentProcess}/`));
    let currentStep = steps.findIndex(route => route.path === this.props.path);
    if( currentStep === -1 ){
      currentStep = 0;
    }
    const completion = 100 * (currentStep + 1) / steps.length;
    return (
      <div>
        <div className="StepsContainerNonMobile">
          {
              steps.map(route => (<span key={route.title}>{route.title}</span>))
          }
        </div>
        <div className="StepsContainerMobile">
          {
              steps.map((route, index) => {
                return index === currentStep ? <span key={route.title}>{route.title}</span> : <span key={route.title}>{index+1}</span>
                })
          }
        </div>
      <Progress value={completion}></Progress>
      </div>
    );
  }
}

export default ApplicationProgress;
