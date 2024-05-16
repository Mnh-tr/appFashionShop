import React from 'react'
import {View, Text, StyleSheet,Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#FFD6A5"
    },
    header:{
        justifyContent:'center',
        marginTop: 30,
        alignItems: 'center',
    },
    body:{
        height: (height * 0.78)
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
    btnAdd:{
        marginTop: 20
    },
    footer:{
        //position: 'absolute',
        backgroundColor: "#FF9C08",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        // marginTop:250,
        width: '100%',
        
    },
    iconAdd:{
        fontSize: 48,
        color: '#5DEBD7'
    },
    footer_add:{
        //fontWeight: 'bold',
        fontSize: 20
    }
})
export default styles;