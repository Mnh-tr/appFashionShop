import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCC99',
    
    paddingTop: 50,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  body: {
    alignItems: 'center',
    marginBottom: 170
  },
  thongTinCaNhan:{
    width: '80%',
    backgroundColor: '#FF9933',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'flex-start',
    alignItems: 'center',
  },
  
  info: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    width: '80%',
    backgroundColor: '#FF9933',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    marginLeft: 10,
  },
  footer: {
    width: '100%',
    backgroundColor: '#FF9C08',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingVertical: 10,
  },
  iconfooter: {
    alignItems: 'center',
  },
  iconAdmin: {
    fontSize: 30,
    color: '#5DEBD7',
  },
  footer_admin: {
    fontSize: 10,
    marginTop: 4,
  },
});

export default styles;
