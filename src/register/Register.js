import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import styles from './Styles';
import { api } from '../../api/config';
export default function Register() {
    const navigation = useNavigation();
    const gotoLogin = () => {
        navigation.navigate('login');
    };
    
    const [name, setName] = useState('');
    const [gmail, setGmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [mat, setMat] = useState(false);

    const handlerRegister = async () => {
        if (name === '' || gmail === '' || password === '' || confirmPassword === '') {
            Alert.alert('Đăng ký không thành công', 'Vui lòng nhập đầy đủ thông tin');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Đăng ký không thành công', 'Mật khẩu và Nhập Lại Mật khẩu không khớp');
            return;
        }

        try {
            const response = await fetch(`http://${api}/apiSHopQuanAo/User/api_user.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    gmail: gmail,
                    pass: password,
                }),
            });

            const result = await response.json();
            if (response.ok) {
                Alert.alert('Chúc mừng', result.message);
                navigation.navigate('login'); // Điều hướng đến trang đăng nhập sau khi đăng ký thành công
            } else {
                Alert.alert('Đăng ký thất bại', result.message);
            }
        } catch (error) {
            Alert.alert('Lỗi', 'Có lỗi xảy ra. Vui lòng thử lại sau');
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Image style={styles.anh} source={require('../../img/logo.png')} />
            <TextInput
                style={styles.dulieu}
                placeholder='Tên của bạn là....'
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.dulieu}
                placeholder='Gmail của bạn là....'
                value={gmail}
                onChangeText={setGmail}
            />
            <View>
                <TextInput
                    style={styles.dulieu}
                    placeholder='Mật khẩu'
                    secureTextEntry={!mat}
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity onPress={() => setMat(!mat)} style={{ height: '100%', aspectRatio: 0.8, position: 'absolute', right: 0, top: 30 }}>
                    {mat ? (
                        <Image source={require('../../img/cammat.png')} resizeMode='contain' style={{ height: 45, aspectRatio: 1 }} />
                    ) : (
                        <Image source={require('../../img/mat.png')} resizeMode='contain' />
                    )}
                </TouchableOpacity>
            </View>
            <View>
                <TextInput
                    style={styles.dulieu}
                    placeholder='Nhập Lại Mật khẩu'
                    secureTextEntry={!mat}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
                <TouchableOpacity onPress={() => setMat(!mat)} style={{ height: '100%', aspectRatio: 0.8, position: 'absolute', right: 0, top: 30 }}>
                    {mat ? (
                        <Image source={require('../../img/cammat.png')} resizeMode='contain' style={{ height: 45, aspectRatio: 1 }} />
                    ) : (
                        <Image source={require('../../img/mat.png')} resizeMode='contain' />
                    )}
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={handlerRegister}>
                <View style={styles.dangnhap}>
                    <Text style={styles.dangnhap1}>Đăng Ký</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.o}>
                <Text style={styles.chuacotk}>Bạn đã có tài khoản?</Text>
                <TouchableOpacity onPress={gotoLogin}>
                    <Text style={styles.dangky}>Đăng nhập ngay</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
