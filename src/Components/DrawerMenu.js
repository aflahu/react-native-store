import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { View } from 'react-native';
import { DrawerItems } from 'react-navigation';

class DrawerMenu extends Component {
  render() {
    return (
      <View>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('LoginForm')}
        />
        <DrawerItems {...this.props} />
      </View>
    );
  }
}
export default DrawerMenu;
