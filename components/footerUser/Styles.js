import React from 'react'
import {View, Text, StyleSheet,Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    footer:{
        flex: 1,
        backgroundColor: "#FF9C08",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'space-around',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    iconAdmin:{
        fontSize: 48,
        color: '#5DEBD7'
    },
    footer_admin:{
        //fontWeight: 'bold',
        fontSize: 10,
        marginLeft: 4
    },

    
})
export default styles;