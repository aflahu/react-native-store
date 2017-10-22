import React, { Component } from 'react';
import { Text, View } from 'react-native';

class IsiKiriKartu extends Component {
  render() {
    return (
      <View style={this.props.style}>
        <Text>Rp.{this.props.harga}</Text>
        <Text>{this.props.nama}</Text>
      </View>
    );
  }
}
export default IsiKiriKartu;
