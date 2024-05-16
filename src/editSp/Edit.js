import React, { Components } from 'react';

import { StyleSheet, Text, View, Button,Image,TextInput, TouchableOpacity  } from 'react-native';
import {sanPham, updateProduct} from '../../data/dataSanPham';
import styles from './Style';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native';


export default function Edit() {
    const route = useRoute();
    const navigation = useNavigation()
    const { productId } = route.params;
    const product = sanPham.find(item => item.id === productId);
    // setName()
    // setDes()
    // setGia()
    // setImg()
    // setSoLuong()

    const goToAdmin =()=>{
        navigation.navigate('admin',{ shouldRefresh: true })
    }
    const [ten, setName] = React.useState(product.name);
    const [mota, setDes] = React.useState(product.Description);
    const [anh, setImg] = React.useState(product.img);
    const [gia, setGia] = React.useState(product.price);
    const [soLuong, setSoLuong] = React.useState(product.count);
    
    const addProduct = () =>{
        
        let sp = {
            id: productId,
            name: ten,
            price: gia,
            count: soLuong,
            img: anh,
            Description: mota,
            
        }
        // sanPham.push(sp)
        updateProduct(sp)
        alert("Sửa Thanh cong!")
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
                    
                </View>
                
            </View>
            <View style={styles.footer}>
                <TouchableOpacity onPress={addProduct}>
                    <Feather name="save" style={styles.iconAdd} />
                    <Text style={styles.footer_edit}>Sửa</Text>
                </TouchableOpacity>
                
            </View>
            
        </View>
    
    
  );
}
