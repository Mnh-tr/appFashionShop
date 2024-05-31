import React from 'react'
import {View, Text, StyleSheet,Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
      flex: 1,
     backgroundColor: '#FFD6A5'
     
    },
    trucDoanhThu: {
      marginTop:20
    },
    textDoanhThu: {
      position: 'absolute',
      zIndex: 1,
      fontSize: 14,
      fontWeight: 'bold',
      left: 10,
      top: -10,
  
    },
    hienThiBieuDo: {
      alignItems: 'center'
    },
    pickerContainer:{
      flexDirection: 'row',
      marginLeft: 30,
    },
    textNam:{
      marginTop: 20,
      marginLeft: 10,
      fontWeight: 'bold',
    },
    pickerNam:{
      width: 220,
      marginTop: 2,
      marginLeft: 10,
      
      backgroundColor: '#FFE8C5'
    },
    trucThang: {
      marginLeft: 10,
    },
    textThang: {
      position: 'absolute',
      top:-45,
      left: 15,
      fontSize: 14,
      fontWeight: 'bold',
    },
  });
export default styles;