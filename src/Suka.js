import React, { Component } from 'react';
import { Text } from 'react-native';

class Suka extends Component {
  static navigationOptions = {
    headerTitle: 'Store',
    tabBarLabel: 'Suka'
  };
  render() {
    return <Text>This is Suka</Text>;
  }
}

export default Suka;
