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
        paddingVertical: 20,
    },
    title: {
        fontSize: 35,
        color: '#FF7F09',
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
    },
    // menuIcon: {
    //     position: 'absolute',
    //     right: 20,

    // },
    buttonText: {
        fontSize: 16,
        
    },
    button: {
        position: 'absolute',
        right: 20,
        backgroundColor: '#90D26D',
        padding: 4,
        paddingHorizontal: 10,
        borderRadius: 10,
        alignItems: 'center',
        bottom: -16,

    },
    body: {
        flex: 9,
        paddingTop: 20,
    },
    listSP: {
        paddingHorizontal: 10,
    },
    spItem: {
        flexDirection: 'row',
    },
    item: {
        backgroundColor: '#FFAA46',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        width: 340
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
    check: {
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
    // đổi màu khi đè vào item
    selectedItem: {
        backgroundColor: '#FF7D29',
    },
});

export default styles;
