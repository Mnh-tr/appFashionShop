import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import AppBanQuanAo from './AppBanQuanAo';
import {NavigationContainer} from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export default function App() {
  return (
    
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
      
      <AppBanQuanAo/>
    </NavigationContainer>
  </GestureHandlerRootView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
