import React, { useLayoutEffect, useState, useEffect } from 'react';
import { View, Text, Alert, TouchableOpacity, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { api } from '../../api/config';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import styles from './Style';

const QLUser = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [tempRoles, setTempRoles] = useState({}); // State để lưu trữ role tạm thời
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Quản Lý User',
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: '#FFD6A5',
            },
            headerTitleStyle: {
                fontSize: 25,
                color: '#FF7F09',
            },
        });
    }, [navigation]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get(`http://${api}/apiShopQuanAo/User/api_user.php`);
            setUsers(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleRoleChange = (userId, newRole) => {
        setTempRoles((prevTempRoles) => ({
            ...prevTempRoles,
            [userId]: newRole,
        }));
    };

    const handleUpdateRole = async (user) => {
        const newRole = tempRoles[user.id_user] || user.role; // Lấy role tạm thời hoặc role hiện tại
        try {
            const response = await axios.put(`http://${api}/apiShopQuanAo/User/api_user.php?id=${user.id_user}`, { role: newRole });
            if (response.data.success) {
                fetchUsers(); // Cập nhật danh sách người dùng sau khi thay đổi role
                Alert.alert('Thành công', 'Cập nhập thành công');
            } else {
                Alert.alert('Lỗi', response.data.message);
            }
        } catch (error) {
            console.error('Error updating role:', error);
            Alert.alert('Lỗi', 'Đã xảy ra lỗi khi cập nhật role');
        }
    };

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={users}
                keyExtractor={(item) => item.id_user.toString()}
                renderItem={({ item }) => (
                    <View style={styles.userItem}>
                        <View style={styles.userInfo}>
                            <Text style={styles.userName}>Tên: {item.name}</Text>
                            <Text style={styles.userEmail}>Gmail: {item.gmail}</Text>
                            <Text style={styles.userRole}>Role: </Text>
                            <Picker
                                selectedValue={tempRoles[item.id_user] || item.role}
                                style={styles.rolePicker}
                                onValueChange={(itemValue) => handleRoleChange(item.id_user, itemValue)}
                            >
                                <Picker.Item label="User" value="user" />
                                <Picker.Item label="Admin" value="admin" />
                            </Picker>
                            <TouchableOpacity
                                style={styles.updateButton}
                                onPress={() => handleUpdateRole(item)}
                            >
                                <Text style={styles.updateButtonText}>Cập nhật</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

export default QLUser;
