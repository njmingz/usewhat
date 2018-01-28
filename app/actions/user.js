const INIT_USER = 'INIT_USER'; //user logged out
const LOAD_USER = 'LOAD_USER'; //user logging in
const LOAD_ERROR = 'LOAD_ERROR'; //user login error

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

            dispatch({type:LOAD_USER, payload:user});
        })
        .catch((err) => {
            dispatch({type:LOAD_ERROR, payload:err});
        })    
    };
}

export {INIT_USER, LOAD_USER, LOAD_ERROR, loadUser}