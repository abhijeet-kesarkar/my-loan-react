import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './Controls.css';
import { ROUTER_CONFIG } from '../../config/Router';

class Controls extends Component {

    goNext = (to) => {
      if( this.props.onNext ){
        this.props.onNext(()=> this.props.history.push(to) )
      }
      else if( !this.props.onNext ){
        this.props.history.push(to);        
      }
    }
    goPrev = (to) => {
      if( this.props.onPrev){
        this.props.onPrev(() => this.props.history.push(to));
      }
      else if (! this.props.onPrev){
        this.props.history.push(to);        
      }
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
        {currentStep === 0 ? null : <Button color="primary" onClick={ () => this.goPrev(steps[currentStep - 1].path)}>Back</Button>}
        {currentStep < steps.length - 1 ? <Button color="primary" onClick={ () => this.goNext(steps[currentStep + 1].path)}>Continue</Button> : null}
      </div>
    );
  }
  
}

Controls.propTypes = {
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
};

export default withRouter(Controls);