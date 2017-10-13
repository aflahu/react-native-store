import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import { Card, Button } from 'react-native-elements';

class Kartu extends Component {
  render() {
    return (
      <Card image={{ uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' }}>
        <Text>Ini judul panjang dari produk</Text>
        <Button title='Beli' />
      </Card>
    );
  }
}
export default Kartu;
