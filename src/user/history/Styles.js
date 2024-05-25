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
        flex: 1,
        alignItems: 'center',
        
    },
    title:{
        fontSize: 35,
        color: '#FF7F09',
        marginTop: 20
    },
    body:{
        flex: 9,
        //backgroundColor: "#5BBCFF",
    },

    body_textDM:{
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 20,
    },
    body_background:{
        flex: 1,
        alignItems: 'center'
    },
    body_danhMuc:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#FE862E',
        borderRadius: 30,
        width: '90%',
        paddingVertical: 10,
        
        
    },
    image:{
        width: 51,
        height: 48,
        borderRadius: 100
    },
    body_textAo:{
        marginLeft: 17,
        marginTop: 2,
    },
    body_textQuan:{
        marginLeft: 8,
        marginTop: 2,
    },
    body_textGiay:{
        marginLeft: 13,
        marginTop: 2,
    },
    body_listSP:{
        flex: 5,
    },
    body_titleList:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    body_textListsp:{
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 100
    },
    iconAdd:{
        fontSize: 30,
        color: '#DC6B19',
        marginRight: 20
    },
    listSP:{
        marginBottom: 27
    },
    item:{
        backgroundColor: '#FFAA46',
        borderRadius: 20,
        width: (width * 0.95),
        height: 116,
        flexDirection: 'row',
        marginBottom: 10,
        padding: 10,
        marginLeft:10
    },
    avatar:{
        flex: 1,
        width: 89,
        height: 96,
        
    },
    sp:{
        flex: 3,
        marginLeft: 10
    },
    name:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    iconEdit:{
        fontSize: 25,
        position: 'absolute',
        right: 50,
        top: -25,
        color: '#FFEBB2'
        
    },
    iconCart:{
        fontSize: 35,
        position: 'absolute',
        right: 5,
        top: -25,
        color: '#FB6D48'
    },
    price:{
        fontSize: 15,
    },
    des:{
        fontSize: 11,
    },



    
    
    
    
})
export default styles;