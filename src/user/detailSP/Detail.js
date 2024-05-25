import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import styles from './Styles';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from "@react-navigation/native";
import { api } from '../../../api/config'
import axios from 'axios';
const Detail = () => {
  const route = useRoute();
  const { productId, userId } = route.params;
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState(null);

  const fetchData = () => {
    axios.get(`http://${api}/apiSHopQuanAo/Product/api_product.php`)
      .then(response => {
        setProducts(response.data)
        const foundProduct = response.data.find(item => item.id_product === productId);
        setProduct(foundProduct);
      })
      .catch(error => console.error(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleBuyPress = () => {
    Alert.alert("Mua", "Sản phẩm đã được thêm vào giỏ hàng.");
  };

  const navigation = useNavigation()
  const goToHome = () => {
    navigation.navigate('home', { id_user: userId })
  }

  const thanhToan = () => {
    navigation.navigate('pay', { product_Id: productId, user_Id: userId })
  }

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const themSpVaoGH = () => {
    axios.post(`http://${api}/apiShopQuanAo/Cart/api_cart.php`, {
      userId: userId, // Sử dụng userId từ route.params
      productId: productId,
    })
      .then(response => {
        console.log(response.data.message);
        alert(response.data.message);
      })
      .catch(error => {
        console.error(error);
        alert('Đã xảy ra lỗi, vui lòng thử lại sau.');
      });
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goToHome}>
        <View style={styles.iconBack}>
          <Ionicons name="arrow-back" style={styles.back} />
        </View>

      </TouchableOpacity>
      <View style={styles.header}>
        <Image source={{ uri: product.image_url }} resizeMode="cover" style={styles.image} />
      </View>
      <View style={styles.body}>
        <Text style={styles.price}>Giá: {product.price}đ</Text>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.moTa}>Mô tả sản phẩm</Text>
        <Text style={styles.description}>{product.Description}</Text>
      </View>
      <View style={styles.Footer}>
        <TouchableOpacity style={styles.buttonMua} onPress={themSpVaoGH}>
          <Feather name="shopping-cart" style={styles.buttonText} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonThem} onPress={thanhToan}>
          <Text style={styles.buttonText}>Mua ngay</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
};



export default Detail;