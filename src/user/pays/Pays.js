import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './Styles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { Picker } from '@react-native-picker/picker';
import { api } from '../../../api/config'
import axios from 'axios';

const muaNgay = async (count, price, img_url, pttt, dc, IdProduct, IdUser) => {
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

const Pays = ({ route }) => {
    const { selectedItems, id_user } = route.params;
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState(null);
    const [diaChi, setName] = useState('');
    const [phuongThucThanhToan, setPhuongThucThanhToan] = useState('');
    const [soLuong, setSoLuong] = useState('');
    const [quantity, setQuantity] = useState({}); // Mảng lưu số lượng mỗi sản phẩm
    const navigation = useNavigation();

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://${api}/apiSHopQuanAo/Product/api_product.php`);
            setProducts(response.data);

            // Tìm sản phẩm chi tiết dựa trên selectedItems
            const selectedProducts = response.data.filter(item => selectedItems.includes(item.id_product));
            setProduct(selectedProducts);

            // Khởi tạo mảng lưu số lượng với giá trị mặc định là 1 cho mỗi sản phẩm
            const initialQuantity = {};
            selectedProducts.forEach(item => {
                initialQuantity[item.id_product] = 1;
            });
            setQuantity(initialQuantity);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData(); // Gọi hàm tải danh sách sản phẩm khi trang được tải lần đầu tiên
    }, []);

    const handleChangeQuantity = (idProduct, value) => {
        // Cập nhật số lượng của sản phẩm khi người dùng nhập số lượng mới
        setQuantity(prevState => ({
            ...prevState,
            [idProduct]: value
        }));
    };

    const goToHome = () => {
        navigation.navigate('cart', { id_user: id_user });
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
                {product.map(item => (
                    <View key={item.id_product} style={styles.spItem}>
                        <View style={styles.item}>
                            <Image
                                style={styles.avatar}
                                source={{ uri: item.image_url }}
                                resizeMode="contain"
                            />
                            <View style={styles.sp}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.price}>{item.price}đ</Text>
                                <Text style={styles.des}>{item.Description}</Text>
                            </View>
                            <Text style={styles.textSL}>Nhập số lượng: </Text>
                            <TextInput
                                style={styles.inputSL}
                                value={quantity[item.id_product] ? quantity[item.id_product].toString() : ''}
                                onChangeText={(value) => handleChangeQuantity(item.id_product, value)}
                                keyboardType="numeric"
                                // placeholder="số lượng"
                            />
                        </View>
                    </View>
                ))}
                <View style={styles.inputValue}>
                    <TextInput
                        style={styles.input}
                        onChangeText={(diaChi) => setName(diaChi)}
                        value={diaChi}
                        placeholder="Nhập địa chỉ giao hàng"
                    />
                    {/* <TextInput
                        style={styles.input}
                        onChangeText={(soLuong) => setSoLuong(soLuong)}
                        value={soLuong}
                        placeholder="Nhập số lượng sản phẩm"
                        keyboardType="numeric"
                    /> */}
                    <Picker
                        style={styles.inputPicker}
                        selectedValue={phuongThucThanhToan}
                        onValueChange={(itemValue, itemIndex) => setPhuongThucThanhToan(itemValue)}
                    >
                        <Picker.Item label="Chọn phương thức thanh toán" value="" style={styles.titleThanhToan} />
                        <Picker.Item label="Thanh toán khi nhận hàng" value="pay" />
                        <Picker.Item label="Thanh toán online" value="onl" />
                    </Picker>
                </View>
            </View>
            <BtnLogic count={soLuong} product={product} quantity={quantity} phuongThucThanhToan={phuongThucThanhToan} diaChi={diaChi} id_user={id_user} />
        </View>
    );
};

function BtnLogic({ count, product, quantity, phuongThucThanhToan, diaChi, id_user }) {
    const totalPrice = product.reduce((total, item) => {
        const price = parseInt(item.price);
        const qty = parseInt(quantity[item.id_product] || 0);
        return total + price * qty;
    }, 0);

    const handleBuyNow = async () => {
        const promises = product.map(item => {
            const count = parseInt(quantity[item.id_product] || 0);
            return muaNgay(
                count,
                parseInt(item.price),
                item.image_url,
                phuongThucThanhToan,
                diaChi,
                item.id_product,
                id_user
            );
        });

        try {
            await Promise.all(promises);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.Footer}>
            <TouchableOpacity style={styles.buttonMua}>
                <Text style={styles.tongTien}>{totalPrice}đ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonThem} onPress={handleBuyNow}>
                <Text style={styles.buttonText}>Mua ngay</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Pays;

