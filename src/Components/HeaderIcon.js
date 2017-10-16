import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const HeaderIcon = ({ navigation, name, type }) => {
  return (
    <View style={styles.HeaderIcon}>
      <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
        <Icon name={name} type={type} />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  HeaderIcon: {
    width: 50
  }
};
export default HeaderIcon;
