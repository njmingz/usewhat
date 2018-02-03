import React, { Component } from 'react';
import { Text, View, AppRegistry, StyleSheet } from 'react-native';
import {Button} from 'react-native-elements';

export default class Home extends Component {
    static navigationOptions = {
        title:"Home",
    }

    componentWillMount(){
        if(!this.props.user.fetched){
            this.props.navigation.navigate("Login");
        }
    }

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <View>{
                this.props.user.fetched ?
                    <View>
                        <Text>NAME: {this.props.user.user.name}</Text>
                        <Text>EMAIL: {this.props.user.user.email}</Text>
                        <Text>BIRTHDAY: {this.props.user.user.birthday}</Text>
                        <Button title="GO to LOGIN" onPress={(e)=>{
                            this.props.navigation.navigate("Login");
                        }} />
                    </View> :
                    <View>
                        <Text>LOADING USER...</Text>
                    </View>
            }
            </View>
        );
    }
}
