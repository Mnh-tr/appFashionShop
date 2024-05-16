import React, {useState,useEffect} from 'react'
import {View, Text,Keyboard, TouchableOpacity,TextInput,Image, FlatList,Alert } from 'react-native'
import styles from './Style'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { sanPham,deleteProduct } from '../../data/dataSanPham';
import Footer from '../../components/footer/Footer';
import { useNavigation,useRoute  } from "@react-navigation/native";
import { useFocusEffect } from '@react-navigation/native';

const Item = ({name, price, des, img, onDelete, onEdit}) => {
    const handleDelete = () => {
        Alert.alert(
            'Delete',
            'Bạn có chắc chăn muốn xóa sản phẩm này chứ!!',
            [
              {text: 'OK', onPress: () => onDelete()}, // Gọi hàm xóa,
              {
                text: 'Cancel',
                onPress: () => {},
                style: 'cancel', // Đặt style là 'cancel' cho nút Cancel
              },
            ],
            {cancelable: true}
          );
         
    };
    
    const goToEdit =()=>{
        Alert.alert(
            'Edit',
            'Bạn có chắc chăn muốn chỉnh sửa sản phẩm này chứ!!',
            [
              {text: 'OK', onPress: () => onEdit()}, // Gọi hàm xóa,
              {
                text: 'Cancel',
                onPress: () => {},
                style: 'cancel', // Đặt style là 'cancel' cho nút Cancel
              },
            ],
            {cancelable: true}
          );
    }
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
            <TouchableOpacity onPress={goToEdit}>
                <AntDesign name="edit" style={styles.iconEdit}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDelete}>
                <AntDesign name="delete" style={styles.iconDelete} />
            </TouchableOpacity>
            
            <Text style={styles.price}>{price}đ</Text>
            <Text style={styles.des}>{des}</Text>
          </View>
          
        </View>
    );
};



const Admin = () =>{
    const [products, setProducts] = useState(sanPham)
    const navigation = useNavigation()
    const goToAdd =()=>{
        navigation.navigate('addsp')
    }
    const handleEditProduct = (productId)=>{
        navigation.navigate('editsp',{productId })
    }
    
    
    const handleDeleteProduct = (productId) => {
        // Gọi hàm deleteProduct để xóa sản phẩm
        deleteProduct(productId);
        setProducts(
            

            
        )
    };
    useFocusEffect(
        React.useCallback(() => {
            // Gọi hàm setProducts(sanPham) khi màn hình Admin được focus
            setProducts(sanPham);
        }, []) 
    );
    const [isLoading, setIsLoading] = useState(true); // State để kiểm tra trạng thái loading

    // Hàm để cập nhật dữ liệu sản phẩm
    const capNhatDuLieuSanPham = () => {
        setProducts(sanPham);
        setIsLoading(false); // Kết thúc quá trình loading
    };

    const route = useRoute();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (route.params?.shouldRefresh) {
        setIsLoading(true);
        capNhatDuLieuSanPham();
        navigation.setParams({ shouldRefresh: false });
      }
    });

    return unsubscribe;
  }, [navigation, route.params?.shouldRefresh]);
    return ( 
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Admin</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.body_textDM}>Danh mục</Text>
                
                <View style={styles.body_background}> 
                <View style={styles.body_danhMuc}>
                    <View style={styles.body_Ao}>
                        <Image
                            style={styles.image}
                            source={require('../../assets/aoSoMi1.jpg')} // Đường dẫn tương đối đến tệp ảnh
                        />
                        <Text style={styles.body_textAo}>Áo</Text>
                    </View>
                    <View style={styles.body_Quan}>
                        <Image
                            style={styles.image}
                            source={require('../../assets/jean1.jpg')} 
                        />
                        <Text style={styles.body_textQuan}>Quần</Text>
                    </View>
                    <View style={styles.body_Giay}>
                        <Image
                            style={styles.image}
                            source={require('../../assets/giay1.jpg')} 
                        />
                        <Text style={styles.body_textGiay}>Giày</Text>
                    </View>
                </View>
                </View>

                <View style={styles.body_listSP}>
                    <View style={styles.body_titleList}>
                        <Text style={styles.body_textListsp}>Danh sách sản phẩm</Text>
                        <TouchableOpacity onPress={goToAdd}>
                            <Ionicons name="add-circle-outline" style={styles.iconAdd} />
                        </TouchableOpacity>
                        
                    </View>
                    <View style={styles.listSP}>
                    <FlatList
                        data={products}
                        renderItem={({item}) => <Item name={item.name} price={item.price} des={item.Description} img={item.img} onDelete={() => handleDeleteProduct(item.id)} onEdit={() => handleEditProduct(item.id)}/>}
                        
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
export default Admin;