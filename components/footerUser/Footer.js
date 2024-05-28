import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from './Styles';
import { api } from '../../api/config'
const Footer = ({ userID }) => {
    const navigation = useNavigation();
    const [soLuongSP, setSLSanPham] = useState(0);
    const route = useRoute();
    const currentRoute = route.name;

    const fetchProductCount = async () => {
        try {
            const response = await fetch(`http://${api}/apiShopQuanAo/Cart/api_cart.php?userId=${userID}`);
            const products = await response.json();
            setSLSanPham(products.length);

        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu giỏ hàng:', error);

        }
    };
    useEffect(() => {
        fetchProductCount();
    }, [userID]);
    const goToDanhMuc = () => {
        navigation.navigate('category', { id_user: userID });
    };

    const goToTrangChu = () => {
        navigation.navigate('home', { id_user: userID });
    };

    const goToGioHang = () => {
        navigation.navigate('cart', { id_user: userID });
    };

    const goToCaNhan = () => {
        navigation.navigate('personal', { id_user: userID });
    };

    const getIconColor = (screen) => {
        return currentRoute === screen ? '#FF5733' : '#5DEBD7';
    };

    return (
        <View style={styles.footer}>
                <TouchableOpacity onPress={goToTrangChu}>
                    <View style={styles.iconfooter}>
                        <AntDesign name="home" style={[styles.iconAdmin, { color: getIconColor('home') }]} />
                        <Text style={styles.footer_admin}>Trang chủ</Text>
                    </View>
                </TouchableOpacity>
            <TouchableOpacity onPress={goToDanhMuc}>
                <View style={styles.iconfooter}>
                    <MaterialIcons name="category" style={[styles.iconAdmin, { color: getIconColor('category') }]} />
                    <Text style={styles.footer_admin}>Danh mục</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToGioHang}>
                <View style={styles.iconfooter}>
                    <AntDesign name="shoppingcart" style={[styles.iconAdmin, { color: getIconColor('cart') }]} />
                    {soLuongSP > 0 && (
                        <View style={styles.box_soLuon}>
                            <Text style={styles.soLuong}>{soLuongSP}</Text>
                        </View>
                    )}
                    <Text style={styles.footer_admin}>Giỏ hàng</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToCaNhan}>
                <View style={styles.iconfooter}>
                    <AntDesign name="user" style={[styles.iconAdmin, { color: getIconColor('personal') }]} />
                    <Text style={styles.footer_admin}>Cá nhân</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Footer;
