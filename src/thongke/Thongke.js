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
      const response = await axios.get(`http://${api}/apiShopQuanAo/HoaDon/api_HoaDon.php`, {
        params: {
          year: year,
          month: month
        }
      });
      if (response.data && response.data.totalRevenue && response.data.totalRevenue.length > 0) {
        const revenueNumber = parseFloat(response.data.totalRevenue[0].total_revenue);
        if (!isNaN(revenueNumber)) {
          setRevenue(revenueNumber);
        } else {
          setRevenue(0); // Trả về 0 nếu dữ liệu không phải là số
        }
      } else {
        setRevenue(0); 
      }
    } catch (error) {
      console.error('Error:', error);
      setRevenue(0); 
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
      {revenue !== null && (
        <Text style={styles.info}>Doanh thu tháng {month} là: {Number(revenue)} VND</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  pickerContainer: {
    width: '80%',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: '#555',
  },
  picker: {
    height: 50,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  info: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    color: '#333',
  },
});
