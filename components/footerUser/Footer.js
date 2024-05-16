import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
const Footer = () => {
    const navigation = useNavigation()
    const goToDanhMuc =()=>{
        navigation.navigate('category')
      }
      const goToTrangChu =()=>{
        navigation.navigate('home')
      }
      const goToGioHang =()=>{
        navigation.navigate('cart')
      }
      const goToCaNhan =()=>{
        navigation.navigate('personal')
      }
    return (
        <View style={styles.footer}>
            <TouchableOpacity onPress={goToTrangChu}>
                <View style={styles.iconfooter}>
                    <AntDesign name="home" style={styles.iconAdmin} />
                    <Text style={styles.footer_admin}>Trang chủ</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToDanhMuc}>
                <View style={styles.iconfooter}>
                    <MaterialIcons name="category" style={styles.iconAdmin} />
                    <Text style={styles.footer_admin}>Danh mục</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToGioHang}>
                <View style={styles.iconfooter}>
                    <AntDesign name="shoppingcart" style={styles.iconAdmin} />
                    <Text style={styles.footer_admin}>Giỏ hàng</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToCaNhan}>
                <View style={styles.iconfooter}>
                    <AntDesign name="user" style={styles.iconAdmin} />
                    <Text style={styles.footer_admin}>Cá nhân</Text>
                </View>
            </TouchableOpacity>



        </View>
    )
}
export default Footer;