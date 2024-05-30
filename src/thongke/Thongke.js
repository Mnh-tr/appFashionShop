import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import axios from 'axios';
import { api } from '../../api/config';
import { Picker } from '@react-native-picker/picker';

export default function Thongke() {
  const [revenue, setRevenue] = useState(null);
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);

  const fetchRevenue = async () => {
    try {
      const response = await axios.get(`http://${api}/apiShopQuanAo/User/api_user.php?year=${year}&month=${month}`);
      setRevenue(response.data.totalRevenue);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchRevenue();
  }, [year, month]);

  const handleYearChange = (itemValue) => {
    setYear(itemValue);
  };

  const handleMonthChange = (itemValue) => {
    setMonth(itemValue);
  };

  const years = [];
  for (let i = 2000; i <= new Date().getFullYear(); i++) {
    years.push(i);
  }

  const months = Array.from({ length: 12 }, (v, k) => k + 1);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thống kê doanh thu</Text>
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Chọn năm:</Text>
        <Picker
          selectedValue={year}
          style={styles.picker}
          onValueChange={handleYearChange}
        >
          {years.map(y => (
            <Picker.Item key={y} label={y.toString()} value={y} />
          ))}
        </Picker>
      </View>
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Chọn tháng:</Text>
        <Picker
          selectedValue={month}
          style={styles.picker}
          onValueChange={handleMonthChange}
        >
          {months.map(m => (
            <Picker.Item key={m} label={m.toString()} value={m} />
          ))}
        </Picker>
      </View>
      <Button title="Xem doanh thu" onPress={fetchRevenue} />
      {revenue !== null && (
        <Text style={styles.info}>Doanh thu: ${revenue}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  pickerContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  info: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});
