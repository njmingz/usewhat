import {combineReducers} from 'redux';
import userReducer from './user';
import navigationReducer from './nav';

export default rootReducer = combineReducers({
    user: userReducer,
    nav: navigationReducer,
});