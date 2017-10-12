import React from 'react';
// import { StyleSheet, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Home from './src/Home';
import Keranjang from './src/Keranjang';
import Suka from './src/Suka';

const Naviagtion = TabNavigator({
  Home: { screen: Home },
  Keranjang: { screen: Keranjang },
  Suka: { screen: Suka }
});

export default class App extends React.Component {
  render() {
    return (
      <Naviagtion />
    );
  }
}
