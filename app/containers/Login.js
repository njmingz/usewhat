import {connect} from 'react-redux';
import Login from '../components/Login';
import {loadUser} from '../actions/user';

const mapStateToProps = (state) => {
    return{
        user:state.user
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        loadUser: (accessToken) => {
            dispatch(loadUser(accessToken));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);