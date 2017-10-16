import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Kartu from '../Components/Kartu';

class Suka extends Component {
  render() {
    return (
      <View>
        <Text>Kesukaan Sista</Text>
        <Kartu />
      </View>
    );
  }
}

export default Suka;
