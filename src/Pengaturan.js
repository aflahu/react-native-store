import React, { Component } from 'react';
import { Text } from 'react-native';

class Pengaturan extends Component {
  static navigationOptions = {
    title: 'Pengaturan',
    drawerLabel: 'Pengaturan'
  };
  render() {
    return <Text>This is Pengaturan</Text>;
  }
}

export default Pengaturan;
