import React from 'react';
// import { StyleSheet, View } from 'react-native';
import { TabNavigator, DrawerNavigator } from 'react-navigation';
import Home from './src/Home';
import Keranjang from './src/Keranjang';
import Suka from './src/Suka';
import Pengaturan from './src/Pengaturan';

const Tab = TabNavigator({
  Home: { screen: Home },
  Keranjang: { screen: Keranjang },
  Suka: { screen: Suka }
});

const Drawer = DrawerNavigator({
  tab: { screen: Tab },
  pengaturan: { screen: Pengaturan }
});

export default class App extends React.Component {
  render() {
    return <Drawer />;
  }
}
