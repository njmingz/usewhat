import {LOAD_USER, INIT_USER, LOAD_ERROR} from '../actions/user';

export default userReducer = (state={
    user: {},
    fetched: false,
    error: ""
}, action) => {
    switch(action.type){
        case LOAD_USER:
            return {...state, user: action.payload, fetched:true};
        case INIT_USER:
            return state;
        case LOAD_ERROR:
            return {...state, user:{}, error:action.payload}; 
        default:
            return {};
    }
};