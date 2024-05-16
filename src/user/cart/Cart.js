import React, { useState } from 'react';
import { Text, View, Image, FlatList, TouchableOpacity,Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './Styles';
import { spGioHang } from '../../../data/dataGioHang';
import { useNavigation } from "@react-navigation/native";
import Footer from '../../../components/footerUser/Footer';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { RectButton, Swipeable } from 'react-native-gesture-handler';
const Item = ({ name, price, des, img, onDelete }) => {
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
            <View style={styles.spItem}>
                <View style={styles.item}>
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
        </Swipeable>
    );
};

export default function Cart() {
    const [products, setProducts] = useState(spGioHang);
    const navigation = useNavigation();

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
                    onPress: () => {
                        setProducts(products.filter(item => item.id !== id));
                    },
                    style: "destructive"
                }
            ]
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Giỏ hàng</Text>
                <TouchableOpacity>
                    <Entypo name="menu" size={42} color="black" style={styles.menuIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <FlatList
                    data={products}
                    renderItem={({ item }) => (
                        <Item
                            name={item.name}
                            price={item.price}
                            des={item.Description}
                            img={item.img}
                            onDelete={() => handleDelete(item.id)}
                        />
                    )}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.listSP}
                />
            </View>
            <Footer />
        </View>
    );
}
