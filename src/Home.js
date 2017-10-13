import React, { Component } from 'react';
import { Text, FlatList } from 'react-native';

class Home extends Component {
  static navigationOptions = {
    headerTitle: 'Store',
    tabBarLabel: 'Home'
  };
  render() {
    return (
      <FlatList
        data={[{ key: 'a' }, { key: 'b' }]}
        renderItem={({ item }) => <Text>{item.key}</Text>}
      />
    );
  }
}

export default Home;
