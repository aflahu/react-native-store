import React, { Component } from 'react';
import { Text, View } from 'react-native';

class IsiKiriKartu extends Component {
  render(props) {
    return (
      <View style={this.props.style}>
        <Text>Rp.20.000</Text>
        <Text>Ini adalah Judul dari produk</Text>
      </View>
    );
  }
}
export default IsiKiriKartu;
