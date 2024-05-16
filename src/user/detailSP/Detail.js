import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './Styles';
import { sanPham } from '../../../data/dataSanPham';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
const Detail = ({ route }) => {
  const { productId } = route.params;
    const product = sanPham.find(item => item.id === productId);

    if (!product) {
        return (
            <View>
                <Text>Sản phẩm không tồn tại</Text>
            </View>
        );
    }
    const handleBuyPress = () => {
      Alert.alert("Mua", "Sản phẩm đã được thêm vào giỏ hàng.");
    };
    const navigation = useNavigation()
    const goToHome =() =>{
      navigation.navigate('home')
    }
    const thanhToan =() =>{
      navigation.navigate('pay', { product_Id: productId })
    }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goToHome}>
        <View  style={styles.iconBack}>
        <Ionicons name="arrow-back" style={styles.back} />
        </View>
      
      </TouchableOpacity>
      <View style={styles.header}>
        <Image source={{ uri: product.img }} resizeMode="cover" style={styles.image} />
      </View>
      <View style={styles.body}>
        <Text style={styles.price}>Giá: {product.price}đ</Text>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.moTa}>Mô tả sản phẩm</Text>
        <Text style={styles.description}>{product.Description}</Text>
      </View>
      <View style={styles.Footer}>
      <TouchableOpacity style={styles.buttonMua} >
          <Feather name="shopping-cart" style={styles.buttonText} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonThem} onPress={thanhToan}>
          <Text style={styles.buttonText}>Mua ngay</Text>
        </TouchableOpacity>
      </View>
      {/* <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Mua</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Thêm vào giỏ</Text>
        </TouchableOpacity>
      </View> */}

    </View>
    
  );
};



export default Detail;