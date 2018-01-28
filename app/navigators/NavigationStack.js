
import { StackNavigator } from "react-navigation";
import Home from "../containers/Home";
import Login from "../containers/Login";

const NavigationStack = StackNavigator({
    Home:{
        screen: Home
    },
    Login:{
        screen:Login
    }
});

export default NavigationStack;