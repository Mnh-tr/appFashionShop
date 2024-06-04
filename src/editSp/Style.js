import React from 'react'
import {View, Text, StyleSheet,Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#FFD6A5",
        
    },
    header:{
        justifyContent:'center',
        marginTop: 30,
        alignItems: 'center',
    },
    body:{
        height: (height * 0.74)
    },
    tittle:{
        fontSize: 35,
        color: '#FF7F09',
        marginTop: 90
    },
    image:{
        position: 'absolute',
        left: 10,
        top: -10
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
    btnAdd:{
        marginTop: 20
    },
    footer:{
        
        backgroundColor: "#FF9C08",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        
        width: '100%',
        
    },
    iconAdd:{
        fontSize: 48,
        color: '#5DEBD7'
    },
    footer_edit:{
        //fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 7
    },
    imagePickerContainer: {
        alignItems: 'center',
        
    },
    selectedImage: {
        width: 89,
        height: 96,
        marginTop: 20,
        borderRadius: 10,
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
})
export default styles;