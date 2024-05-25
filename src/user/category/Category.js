
import { Text, View, Image, TouchableOpacity, Alert, FlatList } from 'react-native';
import React, { Component, useState, useEffect } from 'react';
import styles from './Styles';
import Footer from '../../../components/footerUser/Footer'
import { api } from '../../../api/config'
import { useNavigation, useRoute } from "@react-navigation/native";
export default function Category() {
    const [products, setProducts] = useState([])
    const [check, setCheck] = useState('all')
    const route = useRoute();
    const { id_user } = route.params; // Nhận id_user từ params
    useEffect(() => {
        fetch(`http://${api}/apiShopQuanAo/Product/api_product.php`)
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error(error));
    }, []);
    const checkAll = () => {
        setCheck('all')
    }
    const checkAo = () => {
        setCheck('Ao')
    }
    const checkQuan = () => {
        setCheck('Quan')
    }
    const checkGiay = () => {
        setCheck('Giay')
    }
    const Item = ({ IDcategory, name, price, des, img }) => {
        if (check == 'all') {
            return (
                <View style={styles.item}>
                    <Image
                        style={styles.avatar}
                        //source={{ uri: `../../assets/${img}` }}
                        source={{ uri: img }}
                        resizeMode="contain"
                    >
                    </Image>
                    <View style={styles.sp}>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.price}>{price}đ</Text>
                        <Text style={styles.des}>{des}</Text>
                    </View>

                </View>
            );
        } else {
            if (check == 'Ao' && IDcategory == 1) {
                return (
                    <View style={styles.item}>
                        <Image
                            style={styles.avatar}
                            //source={{ uri: `../../assets/${img}` }}
                            source={{ uri: img }}
                            resizeMode="contain"
                        >
                        </Image>
                        <View style={styles.sp}>
                            <Text style={styles.name}>{name}</Text>
                            <Text style={styles.price}>{price}đ</Text>
                            <Text style={styles.des}>{des}</Text>
                        </View>

                    </View>
                );
            } else {
                if (check == 'Quan' && IDcategory == 2) {
                    return (
                        <View style={styles.item}>
                            <Image
                                style={styles.avatar}
                                //source={{ uri: `../../assets/${img}` }}
                                source={{ uri: img }}
                                resizeMode="contain"
                            >
                            </Image>
                            <View style={styles.sp}>
                                <Text style={styles.name}>{name}</Text>
                                <Text style={styles.price}>{price}đ</Text>
                                <Text style={styles.des}>{des}</Text>
                            </View>

                        </View>
                    );
                } else {
                    if (check == 'Giay' && IDcategory == 3) {
                        return (
                            <View style={styles.item}>
                                <Image
                                    style={styles.avatar}
                                    //source={{ uri: `../../assets/${img}` }}
                                    source={{ uri: img }}
                                    resizeMode="contain"
                                >
                                </Image>
                                <View style={styles.sp}>
                                    <Text style={styles.name}>{name}</Text>
                                    <Text style={styles.price}>{price}đ</Text>
                                    <Text style={styles.des}>{des}</Text>
                                </View>

                            </View>
                        );
                    }
                }
            }
        }

    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Danh Mục</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.body_textDM}>Danh mục</Text>

                <View style={styles.body_background}>
                    <View style={styles.body_danhMuc}>
                        <TouchableOpacity onPress={checkAll}>
                            <View style={styles.body_Ao}>
                                <Image
                                    style={styles.image}
                                    source={require('../../../assets/loadingAllProduct.png')} // Đường dẫn tương đối đến tệp ảnh
                                />
                                <Text style={styles.body_textAo}>All</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={checkAo}>
                            <View style={styles.body_Ao}>
                                <Image
                                    style={styles.image}
                                    source={require('../../../assets/aoSoMi1.jpg')} // Đường dẫn tương đối đến tệp ảnh
                                />
                                <Text style={styles.body_textAo}>Áo</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={checkQuan}>
                            <View style={styles.body_Quan}>
                                <Image
                                    style={styles.image}
                                    source={require('../../../assets/jean1.jpg')}
                                />
                                <Text style={styles.body_textQuan}>Quần</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={checkGiay}>
                            <View style={styles.body_Giay}>
                                <Image
                                    style={styles.image}
                                    source={require('../../../assets/giay1.jpg')}
                                />
                                <Text style={styles.body_textGiay}>Giày</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={styles.body_listSP}>
                    <View style={styles.body_titleList}>
                        <Text style={styles.body_textListsp}>Danh sách sản phẩm</Text>
                    </View>
                    <View style={styles.listSP}>
                        <FlatList
                            data={products}
                            renderItem={({ item }) => <Item IDcategory={item.id_category} name={item.name} price={item.price} des={item.Description} img={item.image_url} />}

                            keyExtractor={item => item.id_product}
                        >

                        </FlatList>

                    </View>
                </View>

            </View>
            <Footer userID={id_user}/>
        </View>
    )
}

