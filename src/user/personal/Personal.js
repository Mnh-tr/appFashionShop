import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import styles from './Styles';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import Footer from '../../../components/footerUser/Footer';
import { useNavigation, useRoute } from "@react-navigation/native";
import { api } from '../../../api/config';
import axios from 'axios';

export default function Personal() {
  const route = useRoute();
  const { id_user } = route.params;
  const navigation = useNavigation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://${api}/apiShopQuanAo/User/api_user.php?id=${id_user}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error:', error);
        Alert.alert('Error', error.message);
      }
    };

    fetchUser();
  }, [id_user]);
  const goToAdmin = () => {
    navigation.navigate('admin');
  };

  const goToLichSu = () => {
    navigation.navigate('history', { id_user: id_user });
  };

  const exit = () => {
    navigation.navigate('login');
  };
  const gotoThongke = () => {
    navigation.navigate('thongke');
  };

  function CheckAdmin({ user, goToAdmin }) {
    if (user && user.role === "admin") {
      return (

        <><TouchableOpacity style={styles.button} onPress={goToAdmin}>
          <FontAwesome name="bars" size={24} color="black" />
          <Text style={styles.buttonText}>Admin</Text>

        </TouchableOpacity>
        </>
      );
    } else {
      return (
        <TouchableOpacity style={styles.button}>

          <Text style={styles.buttonText}>Xóa tài khoản</Text>
        </TouchableOpacity>
      );
    }
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://www.w3schools.com/w3images/avatar2.png' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>{user?.name || 'Nguyễn Văn A'}</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.thongTinCaNhan}>
          <Text style={styles.info}>Họ tên: {user?.name || 'Nguyễn Văn A'}</Text>
          <Text style={styles.info}>Số điện thoại: 0968235478</Text>
          <Text style={styles.info}>Email: {user?.gmail || 'vanA12@gmail.com'}</Text>
          <Text style={styles.info}>Địa chỉ: 65 Kha Vạn Cân Thủ Đức</Text>
        </View>
        <CheckAdmin user={user} goToAdmin={goToAdmin} />
        <TouchableOpacity style={styles.button} onPress={goToLichSu}>
          <Text style={styles.buttonText}>Lịch sử đặt hàng</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={exit}>
          <Text style={styles.buttonText}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
      <Footer userID={id_user} />
    </View>
  );
}
