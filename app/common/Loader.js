import React, {Component, PropTypes} from 'react'
import {View, Text, StyleSheet} from 'react-native'

var styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        padding: 10,
        fontSize: 25,
        alignSelf: 'center',
        color: 'white'
    }
});

const Loader = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {'Loading...'}
            </Text>
        </View>
    )
};

export default Loader;