import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Admin from './src/admin/Admin'
import AddSp from './src/addSp/Add'
import EditSp from './src/editSp/Edit'
import Login from './src/login/Login'
import Register from './src/register/Register'
import Home from './src/user/home/Home'
import Category from './src/user/category/Category';
import Cart from './src/user/cart/Cart';
import Personal from './src/user/personal/Personal';
import Detail from './src/user/detailSP/Detail';
import Pay from './src/user/pay/Pay';
import History from './src/user/history/History';
const Stack = createNativeStackNavigator();
export default function AppBanQuanAo() {
  return (
    <Stack.Navigator initialRouteName="login" screenOptions={{headerShown: false,}}>
      <Stack.Screen name="admin" component={Admin}/>
      <Stack.Screen name="addsp" component={AddSp}/>
       <Stack.Screen name="editsp" component={EditSp}/>
       <Stack.Screen name="login" component={Login}/>
       <Stack.Screen name="register" component={Register}/>
       <Stack.Screen name="home" component={Home}/>
       <Stack.Screen name="category" component={Category}/>
       <Stack.Screen name="cart" component={Cart}/>
       <Stack.Screen name="personal" component={Personal}/>
       <Stack.Screen name="detail" component={Detail}/>
       <Stack.Screen name="pay" component={Pay}/>
       <Stack.Screen name="history" component={History}/>
    </Stack.Navigator>

  );
}

