import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state ={};
    }
    
    render(){
        return(
            <View style={this.props.style}>
                <Text>LOGIN</Text>
            </View>
        );
    }
}