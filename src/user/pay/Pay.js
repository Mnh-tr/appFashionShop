import React, { Component, useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './Styles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { Picker } from '@react-native-picker/picker';
import { api } from '../../../api/config'
import axios from 'axios';

const muaNgay = async (count, price, img_url, pttt, dc, IdProduct,IdUser) => {
    try {
        const getCurrentDate = () => {
            const date = new Date();
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
        };

        const sp = {
            count_product: parseInt(count),
            billing_address: dc,
            total_amount: parseInt(count) * parseInt(price),
            invoice_date: getCurrentDate(), // Lấy ngày hiện tại theo định dạng dd/MM/yyyy
            payment_method: pttt,
            status: 'Đang xử lý',
            id_product: IdProduct,
            img: img_url,
            id_user: IdUser
        };

        const response = await axios.post(`http://${api}/apiShopQuanAo/HoaDon/api_HoaDon.php`, sp);

        if (response.data.success) {
            alert('Bạn đã mua hàng thành công!');
        } else {
            alert('Thêm hóa đơn thất bại');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Đã xảy ra lỗi, vui lòng thử lại sau.');
    }
};

const Pay = ({ route }) => {
    const { product_Id,user_Id } = route.params;
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState(null);
    const fetchData = () => {
        fetch(`http://${api}/apiSHopQuanAo/Product/api_product.php`)
            .then(response => response.json())
            .then(data => {
                setProducts(data)
                // Tìm sản phẩm chi tiết dựa trên productId
                const foundProduct = data.find(item => item.id_product === product_Id);
                setProduct(foundProduct);
            })
            .catch(error => console.error(error));
    };
    useEffect(() => {
        fetchData(); // Gọi hàm tải danh sách sản phẩm khi trang Admin được tải lần đầu tiên
    }, []);
    const [diaChi, setName] = React.useState('');

    const [phuongThucThanhToan, setPhuongThucThanhToan] = React.useState('');
    const [soLuong, setSoLuong] = React.useState('');
    const navigation = useNavigation()
    const goToHome = () => {
        navigation.navigate('detail', { productId: product_Id, userId: user_Id  })
    }
    if (!product) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
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
                            source={{ uri: product.image_url }}
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






            <BtnLogic count={soLuong} gia={product.price} img={product.image_url} pttt={phuongThucThanhToan} dc={diaChi} IdProduct={product_Id} IdUser={user_Id}/>
        </View>

    );
};

function BtnLogic({ count, gia, img, pttt, dc, IdProduct,IdUser }) {
    if (!isNaN(parseInt(count) * parseInt(gia))) {
        return (
            <View style={styles.Footer}>
                <TouchableOpacity style={styles.buttonMua}>
                    <Text style={styles.tongTien}>{parseInt(count) * parseInt(gia)}đ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonThem} onPress={() => muaNgay(count, gia, img, pttt, dc, IdProduct, IdUser)}>
                    <Text style={styles.buttonText}>Mua ngay</Text>
                </TouchableOpacity>
            </View>
        )
    } else {
        return (
            <View style={styles.Footer}>
                <TouchableOpacity style={styles.buttonMua} >
                    <Text style={styles.tongTien}>{0}đ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonThem} onPress={muaNgay}>
                    <Text style={styles.buttonText}>Mua ngay</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


export default Pay;