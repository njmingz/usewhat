import {connect} from 'react-redux';
import Login from '../components/Login';
import {loadUser, logoutUser} from '../actions/user';

const mapStateToProps = (state) => {
    return{
        user:state.user
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        loadUser: (accessToken) => {
            dispatch(loadUser(accessToken));
        },
        logoutUser: () =>{
            dispatch(logoutUser());
        },
        dispatch:dispatch,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);