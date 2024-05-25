
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native';
import React, { Component, useState, useEffect } from 'react';
import styles from './Styles';
import { useNavigation, useRoute } from "@react-navigation/native";
import Footer from '../../../components/footerUser/Footer'
import { EvilIcons } from '@expo/vector-icons';
import { api } from '../../../api/config'
import { useFocusEffect } from '@react-navigation/native';
export default function History() {
    const [products, setProducts] = useState([])
    const route = useRoute();
    const { id_user } = route.params; // Nhận id_user từ params
    const fetchData = () => {
        fetch(`http://${api}/apiSHopQuanAo/HoaDon/api_HoaDon.php?id_user=${id_user}`)
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error(error));
    };
    useEffect(() => {
        fetchData(); // Gọi hàm tải danh sách sản phẩm khi trang Admin được tải lần đầu tiên
    }, []);
    // Sử dụng useFocusEffect để cập nhật danh sách sản phẩm mỗi khi quay lại trang Admin
    useFocusEffect(
        React.useCallback(() => {
            fetchData(); // Gọi hàm tải danh sách sản phẩm khi trang Admin được focus lại
        }, [])
    );

    // item
    const Item = ({ id, soLuong, tongTien, date, img,status }) => {
        const navigation = useNavigation()
        const gotoDetail = () => {
            navigation.navigate('detail', { productId: id })
        }
        return (
            <TouchableOpacity onPress={gotoDetail}>
                <View style={styles.item}>

                    <Image
                        style={styles.avatar}
                        //source={{ uri: `../../assets/${img}` }}
                        source={{ uri: img }}
                        resizeMode="contain"
                    >
                    </Image>
                    <View style={styles.sp}>
                        <Text style={styles.name}>Số lượng: {soLuong}</Text>
                        {/* <TouchableOpacity onPress={() => themSPvaoCart(id)}>
                            <EvilIcons name="cart" style={styles.iconCart} />
                        </TouchableOpacity> */}
                        <Text style={styles.price}>Tổng tiền: {tongTien}đ</Text>
                        <Text style={styles.price}>Trạng thái: {status}</Text>
                        <Text style={styles.des}>Ngày đặt hàng: {date}</Text>
                    </View>



                </View>
            </TouchableOpacity>
        );
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Lịch sử đặt hàng</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.body_listSP}>
                    <View style={styles.body_titleList}>
                        <Text style={styles.body_textListsp}>Danh sách sản phẩm</Text>
                    </View>
                    <View style={styles.listSP}>
                        <FlatList
                            data={products}
                            renderItem={({ item }) => <Item id={item.id_product} soLuong={item.count_product} tongTien={item.total_amount} date={item.invoice_date} status={item.status} img={item.img} />}

                            keyExtractor={item => item.invoice_id}
                        >

                        </FlatList>

                    </View>
                </View>

            </View>
            <Footer userID={id_user}/>
        </View>
    )
}

