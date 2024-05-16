import React from 'react'
import {View, Text, StyleSheet,Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFD6A5',
      alignItems: 'center',
      justifyContent: 'center',
    },
    anh: {
      borderRadius: 40,
      marginBottom: 35,
    },
    dulieu: {
      backgroundColor: '#FFFFFF',
      height: 70,
      width: 300,
      margin: 10,
      borderWidth: 4,
      padding: 10,
      borderRadius: 20,
      color: 'green',
      fontSize: 20,
    },
    o: {
      flexDirection: 'row',
    },
  
    luu: {
      marginRight: 100,
      
    },
    quen: {
      color:'red',
      borderBottomWidth: 1,
    },
    dangnhap: {
      marginTop: 25,
      width: 300,
      borderRadius: 15,
      alignItems: 'center',
      backgroundColor: '#EE5C03',
      margin: 15,
    },
    dangnhap1: {
      color: '#FFFFFF',
      margin: 15,
      fontSize: 25,
      fontWeight: 'bold',
    },
    chuacotk: {
      color: 'black',
      fontWeight: 'bold',
      marginRight: 40,
    },
    dangky: {
      borderBottomWidth: 1,
    }
  });
  
export default styles;