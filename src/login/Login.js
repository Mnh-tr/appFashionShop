import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import styles from './Styles';
import { useNavigation } from "@react-navigation/native";
import { api } from '../../api/config';
export default function Login() {
  const navigation = useNavigation();
  const [gmail, setGmail] = useState('');
  const [password, setPassword] = useState('');

  const goToRegister = () => {
    setGmail('')
    setPassword('')
    navigation.navigate('register');
  };

  const KTTaiKhoan = async () => {
    if (gmail === '' || password === '') {
      Alert.alert('Đăng nhập thất bại', 'Vui lòng nhập đầy đủ thông tin');
      return;
    }

    try {
      const response = await fetch(`http://${api}/apiSHopQuanAo/User/api_user.php?gmail=${gmail}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const user = await response.json();
      if (user && user.pass === password) {
        Alert.alert('Thành công', 'Đăng nhập thành công');
        setGmail('')
        setPassword('')
        navigation.navigate('home',{ id_user: user.id_user }); // Điều hướng tới trang admin sau khi đăng nhập thành công
      } else {
        Alert.alert('Đăng nhập thất bại', 'Sai email hoặc mật khẩu');
      }
    } catch (error) {
      Alert.alert('Lỗi', 'Có lỗi xảy ra. Vui lòng thử lại sau');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.anh} source={require('../../img/logo.png')}></Image>
      <TextInput
        style={styles.dulieu}
        placeholder='Nhập gmail'
        value={gmail}
        onChangeText={setGmail}
      />
      <TextInput
        style={styles.dulieu}
        placeholder='Mật khẩu'
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
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
