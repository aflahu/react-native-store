import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, Divider } from 'react-native-elements';

class Keranjang extends Component {
  render() {
    return (
      <Card>
        <Text>disini item yang mau dibeli</Text>
        <Divider />
        <Text>disini detile harga</Text>
      </Card>
    );
  }
}

export default Keranjang;
