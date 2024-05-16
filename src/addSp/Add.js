import React, { Components,useState } from 'react';

import { StyleSheet, Text, View, Button,Image,TextInput, TouchableOpacity  } from 'react-native';
import { sanPham, AddProduct } from '../../data/dataSanPham';
import styles from './Style';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


export default function Add() {
    const navigation = useNavigation()
    const goToAdmin =()=>{
        navigation.navigate('admin')
    }
    const [products, setProducts] = useState(sanPham);
    const [ten, setName] = React.useState('');
    const [mota, setDes] = React.useState('');
    const [anh, setImg] = React.useState('');
    const [gia, setGia] = React.useState('');
    const [soLuong, setSoLuong] = React.useState('');
    const newID = parseInt(sanPham[products.length-1].id)
    const [key, setKey] = React.useState(newID+1);
  
    const addProduct = () =>{
        let ma = key+1 
        setKey(ma)
        let sp = { 
            id: ma.toString(),
            name: ten,
            price: gia,
            count: soLuong,
            img: anh,
            Description: mota,
            
        }
        // Cập nhật dữ liệu trong file dataSanPham.js
        AddProduct(sp);
        alert("Them Thanh cong!")
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
                <Text style={styles.tittle}>Add Product</Text>
                <TouchableOpacity style={styles.touImg} onPress={goToAdmin}>
                    <Image
                        style={styles.image}
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
