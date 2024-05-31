import React, { useEffect, useState, useCallback, useLayoutEffect } from 'react';
import { View, ActivityIndicator, Dimensions, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { api } from '../../api/config';
import styles from './Style';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

const BieuDo = () => {
  const [revenueData, setRevenueData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState(2024);
  const navigation = useNavigation();

  const fetchData = useCallback(async () => {
    try {
      const promises = Array.from({ length: 12 }, (_, i) =>
        fetch(`http://${api}/apiShopQuanAo/HoaDon/api_HoaDon.php?year=${selectedYear}&month=${i + 1}`)
          .then(response => response.json())
      );
      const results = await Promise.all(promises);
      const formattedData = results.map(data => data.totalRevenue);
      const intData = formattedData.map(monthData => monthData.length ? parseInt(monthData[0].total_revenue) : 0);
      setRevenueData(intData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching revenue data:', error);
    }
  }, [selectedYear]);

  useEffect(() => {
    setLoading(true); // Đặt loading về true trước khi fetch dữ liệu mới
    fetchData();
  }, [fetchData]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Biểu đồ Doanh Thu',
      headerStyle: {
        backgroundColor: '#FFD6A5',
      },
      headerTitleStyle: {
        fontSize: 25,
        color: '#FF7F09',
        width: '119%',
        textAlign: 'center',
      },
    });
  }, [navigation]);

  const handleYearChange = (itemValue) => {
    setSelectedYear(itemValue);
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
        <Text style={styles.textNam}>Chọn năm</Text>
        <Picker
          style={styles.pickerNam}
          selectedValue={selectedYear}
          onValueChange={handleYearChange}
          mode="dropdown"
        >
          <Picker.Item label="2020" value={2020} />
          <Picker.Item label="2021" value={2021} />
          <Picker.Item label="2022" value={2022} />
          <Picker.Item label="2023" value={2023} />
          <Picker.Item label="2024" value={2024} />
        </Picker>
      </View>
      <View style={styles.trucDoanhThu}>
        <Text style={styles.textDoanhThu}>Doanh thu (VNĐ)</Text>
      </View>
      
      <View style={styles.hienThiBieuDo}>
        {revenueData && (
          <LineChart
            data={{
              labels: Array.from({ length: 12 }, (_, i) => `${i + 1}`),
              datasets: [
                {
                  data: revenueData,
                },
              ],
            }}
            width={screenWidth * 0.9}
            height={250}
            chartConfig={{
              backgroundColor: '#FFD6A5',
              backgroundGradientFrom: '#FFD6A5',
              backgroundGradientTo: '#FFD6A5',
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: { borderRadius: 16 },
              decimalPlaces: 0,
            }}
            bezier
            style={{ marginVertical: 8, borderRadius: 16 }}
          />
        )}
      </View>
      <View style={styles.trucThang}>
        <Text style={styles.textThang}>Tháng</Text>
      </View>
    </View>
  );
};

export default BieuDo;