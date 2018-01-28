import React, { Component } from 'react';
import { Text, View, AppRegistry, StyleSheet } from 'react-native';

export default class Home extends Component {
    static navigationOptions = {
        title:"Home",
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
                    </View> :
                    <View>
                        <Text>LOADING USER...</Text>
                    </View>
            }
            </View>
        );
    }
}
