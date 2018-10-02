import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';


const reducer = (state = {}, action) => {
    return state;
}
const store = createStore(reducer, {})


ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
