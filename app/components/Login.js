import React, { Component } from 'react';
import { Text, ScrollView, AppRegistry, StyleSheet, Platform } from 'react-native';
const FBSDK = require("react-native-fbsdk");
const {LoginManager, AccessToken} = FBSDK;
import {SocialIcon, Button} from 'react-native-elements';
import { INIT_LOGOUT } from '../actions/types';
import {primaryColor, primaryLightColor, primaryDarkColor, primaryTextColor} from '../lib/colors';
import Header from './Header';

const styles = StyleSheet.create({
  header:{
    backgroundColor:primaryColor,
    flexDirection: "row",
    height:56,
    marginTop: Platform.OS == "ios" ? 20:0,
    
  },
  container:{
    backgroundColor:primaryColor
  },
  titleStyle:{
    marginTop:"50%",
    marginBottom:50,
    color:primaryTextColor,
    fontSize:36,
    textAlign:"center"
  }
});

export default class Login extends Component {
  static navigationOptions = {
    title:"LOGIN"
  }

  constructor(props){
    super(props);

    this.state = {};
  }

  render() {
    console.log("LOGIN",this.props.user);
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.titleStyle}>USEWHAT?</Text>
        {!this.props.user.fetched? 
        <SocialIcon button type='facebook' title='Sign in with Facebook'
        style={{borderRadius:5}}
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
        }} /> : 
        <ScrollView>
          <Button title="LOGOUT" onPress={(e)=>{
            this.props.dispatch({type:INIT_LOGOUT});
          }}/>
          <Button title="GO TO HOME" onPress={(e)=>{
            this.props.navigation.navigate("Home");
          }}/>
        </ScrollView>
        }
      </ScrollView>
    );
  }
}
