import React, { Component } from 'react';
import { View, Text, Picker, TextInput } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import {
  idProductChanged,
  colorChanged,
  sizeChanged,
  quantityChanged,
  totalPrice
} from '../Actions';

class BuyForm extends Component {
  onColorChange = text => this.props.colorChanged(text);
  onSizeChange = text => this.props.sizeChanged(text);
  onQuantityChange = number => this.props.quantityChanged(number);
  onTotalChange = number => this.props.totalChanged(number);

  render() {
    return (
      <Card>
        <View>
          <Text>Pilih warna</Text>
          <Picker
            selectedValue={this.props.color}
            onValueChange={itemValue => this.onColorChange(itemValue)}
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
        <View>
          <Text>Pilih Ukuran</Text>
          <Picker
            selectedValue={this.props.size}
            onValueChange={itemValue => this.onSizeChange(itemValue)}
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
        <View>
          <Text>Tentukan Jumlah</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            keyboardType="numeric"
            onChangeText={text => this.onQuantityChange(text)}
            value={this.props.quantity.toString()}
          />
        </View>
        <Text>Harga</Text>
        <Button title="Bayar Sekarang" />
        <Button title="Masukkan Keranjang" />
      </Card>
    );
  }
}

const mapStateToProps = ({ buy }) => {
  const { idProduct, color, size, quantity, total } = buy;

  return { idProduct, color, size, quantity, total };
};

export default connect(mapStateToProps, {
  idProductChanged,
  colorChanged,
  sizeChanged,
  quantityChanged,
  totalPrice
})(BuyForm);
