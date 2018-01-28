import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/index';

export default configureStore = (initState) =>{
    return createStore(rootReducer, initState, 
        applyMiddleware(thunkMiddleware, logger));
}