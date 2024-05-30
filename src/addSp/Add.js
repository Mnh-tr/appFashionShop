import React, { useState, useEffect, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { api } from '../../api/config';
import styles from './Style';

export default function Add() {
    const navigation = useNavigation();
    const [categories, setCategories] = useState([]);
    const [ten, setName] = useState('');
    const [mota, setDes] = useState('');
    const [anh, setImg] = useState('');
    const [gia, setGia] = useState('');
    const [soLuong, setSoLuong] = useState('');
    const [danhMuc, setDanhMuc] = useState('');

    // Chỉnh sửa tiêu đề cho màn hình
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Thêm Sản Phẩm',
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: '#FFD6A5',
            },
            headerTitleStyle: {
                fontSize: 25,
                color: '#FF7F09',
                width: '100%',
                textAlign: 'center'
            },
        });
    }, [navigation]);

    useEffect(() => {
        fetch(`http://${api}/apiShopQuanAo/Category/getCategory.php`)
            .then(response => response.json())
            .then(data => {
                setCategories(data);
            })
            .catch(error => console.error(error));
    }, []);

    const addProduct = () => {
        if (isNaN(danhMuc) || danhMuc === '') {
            alert('Danh mục không hợp lệ');
            return;
        }

        let sp = {
            name: ten,
            price: parseFloat(gia),
            count: parseInt(soLuong),
            image_url: anh,
            Description: mota,
            id_category: parseInt(danhMuc)
        };

        fetch(`http://${api}/apiShopQuanAo/Product/api_product.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sp)
        })
            .then(response => response.json())
            .then(data => {
                if (data.message === 'Thêm sản phẩm thành công') {
                    Alert.alert('Success', 'Thêm sản phẩm thành công!');
                    setName('');
                    setDes('');
                    setImg('');
                    setGia('');
                    setSoLuong('');
                    setDanhMuc('');
                } else {
                    Alert.alert('Error', 'Thêm sản phẩm thất bại: ' + data.message);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                Alert.alert('Error', 'Đã xảy ra lỗi. Vui lòng thử lại sau.');
            });
    };

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
                {/* <Text style={styles.tittle}>Add Product</Text> */}
                {/* <TouchableOpacity style={styles.touImg} onPress={goToAdmin}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/back.png')}
                    />
                </TouchableOpacity> */}
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
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(soLuong) => setSoLuong(soLuong)}
                        value={soLuong}
                        placeholder="Nhập số lượng sản phẩm"
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(mota) => setDes(mota)}
                        value={mota}
                        placeholder="Mô tả sản phẩm"
                    />
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
                        <Picker.Item label="Danh mục" value="" style={styles.titleThanhToan} />
                        {categories.map(category => (
                            <Picker.Item key={category.id_category} label={category.name} value={category.id_category.toString()} />
                        ))}
                    </Picker>
                </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity onPress={addProduct}>
                    <Ionicons name="add-circle-outline" style={styles.iconAdd} />
                    <Text style={styles.footer_add}>Thêm</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
