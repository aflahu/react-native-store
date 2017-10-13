import React, { Component } from 'react';
import { Text } from 'react-native';

class Home extends Component {
  static navigationOptions = {
    headerTitle: 'Store',
    tabBarLabel: 'Home'
  };
  render() {
    return <Text>This is home</Text>;
  }
}

export default Home;
