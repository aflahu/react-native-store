import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Modal from 'react-native-modal';
import { showModalChanged, resetForm } from '../Actions';
import Kartu from '../Components/Kartu';
import BuyForm from '../Components/BuyForm';

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
  onToggleModal = () => {
    if (!this.props.showModal) {
      this.props.resetForm();
    }
    this.props.showModalChanged(!this.props.showModal);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={Data}
          renderItem={({ item }) => <Kartu item={item} onToggleModal={this.onToggleModal} />}
        />
        <Modal
          isVisible={this.props.showModal}
          onBackdropPress={this.onToggleModal}
          onBackButtonPress={this.onToggleModal}
        >
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <BuyForm />
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

export default connect(mapStateToProps, { showModalChanged, resetForm })(Home);
