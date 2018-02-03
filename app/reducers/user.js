import {INIT_LOGIN, INIT_LOGOUT, LOAD_ERROR} from '../actions/types';

export default userReducer = (state={
    user: {},
    fetched: false,
    error: ""
}, action) => {
    switch(action.type){
        case INIT_LOGIN:
            return {...state, user: action.payload, fetched:true};
        case INIT_LOGOUT:
            return {user: {}, fetched:false, error:""};
        case LOAD_ERROR:
            return {...state, user:{}, error:action.payload}; 
        default:
            return {...state};
    }
};