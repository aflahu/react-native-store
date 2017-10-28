import React, { Component } from 'react';
import { View, Text, Picker, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

class BuyForm extends Component {
  render() {
    return (
      <View>
        <View>
          <Text>Pilih warna</Text>
          <Picker
            selectedValue={this.state.language}
            onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
        <View>
          <Text>Pilih warna</Text>
          <Picker
            selectedValue={this.state.language}
            onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
        <View>
          <Text>Pilih warna</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
        </View>
        <Text>Harga</Text>
        <Button title="Bayar Sekarang" />
        <Button title="Masukkan Keranjang" />
      </View>
    );
  }
}

export default BuyForm;
