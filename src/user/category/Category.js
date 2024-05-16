
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert ,FlatList} from 'react-native';
import React, { Component, useState } from 'react';
import styles from './Styles';
import { sanPham } from '../../../data/dataSanPham';
import { useNavigation } from "@react-navigation/native";
import Footer from '../../../components/footerUser/Footer'
const Item = ({name, price, des, img}) => {
    return (
        <View style={styles.item}>
             <Image
            style={styles.avatar}
            //source={{ uri: `../../assets/${img}` }}
            source={{uri: img}}
            resizeMode="contain"
          >
            </Image>
          <View style={styles.sp}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>{price}đ</Text>
            <Text style={styles.des}>{des}</Text>
          </View>
          
        </View>
    );
};
export default function Category() {
    const [products, setProducts] = useState(sanPham)
    const navigation = useNavigation()
    const goToRegister = () => {
        navigation.navigate('register')
    }
    const KTTaiKhoan = () => {
        navigation.navigate('admin')
    }
    return ( 
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Danh Mục</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.body_textDM}>Danh mục</Text>
                
                <View style={styles.body_background}> 
                <View style={styles.body_danhMuc}>
                    <View style={styles.body_Ao}>
                        <Image
                            style={styles.image}
                            source={require('../../../assets/aoSoMi1.jpg')} // Đường dẫn tương đối đến tệp ảnh
                        />
                        <Text style={styles.body_textAo}>Áo</Text>
                    </View>
                    <View style={styles.body_Quan}>
                        <Image
                            style={styles.image}
                            source={require('../../../assets/jean1.jpg')} 
                        />
                        <Text style={styles.body_textQuan}>Quần</Text>
                    </View>
                    <View style={styles.body_Giay}>
                        <Image
                            style={styles.image}
                            source={require('../../../assets/giay1.jpg')} 
                        />
                        <Text style={styles.body_textGiay}>Giày</Text>
                    </View>
                </View>
                </View>

                <View style={styles.body_listSP}>
                    <View style={styles.body_titleList}>
                        <Text style={styles.body_textListsp}>Danh sách sản phẩm</Text>
                    </View>
                    <View style={styles.listSP}>
                    <FlatList
                        data={products}
                        renderItem={({item}) => <Item name={item.name} price={item.price} des={item.Description} img={item.img}/>}
                        
                        keyExtractor={item => item.id}
                    >

                    </FlatList>

                    </View>
                </View>
                
            </View>
            <Footer/>
        </View>
    )
}

