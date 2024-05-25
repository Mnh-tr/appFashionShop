import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        backgroundColor: "#FF9C08",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'space-around',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    iconAdmin: {
        fontSize: 48,
        color: '#5DEBD7'
    },
    footer_admin: {
        fontSize: 10,
        marginLeft: 4
    },
    cartItemCountContainer: {
        position: 'absolute',
        right: 0,
        top: 0,
        backgroundColor: 'red',
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cartItemCountText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold'
    }
});

export default styles;
