import React, {useState} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import styles from './Styles'
import { MaterialIcons } from '@expo/vector-icons';

const Footer = () =>{
    
    return (
        <View style={styles.footer}>
            <MaterialIcons name="admin-panel-settings" style={styles.iconAdmin} />
            <Text style={styles.footer_admin}>Admin</Text>
        </View>
    )
}
export default Footer;