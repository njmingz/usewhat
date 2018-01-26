/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text,View, AppRegistry } from 'react-native';
const FBSDK = require("react-native-fbsdk");
const {LoginButton, AccessToken} = FBSDK;

export default class App extends Component {
  render() {
    return (
      <View>
        <Text>Hello World</Text>
        <LoginButton publishPermissions={["publish_actions"]} 
          onLoginFinished={
            (error, result)=>{
              if(error){
                console.log("login error.", result.error);
                alert("login error." + result.error);
              }
              else if(result.isCancelled){
                console.log("login cancelled.");
                alert("login cancelled.");
              }
              else{
                console.log("login success.", result.error);
                AccessToken.getCurrentAccessToken().then((data)=>{
                  console.log("getCurrentAccessToken", data)
                }).catch((err)=>{
                  console.log("Error occurred while getting access token.", err);
                  alert("Error occurred while getting access token.");
                });
              }
            }
          }
          onLogoutFinished={() => alert("logout.")}/>
      </View>
    );
  }
}

AppRegistry.registerComponent("App", ()=>App);