import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, Divider, Button } from 'react-native-elements';

class Keranjang extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Card>
          <Text>disini item yang mau dibeli</Text>
          <Divider />
          <Text>disini detile harga</Text>
        </Card>
        <Card style={styles.cardBottom}>
          <Button title="Bayar Sekarang" />
        </Card>
      </View>
    );
  }
}

const styles = {
  cardBottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    marginBottom: 13
  }
};

export default Keranjang;
