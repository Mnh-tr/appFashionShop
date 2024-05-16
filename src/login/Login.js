
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity,Alert } from 'react-native';
import React, { Component, useState } from 'react';
import styles from './Styles';
import { useNavigation } from "@react-navigation/native";
export default function Login() {
    const navigation = useNavigation()
    const goToRegister =()=>{
        navigation.navigate('register')
      }
      const KTTaiKhoan =()=>{
        navigation.navigate('admin')
      }
return (

  <View style={styles.container}>
   
   <Image style={styles.anh} source={require('../../img/logo.png')}></Image>
    <TextInput style={styles.dulieu} placeholder='số điện thoại' ></TextInput>
    <TextInput style={styles.dulieu} placeholder='Mật khẩu' ></TextInput>
    <View>
    </View>
    <View style={styles.o}>
      <Text style={styles.quen}>Quên mật khẩu?</Text>
    </View>

    <TouchableOpacity onPress={KTTaiKhoan}>
      <View style={styles.dangnhap}>
        <Text style={styles.dangnhap1}>Đăng Nhập</Text>
      </View>
    </TouchableOpacity>


    <View style={styles.o}>
      <Text style={styles.chuacotk}>Bạn chưa có tài khoản?</Text>
      <TouchableOpacity onPress={goToRegister}>
        <Text style={styles.dangky}>Đăng ký ngay</Text>
      </TouchableOpacity>

    </View>
    
  </View>
);
}

