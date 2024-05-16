import React, { Components, useState } from 'react';
import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './Styles';
import { sanPham } from '../../../data/dataSanPham';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { Picker } from '@react-native-picker/picker';
const Pay = ({ route }) => {
    const { product_Id } = route.params;
    const product = sanPham.find(item => item.id === product_Id);
    const [diaChi, setName] = React.useState('');
    const [tongtien, setDes] = React.useState('');
    const [phuongThucThanhToan, setPhuongThucThanhToan] = React.useState('');
    const [soLuong, setSoLuong] = React.useState('');
    const navigation = useNavigation()
    const goToHome = () => {
        navigation.navigate('detail', { productId: product_Id })
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={goToHome}>
                    <View style={styles.iconBack}>
                        <Ionicons name="arrow-back" style={styles.back} />
                    </View>

                </TouchableOpacity>
                <Text style={styles.title}>Thanh Toán</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.spItem}>
                    <View style={styles.item}>
                        <Image
                            style={styles.avatar}
                            source={{ uri: product.img }}
                            resizeMode="contain"
                        />
                        <View style={styles.sp}>
                            <Text style={styles.name}>{product.name}</Text>
                            <Text style={styles.price}>{product.price}đ</Text>
                            <Text style={styles.des}>{product.Description}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.inputValue}>


                    <TextInput
                        style={styles.input}
                        onChangeText={(diaChi) => setName(diaChi)}
                        value={diaChi}
                        placeholder="Nhập địa chỉ giao hàng"
                    // keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(soLuong) => setSoLuong(soLuong)}
                        value={soLuong}
                        placeholder="Nhập số lượng sản phẩm"
                        keyboardType="numeric"
                    />
                    <Picker
                        style={styles.inputPicker}
                        selectedValue={phuongThucThanhToan}
                        onValueChange={(itemValue, itemIndex) => setPhuongThucThanhToan(itemValue)}
                    >
                        <Picker.Item label="Chọn phương thức thanh toán" value="" style={styles.titleThanhToan} />
                        <Picker.Item label="Thanh toán khi nhận hàng" value="pay" />
                        <Picker.Item label="Thanh toán online" value="onl" />

                        {/* Thêm các mục khác nếu cần */}
                    </Picker>


                </View>
            </View>





            <View style={styles.Footer}>
                <TouchableOpacity style={styles.buttonMua}>
                    <Feather name="shopping-cart" style={styles.buttonText} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonThem}>
                    <Text style={styles.buttonText}>Mua ngay</Text>
                </TouchableOpacity>
            </View>

        </View>

    );
};



export default Pay;