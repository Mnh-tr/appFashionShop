import React from 'react'
import {View, Text, StyleSheet,Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFD6A5",
        padding: 10,
    },

    header:{
        justifyContent:'center',
        alignItems: 'center',
    },
    body:{
        height: (height * 0.8),
    },
    tittle:{
        fontSize: 35,
        color: '#FF7F09',
        marginTop: 20
    },
    touImg:{
        position: 'absolute',
        left: 7,
        top: -17
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
    btnAdd:{
        marginTop: 20
    },
    footer:{
        backgroundColor: "#FF9C08",
        
        alignItems: 'center',
        borderRadius: 30,
        width: '100%',
        

        
    },
    iconAdd:{
        fontSize: 48,
        color: '#5DEBD7'
    },
    footer_add:{
        //fontWeight: 'bold',
        fontSize: 20
    },
    imagePickerContainer: {
        alignItems: 'center',
        
    },
    imagePickerButton: {
        backgroundColor: '#378CE7',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    imagePickerButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    selectedImage: {
        width: 89,
        height: 96,
        marginTop: 20,
        borderRadius: 10,
    },
})
export default styles;