import React, { useState, useEffect } from 'react';
import { View, Text, Alert, TouchableOpacity, Image, FlatList } from 'react-native';
import styles from './Style';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Footer from '../../components/footer/Footer';
import { useNavigation } from "@react-navigation/native";
import { useFocusEffect } from '@react-navigation/native';
import { api } from '../../api/config';

const Item = ({ name, price, des, img, onDelete, onEdit }) => {
    const handleDelete = () => {
        Alert.alert(
            'Delete',
            'Bạn có chắc chắn muốn xóa sản phẩm này chứ?',
            [
                { text: 'OK', onPress: () => onDelete() },
                {
                    text: 'Cancel',
                    onPress: () => { },
                    style: 'cancel',
                },
            ],
            { cancelable: true }
        );
    };

    const goToEdit = () => {
        Alert.alert(
            'Edit',
            'Bạn có chắc chắn muốn chỉnh sửa sản phẩm này chứ?',
            [
                { text: 'OK', onPress: () => onEdit() },
                {
                    text: 'Cancel',
                    onPress: () => { },
                    style: 'cancel',
                },
            ],
            { cancelable: true }
        );
    };

    return (
        <View style={styles.item}>
            <Image
                style={styles.avatar}
                source={{ uri: img }}
                resizeMode="contain"
            />
            <View style={styles.sp}>
                <Text style={styles.name}>{name}</Text>
                <TouchableOpacity onPress={goToEdit}>
                    <AntDesign name="edit" style={styles.iconEdit} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleDelete}>
                    <AntDesign name="delete" style={styles.iconDelete} />
                </TouchableOpacity>
                <Text style={styles.price}>{price}đ</Text>
                <Text style={styles.des}>{des}</Text>
            </View>
        </View>
    );
};

const Admin = () => {
    const [products, setProducts] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(`http://${api}/apiSHopQuanAo/Product/api_product.php`);
            const text = await response.text();
            const data = response.headers.get('content-type').includes('application/json') ? JSON.parse(text) : text;

            if (typeof data === 'string') {
                throw new Error(data);
            }
            
            setProducts(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            fetchData();
        }, [])
    );

    const navigation = useNavigation();

    const goToAdd = () => {
        navigation.navigate('addsp');
    };

    const handleEditProduct = (productId) => {
        navigation.navigate('editsp', { productId });
    };

    const handleDeleteProduct = async (id_product) => {
        try {
            const response = await fetch(`http://${api}/apiShopQuanAo/Product/api_product.php?id_product=${id_product}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const text = await response.text();
            const data = response.headers.get('content-type').includes('application/json') ? JSON.parse(text) : text;

            if (typeof data === 'string') {
                throw new Error(data);
            }

            if (data.message === 'Xóa sản phẩm thành công') {
                alert('Xóa sản phẩm thành công!');
                fetchData();
            } else {
                alert('Xóa sản phẩm thất bại: ' + data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Admin</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.body_textDM}>Danh mục</Text>
                <View style={styles.body_background}>
                    <View style={styles.body_danhMuc}>
                        <View style={styles.body_Ao}>
                            <Image
                                style={styles.image}
                                source={require('../../assets/aoSoMi1.jpg')}
                            />
                            <Text style={styles.body_textAo}>Áo</Text>
                        </View>
                        <View style={styles.body_Quan}>
                            <Image
                                style={styles.image}
                                source={require('../../assets/jean1.jpg')}
                            />
                            <Text style={styles.body_textQuan}>Quần</Text>
                        </View>
                        <View style={styles.body_Giay}>
                            <Image
                                style={styles.image}
                                source={require('../../assets/giay1.jpg')}
                            />
                            <Text style={styles.body_textGiay}>Giày</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.body_listSP}>
                    <View style={styles.body_titleList}>
                        <Text style={styles.body_textListsp}>Danh sách sản phẩm</Text>
                        <TouchableOpacity onPress={goToAdd}>
                            <Ionicons name="add-circle-outline" style={styles.iconAdd} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.listSP}>
                        <FlatList
                            data={products}
                            renderItem={({ item }) => (
                                <Item
                                    name={item.name}
                                    price={item.price}
                                    des={item.Description}
                                    img={item.image_url}
                                    onDelete={() => handleDeleteProduct(item.id_product)}
                                    onEdit={() => handleEditProduct(item.id_product)}
                                />
                            )}
                            keyExtractor={item => item.id_product.toString()}
                        />
                    </View>
                </View>
            </View>
            <Footer />
        </View>
    );
};

export default Admin;
