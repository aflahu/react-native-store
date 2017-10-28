import React, { Component } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import Modal from 'react-native-modal';
import { showModalChanged } from '../Actions';
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
  onToggleModal = () => this.props.showModalChanged(!this.props.showModal);

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={Data}
          renderItem={({ item }) => <Kartu item={item} onToggleModal={this.onToggleModal} />}
        />
        <Modal isVisible={this.props.showModal}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={this.onToggleModal}>
              <Text>Hello!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = ({ buy }) => {
  const { showModal } = buy;
  return { showModal };
};

export default connect(mapStateToProps, { showModalChanged })(Home);
