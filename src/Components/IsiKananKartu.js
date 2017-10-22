import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

class IsiKananKartu extends Component {
  render() {
    return (
      <View style={this.props.style}>
        <Icon name="heart" type="evilicon" />
        <Text style={{ textAlign: 'center' }}>{this.props.suka}</Text>
      </View>
    );
  }
}
export default IsiKananKartu;
