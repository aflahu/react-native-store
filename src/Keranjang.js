import React, { Component } from 'react';
import { Text } from 'react-native';

class Keranjang extends Component {
  static navigationOptions = {
    headerTitle: 'Store',
    tabBarLabel: 'Keranjang'
  };
  render() {
    return <Text>This is Keranjang</Text>;
  }
}

export default Keranjang;
