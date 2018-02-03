import {LOAD_ERROR, INIT_LOGIN, INIT_LOGOUT} from './types';

const loadUser = (access_token) =>{
    return (dispatch) =>{
        fetch('https://graph.facebook.com/v2.11/me?fields=email,name,picture,link,birthday&access_token=' + access_token)
        .then((response) => response.json())
        .then((json) => {
            console.log("in loadUser, json:", json);
            let user = {};
            user.name = json.name;
            user.id = json.id;
            user.email = json.email;
            user.link = json.link;
            user.picture_url =  json.picture.data.url;
            user.birthday = json.birthday;

            dispatch({type:INIT_LOGIN, payload:user});
        })
        .catch((err) => {
            dispatch({type:LOAD_ERROR, payload:err});
        })    
    };
};

const logoutUser = ()=>{
    return (dispatch) =>{
        dispatch({type:INIT_LOGOUT, payload:{}});
    };
};

export {loadUser, logoutUser}