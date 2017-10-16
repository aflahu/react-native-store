import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

const Search = () => {
  return (
    <View>
      <Icon name="ios-chatbubbles-outline" type="ionicon" />
    </View>
  );
};

const styles = {
  search: {
    backgroundColor: 'red'
  }
};
export default Search;
