import React from 'react';
import {
  StyleSheet,
  StatusBar,
  Dimensions,
  View
} from 'react-native';
import  { Header }  from './components/Header';
import Card from './components/Card';
import MainView from './components/MainView';
const fontColor = '#D02608';
const width = Dimensions.get('window').width;
const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
      <Header width={width}/>
      <MainView/>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height:"100%",
    backgroundColor:"#f6f6f6"
  }
});

export default App;
