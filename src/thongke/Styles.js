import React from 'react'
import {View, Text, StyleSheet,Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f5f5f5',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#333',
    },
    pickerContainer: {
      width: '80%',
      marginBottom: 20,
    },
    label: {
      fontSize: 18,
      marginBottom: 5,
      color: '#555',
    },
    picker: {
      height: 50,
      width: '100%',
      backgroundColor: '#fff',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#ccc',
    },
    info: {
      fontSize: 18,
      textAlign: 'center',
      marginTop: 20,
      backgroundColor: '#fff',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#ccc',
      color: '#333',
    },
  });
  export default styles;
  