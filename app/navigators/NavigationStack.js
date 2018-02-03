
import { StackNavigator } from "react-navigation";
import Home from "../containers/Home";
import Login from "../containers/Login";
import { Platform } from "react-native";

const NavigationStack = StackNavigator({
    Home:{
        screen: Home
    },
    Login:{
        screen:Login
    }
},{
    headerMode: Platform.OS == "ios"? "screen" : "none",

});

export default NavigationStack;