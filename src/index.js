import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import myLoansApp from './reducers'
import { Provider } from 'react-redux'
import './dist/semantic.min.css';

let store = createStore(myLoansApp);

render( 
    <Provider store={store}>
      < App / >
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();