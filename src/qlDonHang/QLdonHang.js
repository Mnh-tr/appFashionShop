import React, { useState, useEffect,useLayoutEffect } from 'react';
import { View, Text, Alert, TouchableOpacity, Image, FlatList } from 'react-native';
import styles from './Style';
import { useNavigation } from '@react-navigation/native';
const QLdonHang = () => {
    const navigation = useNavigation();
    //chỉnh sửa tiêu đề cho màn hình:
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Quản lý đơn hàng',
            // headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: '#FFD6A5',
            },
            headerTitleStyle: {
                fontSize: 25,
                color: '#FF7F09',
                width: '119%', // Đặt độ rộng tối đa cho tiêu đề
                textAlign: 'center',
                
            },
        });
    }, [navigation]);
    return (
        <View style={styles.container}>
          <Text>Màn hình quản lý các đơn hàng</Text>
        </View>
      );
};

export default QLdonHang;
