import React from 'react';
import { StyleSheet, View, Dimensions, Image, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { fontColor, toReal } from '../utils/utils';

const Card = ({ img, name, desc, price }) => {

    return (
        <View style={styles.container}>
            <Image source={{ uri: `${img}` }} style={styles.image}></Image>
            <View style={styles.body}>
                <Text style={{ paddingTop: 16, fontSize: 16, fontWeight: 'bold' }}>{name}</Text>
                <Text>{desc}</Text>
                <View style={styles.subBody}>
                    <Text>{toReal(price)}</Text>
                    <View style={{ ...styles.addToCart }}><FontAwesomeIcon style={{ color: '#fff' }} icon={faPlus} /></View>
                </View>
            </View>
        </View>
    );
}

const width = Dimensions.get('screen').width

const pizzawidth = (width / 2);

const styles = StyleSheet.create({
    container: {
        width: width - 18,
        alignItems: 'center',
        backgroundColor: "#ffffff",
        marginRight: 16,
        marginHorizontal:8,
        flexDirection: 'row',
        borderRadius: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        marginTop:25,
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        height:200,
        elevation: 15,
    },
    body: {
        color: fontColor,
        flex: 1,
        justifyContent: "space-between",

        height: "100%"
    },
    image: {
        width: pizzawidth,
        height: 200,
        borderRadius: 50
    },
    subBody: {
        flexDirection: 'row',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    addToCart: {
        padding: 12,
        borderRadius: 50,
        marginRight: 18,
        backgroundColor: fontColor
    }
});

export default Card;