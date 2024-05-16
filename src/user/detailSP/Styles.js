import React from 'react'
import {View, Text, StyleSheet,Dimensions } from 'react-native'
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
      height: 300
    },
    body:{
      
    },
    price: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'red',
      marginLeft: 10
    },
    name:{
      fontSize: 26,
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
      marginTop: 165
      
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
      width: '60%'
      
    },
    buttonText:{
      color: '#FFFFFF',
      fontSize: 26,
      textAlign: 'center',
      padding: 4
    }
  });
export default styles;