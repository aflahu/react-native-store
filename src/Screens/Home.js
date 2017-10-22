import React, { Component } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import Modal from 'react-native-modal';
import Kartu from '../Components/Kartu';

const Data = [
  {
    key: 'a',
    nama: 'produk a',
    harga: 20000,
    suka: 2000,
    deskripsi: 'sunt dolores recusandae'
  },
  {
    key: 'b',
    nama: 'produk b',
    harga: 10000,
    suka: 1000,
    deskripsi: 'sunt dolores recusandae'
  },
  {
    key: 'c',
    nama: 'produk c',
    harga: 20000,
    suka: 2000,
    deskripsi: 'sunt dolores recusandae'
  },
  {
    key: 'd',
    nama: 'produk d',
    harga: 10000,
    suka: 1000,
    deskripsi: 'sunt dolores recusandae'
  }
];

class Home extends Component {
  state = {
    isModalVisible: false
  };

  _showModal = () => this.setState({ isModalVisible: true });

  _hideModal = () => this.setState({ isModalVisible: false });

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList data={Data} renderItem={({ item }) => <Kartu item={item} />} />
        <Button title="Tampilkan Modal" onPress={this._showModal} />
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={this._hideModal}>
              <Text>Hello!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

export default Home;
