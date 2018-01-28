import React, { Component } from 'react';
import { Text,View, AppRegistry, StyleSheet } from 'react-native';
const FBSDK = require("react-native-fbsdk");
const {LoginManager, AccessToken} = FBSDK;
import {SocialIcon} from 'react-native-elements';

export default class Login extends Component {
  static navigationOptions = {
    title:"Login",
  }

  constructor(props){
    super(props);

    this.state = {};
  }

  render() {
    console.log("IN LOGIN COMPONENT, ", this.props.user);
    return (
      <View>
        <Text>USEWHAT?</Text>
        <SocialIcon button type='facebook' title='Sign in with Facebook'
        onPress={(e)=>{
          LoginManager.logInWithReadPermissions(['public_profile','email','user_birthday']).then((result)=>{
            if(result.isCancelled){
              console.log("login cancelled.");
              //alert("login cancelled.");
            }
            else{
              console.log("login success.", result);
              //alert("login success." +  result.grantedPermissions.toString());
              AccessToken.getCurrentAccessToken().then((data)=>{
                console.log('in getCurrentAccessToken, props', this.props);
                let {accessToken} = data;
                this.props.loadUser(accessToken);
              })
            }
          }, (err)=>{
            console.log("login error.", err);
            //alert("login error." + err);
          })
        }} />
      </View>
    );
  }
}
