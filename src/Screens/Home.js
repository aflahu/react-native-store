import React, { Component } from 'react';
import { FlatList } from 'react-native';
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
  render() {
    return <FlatList data={Data} renderItem={({ item }) => <Kartu item={item} />} />;
  }
}

export default Home;
