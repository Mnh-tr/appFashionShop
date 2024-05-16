
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { Component, useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import styles from './Styles';
export default function Register() {
    const navigation = useNavigation()
    const gotoLogin = () => {
        navigation.navigate('login')
    }
    const [mat, setMat] = useState(false)
    const handlerRegister =()=>{
        // code khi người dùng nhấn đăng kí tài khoản
    }

    return (

        <View style={styles.container}>
            <Image style={styles.anh} source={require('../../img/logo.png')}></Image>
            <TextInput style={styles.dulieu} placeholder='số điện thoại' textContentType='telephoneNumber' ></TextInput>
            <View>
                <TextInput style={styles.dulieu} placeholder='Mật khẩu' ></TextInput>
                <TouchableOpacity onPress={() => {
                    setMat(!mat)
                }}
                    style={{ height: '100%', aspectRatio: 0.8, position: 'absolute', right: 0, top: 30 }}>
                    {mat ?
                        <Image source={require('../../img/cammat.png')} resizeMode='contain' style={{ height: 45, aspectRatio: 1, }} ></Image> :
                        <Image source={require('../../img/mat.png')} resizeMode='contain' ></Image>
                    }

                </TouchableOpacity>

            </View>

            <View>
                <TextInput style={styles.dulieu} placeholder='Nhập Lại Mật khẩu' ></TextInput>
                <TouchableOpacity onPress={() => {
                    setMat(!mat)
                }}
                    style={{ height: '100%', aspectRatio: 0.8, position: 'absolute', right: 0, top: 30 }}>
                    {mat ?
                        <Image source={require('../../img/cammat.png')} resizeMode='contain' style={{ height: 45, aspectRatio: 1, }} ></Image> :
                        <Image source={require('../../img/mat.png')} resizeMode='contain' ></Image>
                    }

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