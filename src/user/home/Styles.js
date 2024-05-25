import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD6A5",
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    color: '#FF7F09',
    marginTop: 20
  },
  body: {
    flex: 9,
    
  },
  body_textDM: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 20,
  },
  body_background: {
    alignItems: 'center'
  },

  body_danhMuc: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FE862E',
    borderRadius: 30,
    width: '90%',
    paddingVertical: 10,
  },
  image: {
    width: 51,
    height: 48,
    borderRadius: 100
  },
  body_textAo: {
    marginLeft: 17,
    marginTop: 2,
  },
  body_textQuan: {
    marginLeft: 8,
    marginTop: 2,
  },
  body_textGiay: {
    marginLeft: 13,
    marginTop: 2,
  },
  body_listSP: {
    flex: 1,
  },
  body_titleList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  body_textListsp: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 100
  },
  iconAdd: {
    fontSize: 30,
    color: '#DC6B19',
    marginRight: 20
  },
  listSP: {
    flex: 1, // Thay đổi từ marginBottom thành flex
  },
  loadingCSS:{
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 16,
  },
  item: {
    backgroundColor: '#FFAA46',
    borderRadius: 20,
    width: (width * 0.95),
    height: 116,
    flexDirection: 'row',
    marginBottom: 10,
    padding: 10,
    marginLeft: 10
  },
  avatar: {
    flex: 1,
    width: 89,
    height: 96,
  },
  sp: {
    flex: 3,
    marginLeft: 10
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  iconEdit: {
    fontSize: 25,
    position: 'absolute',
    right: 50,
    top: -25,
    color: '#FFEBB2'
  },
  iconCart: {
    fontSize: 35,
    position: 'absolute',
    right: 5,
    top: -25,
    color: '#FB6D48'
  },
  price: {
    fontSize: 15,
  },
  des: {
    fontSize: 11,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    flex: 1,
    marginRight: 10,
    backgroundColor: "#F1E5D1"
  },
  searchButton: {
    backgroundColor: '#FF7F09',
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    fontSize: 25,
    color: '#fff',
  },
})

export default styles;