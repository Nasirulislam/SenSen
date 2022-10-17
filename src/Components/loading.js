/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';

import { View, ActivityIndicator, Dimensions } from 'react-native';

export default class Loader extends Component {
    render() {
        const { isVisible } = this.props;
        return (
            isVisible ?
                <View style={{
                    backgroundColor: 'transparent',
                   
                    height: Dimensions.get('window').height,
                    width: Dimensions.get('window').width,
                    justifyContent: 'center',
                    alignItems: 'center'
                }} >
                    <ActivityIndicator size="small" color={'red'} />
                </View> : null
        );
    }
} 
