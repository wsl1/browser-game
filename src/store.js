import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import FarmReducer from './Reducers/FarmReducer';

export default createStore(combineReducers({
    farm: FarmReducer,
    }),
    {},
    applyMiddleware(logger)
);
