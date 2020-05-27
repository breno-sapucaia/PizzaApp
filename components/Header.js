import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faSearch, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import {fontColor} from './../utils/utils'

const width = Dimensions.get('window').width;

const Header = (props) => {
    return (
        <View style={styles.container}>
            <FontAwesomeIcon icon={faBars} size={24} color={fontColor}/>
            <Text style={{...styles.font, }}>
                Pizza Oven
            </Text>
            <View style={styles.options}>
                <FontAwesomeIcon icon={faSearch} size={24} color={fontColor}/>
                <FontAwesomeIcon icon={faSuitcase} size={24} style={{marginLeft:10}} color={fontColor} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width,
        height: 64,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingHorizontal: 8,
    },
    font: {
        fontSize: 26,
        fontWeight: "bold",
        color:fontColor
    },
    options: {
        flexDirection:"row",
    }
})
export { Header }