import React, { useLayoutEffect } from 'react';
import { View, Text, Alert, TouchableOpacity, Image, FlatList } from 'react-native';
import styles from './Style';
import { useNavigation } from '@react-navigation/native';

const QLUser = () => {

    const navigation = useNavigation();
    //chỉnh sửa tiêu đề cho màn hình:
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Quản Lý User',
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: '#FFD6A5',
            },
            headerTitleStyle: {
                fontSize: 35,
                color: '#FF7F09',
            },
        });
    }, [navigation]);
    return (
        <View style={styles.container}>
            <Text>Màn hình sử lý các tài khoản user</Text>
        </View>
    );
};

export default QLUser;
