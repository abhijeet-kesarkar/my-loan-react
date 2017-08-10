import React, { Component } from 'react';
import { Progress, Button } from 'reactstrap';
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
        <div className="StepsContainer NonMobile">
          {
              steps.map((route, index) => {
                let className = (index<currentStep ? "active" : (index===currentStep ? "current": "inactive"));
                
                return (<Button className={className} key={route.title}>{route.title}</Button>)
                })
          }
        </div>
        <div className="StepsContainer Mobile">
          {
              steps.map((route, index) => {
                let className = (index<currentStep ? "active" : (index===currentStep ? "current": "inactive"));
                return index === currentStep ? <Button className={className} key={route.title}>{route.title}</Button> : <Button className={className} key={route.title}>{index+1}</Button>
                })
          }
        </div>
      <Progress value={completion}></Progress>
      </div>
    );
  }
}

export default ApplicationProgress;
