import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DrawerNavigator from './Navigation/DrawerNavigator';
import TabNavigator from './Navigation/TabNavigator'


export default class App extends Component {
  render(){
  return (
   <View></View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
