import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    adminDashboard: {
      textAlign: 'center',
      color: 'white',
      backgroundColor: 'blue',
      padding: 10,
    },
  });

export default styles;
