import React, { useState, useEffect } from 'react'

import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './Style';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import {api} from '../../api/config'
import axios from 'axios';
export default function Edit() {
    const route = useRoute();
    const navigation = useNavigation()
    const { productId } = route.params;
    // const product = sanPham.find(item => item.id === productId);
    // setName()
    // setDes()
    // setGia()
    // setImg()
    // setSoLuong()

    const goToAdmin = () => {
        navigation.navigate('admin', { shouldRefresh: true })
    }
    const [ten, setName] = React.useState('');
    const [mota, setDes] = React.useState('');
    const [anh, setImg] = React.useState('');
    const [gia, setGia] = React.useState('');
    const [soLuong, setSoLuong] = React.useState('');
    const [danhMuc, setDanhMuc] = React.useState('');
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        // Gọi API để lấy danh sách các danh mục sản phẩm từ máy chủ
        fetch(`http://${api}/apiShopQuanAo/Category/getCategory.php`)
            .then(response => response.json())
            .then(data => {
                setCategories(data);
            })
            .catch(error => console.error(error));
    }, []);
    const Update_Product = () => {
        axios.put('http://${api}/apiSHopQuanAo/Product/api_product.php', {
            id_product: productId,
            name: ten,
            price: parseFloat(gia),
            count: parseInt(soLuong),
            image_url: anh,
            Description: mota,
            id_category: parseInt(danhMuc)
          })
          .then(response => {
            Alert.alert('Success', response.data.message);
          })
          .catch(error => {
            Alert.alert('Error', error.response.data.message);
          });
        // onChangeText('');
        setName('')
        setDes('')
        setImg('')
        setGia('')
        setSoLuong('')

    }

    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.tittle}>Edit Product</Text>
                <TouchableOpacity style={styles.image} onPress={goToAdmin}>
                    <Image

                        source={require('../../assets/back.png')} // Đường dẫn tương đối đến tệp ảnh
                    />
                </TouchableOpacity>

            </View>
            <View style={styles.body}>

                <View style={styles.inputValue}>
                    <TextInput
                        style={styles.input}
                        onChangeText={(ten) => setName(ten)}
                        value={ten}
                        placeholder="Nhập tên sản phẩm"
                    // keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(gia) => setGia(gia)}
                        value={gia}
                        placeholder="Nhập giá"
                    // keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(soLuong) => setSoLuong(soLuong)}
                        value={soLuong}
                        placeholder="Nhập số lượng sản phẩm"
                    // keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(mota) => setDes(mota)}
                        value={mota}
                        placeholder="Mô tả sản phẩm"
                    // keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(anh) => setImg(anh)}
                        value={anh}
                        placeholder="Nhập link ảnh"
                    // keyboardType="numeric"
                    />
                    <Picker
                        style={styles.inputPicker}
                        selectedValue={danhMuc}
                        onValueChange={(itemValue, itemIndex) => setDanhMuc(itemValue)}
                    >
                        <Picker.Item label="Danh mục" value="" style={styles.titleThanhToan} />
                        {categories.map(category => (
                            <Picker.Item key={category.id_category} label={category.name} value={category.id_category.toString()} />
                        ))}
                    </Picker>
                </View>

            </View>
            <View style={styles.footer}>
                <TouchableOpacity onPress={Update_Product}>
                    <Feather name="save" style={styles.iconAdd} />
                    <Text style={styles.footer_edit}>Sửa</Text>
                </TouchableOpacity>

            </View>

        </View>


    );
}
