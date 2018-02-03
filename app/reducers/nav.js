import { NavigationActions } from "react-navigation";

import AppNavigator from "../navigators/NavigationStack";
import { INIT_LOGIN, INIT_LOGOUT } from "../actions/types";
import AppNavigation from "../navigators/AppNavigation";

const ActionForLogin = AppNavigator.router.getActionForPathAndParams('Login');
const ActionForHome = AppNavigator.router.getActionForPathAndParams('Home');


const navigationReducer = (state, action) => {
  switch (action.type) {
    case INIT_LOGIN:
      return AppNavigator.router.getStateForAction(ActionForHome);
      break;

    case INIT_LOGOUT:
      return AppNavigator.router.getStateForAction(ActionForLogin)
      break;
  
    default:
      const newState = AppNavigator.router.getStateForAction(action, state);
      return newState || state;
  }
};

export default navigationReducer;