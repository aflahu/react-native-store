import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, Button, Divider } from 'react-native-elements';
import IsiKiriKartu from './IsiKiriKartu';
import IsiKananKartu from './IsiKananKartu';

class Kartu extends Component {
  render() {
    return (
      <Card image={{ uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' }}>
        <View style={styles.content}>
          <IsiKiriKartu style={styles.kiri} />
          <IsiKananKartu style={styles.kanan} />
        </View>
        <Divider style={{ marginBottom: 10, marginTop: 10, backgroundColor: 'grey' }} />
        <Button title="Beli" />
      </Card>
    );
  }
}

const styles = {
  content: {
    flexDirection: 'row'
  },
  kiri: {
    flex: 4
  },
  kanan: {
    flex: 1
  }
};
export default Kartu;
