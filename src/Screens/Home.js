import React, { Component } from 'react';
import { Text, FlatList } from 'react-native';
import Kartu from '../Components/Kartu';

class Home extends Component {
  render() {
    return (
      <FlatList
        data={[{ key: 'a' }, { key: 'b' }]}
        renderItem={({ item }) => <Kartu />}
      />
    );
  }
}

export default Home;
