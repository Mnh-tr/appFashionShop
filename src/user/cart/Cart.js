import React, { useEffect, useState } from 'react';
import { Text, View, Image, FlatList, TouchableOpacity, Alert,TouchableWithoutFeedback  } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Footer from '../../../components/footerUser/Footer';
import { Swipeable } from 'react-native-gesture-handler';
import styles from './Styles';
import { api } from '../../../api/config'
import axios from 'axios';
import { useNavigation, useRoute } from "@react-navigation/native";

const Item = ({ name, price, des, img, onDelete, onSelect, isSelected }) => {
    return (
        <Swipeable
            renderRightActions={() => (
                <View style={styles.rightAction}>
                    <TouchableOpacity onPress={onDelete}>
                        <Text style={styles.actionText}>Xóa</Text>
                    </TouchableOpacity>
                </View>
            )}
        >
            <TouchableWithoutFeedback
                onLongPress={onSelect}
            >
                <View style={styles.spItem}>
                    <View style={[styles.item, isSelected && styles.selectedItem]}>
                        <Image
                            style={styles.avatar}
                            source={{ uri: img }}
                            resizeMode="contain"
                        />
                        <View style={styles.sp}>
                            <Text style={styles.name}>{name}</Text>
                            <Text style={styles.price}>{price}đ</Text>
                            <Text style={styles.des}>{des}</Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Swipeable>
    );
};




export default function Cart() {
    const route = useRoute();
    const { id_user } = route.params; // Nhận id_user từ params
    const [cartProducts, setCartProducts] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const navigation = useNavigation();

    console.log(selectedItems)
    const fetchCartProducts = async () => {
        try {
            const response = await axios.get(`http://${api}/apiShopQuanAo/Cart/api_cart.php?userId=${id_user}`);
            setCartProducts(response.data);
        } catch (error) {
            console.error('Error:', error);
            Alert.alert('Error', error.message);
        }
    };

    useEffect(() => {
        fetchCartProducts();
    }, [id_user]);

    const handleDelete = (id) => {
        Alert.alert(
            "Xóa sản phẩm",
            "Bạn có chắc chắn muốn xóa sản phẩm này?",
            [
                {
                    text: "Hủy",
                    style: "cancel"
                },
                {
                    text: "Xóa",
                    onPress: async () => {
                        try {
                            const userId = id_user; // Thay đổi userId tương ứng
                            const response = await axios.delete(`http://${api}/apiShopQuanAo/Cart/api_cart.php`, {
                                data: { userId, productId: id },
                            });

                            if (response.data.message.includes('thành công')) {
                                // Nếu xóa thành công trên máy chủ, cập nhật lại danh sách sản phẩm trong giỏ hàng
                                setCartProducts(cartProducts.filter(item => item.id_product !== id));
                                alert('Xóa sản phẩm thành công');
                            } else {
                                alert('Xóa sản phẩm thất bại: ' + response.data.message);
                            }
                        } catch (error) {
                            console.error(error);
                            alert('Xóa sản phẩm thất bại: ' + error.message);
                        }
                    },
                    style: "destructive"
                }
            ]
        );
    };

    const handleSelectItem = (id) => {
        setSelectedItems(prevSelectedItems => {
            if (prevSelectedItems.includes(id)) {
                return prevSelectedItems.filter(itemId => itemId !== id);
            } else {
                return [...prevSelectedItems, id];
            }
        });
    };
    const GoToPay = () => {
        navigation.navigate('pays', { selectedItems, id_user });
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Giỏ hàng</Text>
                {selectedItems.length > 0 && (
                    <TouchableOpacity style={styles.button} onPress={GoToPay}>
                       <Text style={styles.buttonText}>Mua tất cả</Text>
                        {/* <Entypo name="menu" size={42} color="black" style={styles.menuIcon} /> */}
                    </TouchableOpacity>
                )}
            </View>
            <View style={styles.body}>
                <FlatList
                    data={cartProducts}
                    renderItem={({ item }) => (
                        <Item
                            name={item.name}
                            price={item.price}
                            des={item.Description}
                            img={item.image_url}
                            onDelete={() => handleDelete(item.id_product)}
                            onSelect={() => handleSelectItem(item.id_product)}
                            isSelected={selectedItems.includes(item.id_product)}
                        />
                    )}
                    keyExtractor={item => item.id_product.toString()}
                    contentContainerStyle={styles.listSP}
                />
            </View>
            <Footer userID={id_user} />
        </View>
    );
}