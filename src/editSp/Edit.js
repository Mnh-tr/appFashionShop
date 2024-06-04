import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './Style';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from "@react-navigation/native";
import { Picker } from '@react-native-picker/picker';
import { api } from '../../api/config';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
export default function Edit() {
    const route = useRoute();
    const navigation = useNavigation();
    const { productId } = route.params;

    const [ten, setName] = useState('');
    const [mota, setDes] = useState('');
    const [anh, setImg] = useState('');
    const [gia, setGia] = useState('');
    const [soLuong, setSoLuong] = useState('');
    const [danhMuc, setDanhMuc] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getProduct(productId);
        danhSachDM();
    }, []);

    const getProduct = (productId) => {
        fetch(`http://${api}/apiSHopQuanAo/Product/api_product.php`)
            .then(response => response.json())
            .then(data => {
                const filteredProduct = data.find(item => item.id_product == productId);
                if (filteredProduct) {
                    setName(filteredProduct.name);
                    setDes(filteredProduct.Description);
                    setImg(filteredProduct.image_url);
                    setGia(filteredProduct.price);
                    setSoLuong(filteredProduct.count);
                    setDanhMuc(filteredProduct.id_category.toString());
                }
            })
            .catch(error => console.error(error));
    }

    const danhSachDM = () => {
        fetch(`http://${api}/apiShopQuanAo/Category/getCategory.php`)
            .then(response => response.json())
            .then(data => {
                setCategories(data);
            })
            .catch(error => console.error(error));
    }

    const goToAdmin = () => {
        navigation.navigate('admin', { shouldRefresh: true });
    }

    const Update_Product = () => {
        axios.put(`http://${api}/apiSHopQuanAo/Product/api_product.php`, {
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

        // Reset state
        setName('');
        setDes('');
        setImg('');
        setGia('');
        setSoLuong('');
        setDanhMuc('');
    }
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [2, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImg(result.assets[0].uri);
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.tittle}>Edit Product</Text>
                <TouchableOpacity style={styles.image} onPress={goToAdmin}>
                    <Image source={require('../../assets/back.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <View style={styles.inputValue}>
                    <TextInput
                        style={styles.input}
                        onChangeText={(ten) => setName(ten)}
                        value={ten}
                        placeholder="Nhập tên sản phẩm"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(gia) => setGia(gia)}
                        value={gia}
                        placeholder="Nhập giá"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(soLuong) => setSoLuong(soLuong)}
                        value={soLuong}
                        placeholder="Nhập số lượng sản phẩm"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(mota) => setDes(mota)}
                        value={mota}
                        placeholder="Mô tả sản phẩm"
                    />
                    {/* <TextInput
                        style={styles.input}
                        onChangeText={(anh) => setImg(anh)}
                        value={anh}
                        placeholder="Nhập link ảnh"
                    /> */}
                    <View style={styles.imagePickerContainer}>
                        {anh ? <Image source={{ uri: anh }} style={styles.selectedImage} /> : null}
                        <TouchableOpacity style={styles.imagePickerButton} onPress={pickImage}>
                            <Text style={styles.imagePickerButtonText}>Chọn ảnh</Text>
                        </TouchableOpacity>

                    </View>
                    <Picker
                        style={styles.inputPicker}
                        selectedValue={danhMuc}
                        onValueChange={(itemValue, itemIndex) => setDanhMuc(itemValue)}
                    >
                        <Picker.Item label="Danh mục" value="" />
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
