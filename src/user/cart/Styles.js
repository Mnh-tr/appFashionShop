import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFD6A5",
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 10,
    },
    title: {
        fontSize: 35,
        color: '#FF7F09',
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
    },
    menuIcon: {
        position: 'absolute',
        right: 20,

    },
    body: {
        flex: 9,
        paddingTop: 10,
    },
    listSP: {
        paddingHorizontal: 10,
    },
    spItem:{
        flexDirection: 'row',
    },
    item: {
        backgroundColor: '#FFAA46',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        width: 370
    },
    avatar: {
        width: 89,
        height: 96,
        marginRight: 10,
    },
    sp: {
        flex: 3,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 15,
    },
    des: {
        fontSize: 11,
    },
    check:{
        alignItems: "center",
        marginLeft: 14,
        justifyContent: "center",
        
    },
    checkbox: {
       fontSize: 22
    },
    

    
    rightAction: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: 75,
    },
    actionText: {
        color: 'white',
        fontWeight: 'bold',
        padding: 10,
    },
});

export default styles;
