import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { addNavigationHelpers } from 'react-navigation'
import Login from './app/containers/Login';
import {Provider} from 'react-redux';
import configureStore from './app/store/configureStore';
import AppNavigation from './app/navigators/AppNavigation'

let store = configureStore({});

const styles = StyleSheet.create({
  login_container:{
    backgroundColor:'#0097A7'
  },
  app_container:{
    backgroundColor:'#FFF'
  }
});

export default App = () => (
  <Provider store={store}>
    <AppNavigation />
  </Provider>
);
