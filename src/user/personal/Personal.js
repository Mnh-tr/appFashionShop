import 'react-native-gesture-handler';
import React from 'react';
import styles from './Styles';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Footer from '../../../components/footerUser/Footer';
import { useNavigation } from "@react-navigation/native";
export default function Personal() {
    const navigation = useNavigation()
    const goToAdmin =()=>{
        navigation.navigate('admin')
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={{ uri: 'https://www.w3schools.com/w3images/avatar2.png' }} // Placeholder image
                    style={styles.avatar}
                />
                <Text style={styles.name}>Nguyễn Văn A</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.thongTinCaNhan}>
                    <Text style={styles.info}>Họ tên: Nguyễn Văn A</Text>
                    <Text style={styles.info}>Số điện thoại: 0968235478</Text>
                    <Text style={styles.info}>Email: vanA12@gmail.com</Text>
                    <Text style={styles.info}>Địa chỉ: 65 Kha Vạn Cân Thủ Đức</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={goToAdmin}>
                    <FontAwesome name="bars" size={24} color="black" />
                    <Text style={styles.buttonText}>Admin</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sửa thông tin cá nhân</Text>
                </TouchableOpacity>
                
            </View>
            
            <Footer />
        </View>
    );
}
