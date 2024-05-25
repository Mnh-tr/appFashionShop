import { StyleSheet, Text, View, Image, TextInput, ActivityIndicator, TouchableOpacity, Alert, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from './Styles';
import { useNavigation, useRoute } from "@react-navigation/native";
import Footer from '../../../components/footerUser/Footer';
import { EvilIcons } from '@expo/vector-icons';
import { api } from '../../../api/config';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';

export default function Home() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();
    const route = useRoute();
    const { id_user } = route.params; // Nhận id_user từ params
    console.log(id_user)
    const fetchData = () => {
        setLoading(true);
        axios.get(`http://${api}/apiSHopQuanAo/Product/api_product.php`, {
            params: { searchTerm } // Truyền từ khóa tìm kiếm vào yêu cầu GET
        })
        .then(response => {
            setProducts(response.data);
            setLoading(false);
        })
        .catch(error => {
            console.error(error);
            setLoading(false);
        });
    };

    useEffect(() => {
        fetchData(); // Gọi hàm tải danh sách sản phẩm khi trang Home được tải lần đầu tiên
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            fetchData(); // Gọi hàm tải danh sách sản phẩm khi trang Home được focus lại
        }, [])
    );

    const themSPvaoCart = (id) => {
        axios.post(`http://${api}/apiSHopQuanAo/Cart/api_cart.php`, {
            userId: id_user, // Sử dụng id_user từ params
            productId: id,
        })
        .then(response => {
            Alert.alert("Thông báo", response.data.message);
        })
        .catch(error => {
            console.error(error);
        });
        fetchData()
    };

    const searchSanPham = () => {
        fetchData();
        setSearchTerm('');
    };

    if (loading) {
        return (
            <View style={styles.loadingCSS}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    const Item = ({ id, name, price, des, img }) => {
        const gotoDetail = () => {
            navigation.navigate('detail', { productId: id, userId: id_user }); // Truyền id_user vào chi tiết sản phẩm
        };
        return (
            <TouchableOpacity onPress={gotoDetail}>
                <View style={styles.item}>
                    <Image
                        style={styles.avatar}
                        source={{ uri: img }}
                        resizeMode="contain"
                    />
                    <View style={styles.sp}>
                        <Text style={styles.name}>{name}</Text>
                        <TouchableOpacity onPress={() => themSPvaoCart(id)}>
                            <EvilIcons name="cart" style={styles.iconCart} />
                        </TouchableOpacity>
                        <Text style={styles.price}>{price}đ</Text>
                        <Text style={styles.des}>{des}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Trang Chủ</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.body_titleList}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Tìm kiếm sản phẩm..."
                        value={searchTerm}
                        onChangeText={text => setSearchTerm(text)}
                    />
                    <TouchableOpacity style={styles.searchButton} onPress={searchSanPham}>
                        <EvilIcons name="search" style={styles.searchIcon} />
                    </TouchableOpacity>
                </View>
                <View style={styles.body_listSP}>
                    <View style={styles.body_titleList}>
                        <Text style={styles.body_textListsp}>Danh sách sản phẩm</Text>
                    </View>
                    <View style={styles.listSP}>
                        <FlatList
                            data={products}
                            renderItem={({ item }) => <Item id={item.id_product} name={item.name} price={item.price} des={item.Description} img={item.image_url} />}
                            keyExtractor={item => item.id_product}
                        />
                    </View>
                </View>
            </View>
            <Footer userID={id_user}/>
        </View>
    );
}
