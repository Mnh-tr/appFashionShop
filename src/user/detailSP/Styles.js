import React from 'react'
import {View, Text, StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFD6A5"
    },
    iconBack:{
      marginTop: 16,
      marginLeft: 5
    },
    back:{
      fontSize: 30
    },
    image: {
      width: "100%",
      height: height * 0.4 // Adjust height relative to screen height
    },
    body:{
      flex: 1,
      padding: 10
    },
    price: {
      fontSize: 24, // Slightly smaller for better fit
      fontWeight: 'bold',
      color: 'red',
      marginLeft: 10
    },
    name:{
      fontSize: 22, // Slightly smaller for better fit
      marginLeft: 15,
      marginTop: 10
    },
    moTa:{
      fontSize: 16,
      marginLeft: 15,
      marginTop: 10,
      fontWeight: 'bold'
    },
    description: {
      fontSize: 16,
      marginLeft: 15,
      marginTop: 10
    },
    Footer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20, // Adjust margin for better fit on screen
      marginBottom: 20 // Add margin bottom for better spacing
    },
    buttonMua: {
      backgroundColor: '#2196F3',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      width: '40%'
    },
    buttonThem: {
      backgroundColor: '#FF9C08',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      width: '50%' // Adjust width for better fit
    },
    buttonText:{
      color: '#FFFFFF',
      fontSize: 20, // Slightly smaller for better fit
      textAlign: 'center',
      padding: 4
    }
});

export default styles;
