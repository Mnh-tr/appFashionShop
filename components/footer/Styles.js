import React from 'react'
import {View, Text, StyleSheet,Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    footer:{
        flex: 1,
        backgroundColor: "#FF9C08",
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconAdmin:{
        fontSize: 48,
        color: '#5DEBD7'
    },
    footer_admin:{
        //fontWeight: 'bold',
        fontSize: 20
    }
    
})
export default styles;