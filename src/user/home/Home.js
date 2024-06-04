import React, { useState, useEffect, useRef, useCallback } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ActivityIndicator, TouchableOpacity, Alert, FlatList, Dimensions } from 'react-native';
import { useNavigation, useRoute, useFocusEffect } from "@react-navigation/native";
import { EvilIcons } from '@expo/vector-icons';
import axios from 'axios';
import { api } from '../../../api/config';
import styles from './Styles';
import Footer from '../../../components/footerUser/Footer';

const data = [
    { id: '1', hinhanh: 'https://intphcm.com/data/upload/logo-banner-thoi-trang.jpg', },
    { id: '2', hinhanh: 'https://intphcm.com/data/upload/banner-thoi-trang-bi-an.jpg', },
    { id: '3', hinhanh: 'https://intphcm.com/data/upload/banner-thoi-trang-nam.jpg', },
    { id: '4', hinhanh: 'https://intphcm.com/data/upload/tieu-de-banner-thoi-trang.jpg', },
    { id: '5', hinhanh: 'https://intphcm.com/data/upload/dung-luong-banner-thoi-trang.jpg', },
];

export default function Home() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();
    const route = useRoute();
    const { id_user } = route.params;
    const flatListRef = useRef(null);
    const itemWidth = Dimensions.get('window').width;
    const [scrollOffset, setScrollOffset] = useState(0);
    const [scrollDirection, setScrollDirection] = useState(1);

    const fetchData = useCallback(() => {
        setLoading(true);
        axios.get(`http://${api}/apiSHopQuanAo/Product/api_product.php`, {
            params: { searchTerm }
        })
            .then(response => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, [searchTerm]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    useFocusEffect(
        useCallback(() => {
            fetchData();
        }, [fetchData])
    );

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (flatListRef.current) {
                setScrollOffset(prevOffset => {
                    const newOffset = prevOffset + itemWidth * scrollDirection;
                    const maxOffset = (data.length - 1) * itemWidth;

                    if (newOffset >= maxOffset || newOffset <= 0) {
                        setScrollDirection(prevDirection => prevDirection * -1);
                    }

                    return newOffset;
                });
                flatListRef.current.scrollToOffset({ offset: scrollOffset, animated: true });
            }
        }, 2000);

        return () => clearInterval(intervalId);
    }, [scrollOffset, scrollDirection, itemWidth]);

    const themSPvaoCart = (id) => {
        axios.post(`http://${api}/apiSHopQuanAo/Cart/api_cart.php`, {
            userId: id_user,
            productId: id,
        })
            .then(response => {
                Alert.alert("Thông báo", response.data.message);
            })
            .catch(error => {
                console.error(error);
            });
        fetchData();
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
            navigation.navigate('detail', { productId: id, userId: id_user });
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

    const render = ({ item }) => (
        <View style={styles.items}>
            <Image style={{ width: 380, height: 130 ,resizeMode:"cover" }} source={{ uri: item.hinhanh }} />
        </View>
    );

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
                        <FlatList
                            ref={flatListRef}
                            data={data}
                            renderItem={render}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
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
            <Footer userID={id_user} />
        </View>
    );
}
