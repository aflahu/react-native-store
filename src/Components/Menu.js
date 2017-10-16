import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const Menu = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
        <Icon name="ios-menu-outline" type="ionicon" />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  menu: {
    backgroundColor: 'red'
  }
};
export default Menu;
