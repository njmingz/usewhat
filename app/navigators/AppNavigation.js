import React, { Component } from 'react';
import { BackHandler } from "react-native";
import { connect } from 'react-redux';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import NavigationStack from './NavigationStack'

class AppNavigation extends Component {

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }
    onBackPress = () => {
        const { dispatch, nav } = this.props;
        if (nav.stateForLoggedIn.index <= 1) {
            BackHandler.exitApp();
            return;
        }
        dispatch(NavigationActions.back());
        return true;
    };

    render() {
        const { nav, dispatch, isLoggedIn } = this.props;
        console.log('in AppNavigation,', nav);
        const state = isLoggedIn
            ? nav.stateForLoggedIn
            : nav.stateForLoggedOut;
        return (
            <NavigationStack navigation={addNavigationHelpers({ dispatch, state })} />
        );
    }
}

const mapStateToProps = state => {
    return {
        nav: state.nav,
        isLoggedIn: state.user.fetched
    };
};

export default connect(mapStateToProps)(AppNavigation);