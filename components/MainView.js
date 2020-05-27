import React, { useState } from 'react';
import { FetchPizza } from '../utils/utils';
import { FlatList, View, Text } from 'react-native';
import CategoryView from './CategoryView';


class MainView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: null }
    }

    handleData() {
        this.setState({ loading: true }, async () => {
            const data = await FetchPizza()
            console.log(data)
            this.setState({ data, loading: false })
        })
    }

    componentDidMount() {
        this.handleData()
    }

    render() {
        return (
            <View style={{flex:1}}>
                
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) =>
                    
                        <CategoryView
                            name={item.name}
                            pizzas={item.pizzas}
                        />
                    }
                /> 
            </View>
        );
    }
}

export default MainView;