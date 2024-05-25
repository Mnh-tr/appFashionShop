import React from 'react'
import {View, Text, StyleSheet,Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFD6A5"
    },
    iconBack:{
     
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: -6,
        marginLeft: 7
    },
    back:{
        fontSize: 30
    },
    header:{
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 7
    },
    image: {
      width: "100%",
      height: 300
    },
    body:{
        height: (height * 0.5)
    },
    spItem:{
        flexDirection: 'row',
    },
    item: {
        backgroundColor: '#FFAA46',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        width: 370
    },
    avatar: {
        width: 89,
        height: 96,
        marginRight: 10,
    },
    sp: {
        flex: 3,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 15,
    },
    des: {
        fontSize: 11,
    },
    inputValue:{
        marginTop: 10
    },
    input:{
        width: '90%',
        height: 50,
        marginTop: 20,
        borderWidth: 1,
        marginHorizontal: 20,
        paddingLeft: 20,
        borderColor: '#378CE7',
        fontWeight: '600',
        borderRadius: 30,
        
    },
    inputPicker: {
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
      },
      titleThanhToan:{
        color: 'red'
      },
    Footer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 254
      
    },
    buttonMua: {
      backgroundColor: '#2196F3',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      width: '40%'
    },
    tongTien:{
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
      marginTop: 8
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