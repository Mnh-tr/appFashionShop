import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFD6A5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    userItem: {
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '90%',
        alignSelf: 'center',
    },
    userInfo: {
        width: 300
       
        
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
        width: '100%',
        marginBottom: 5,
    },
    userEmail: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
        width: '100%',
        fontWeight: 'bold',
    },
    userRole: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
        width: '100%',
        fontWeight: 'bold',
    },
    rolePicker: {
        position: 'absolute',
        width: 150,
        height: 40,
        top: 32,
        left: 50
    },
    updateButton: {
        paddingVertical: 5,
        borderRadius: 5,
        backgroundColor: '#28a745',
        marginVertical: 10,
        width: 120,
        marginHorizontal: "25%"
        
    },
    updateButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    },
});

export default styles;
