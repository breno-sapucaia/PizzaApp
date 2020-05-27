import React from 'react';
import { Text, View, FlatList, Dimensions, StyleSheet, ImageBackground } from 'react-native';
import Card from './Card';
import { fontColor } from './../utils/utils'
const CategoryView = (props) => {
    console.log(props)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.name}</Text>
            <FlatList
                style={styles.list}
                data={props.pizzas}
                horizontal={true}
                renderItem={({ item }) => 
                <Card
                    img={item.img}
                    name={item.name}
                    desc={item.description}
                    price={item.price}
                />
                }
            />
        </View>

    );
}
const width = Dimensions.get('screen').width
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginHorizontal: 8,
        
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: fontColor,
        marginLeft:8
    },
    list:{
        height:250,
     
    }
});

export default CategoryView;