import React from 'react';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import Home from './../Screens/Home';
import Keranjang from './../Screens/Keranjang';
import Suka from './../Screens/Suka';
import Pengaturan from './../Screens/Pengaturan';
import Menu from '../Components/Menu';
import Search from '../Components/Search';

const Tab = TabNavigator(
  {
    Home: {
      screen: Home
    },
    Keranjang: {
      screen: Keranjang
    },
    Suka: {
      screen: Suka
    }
  },
  {
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'white'
      },
      labelStyle: {
        fontSize: 12
      },
      indicatorStyle: {
        backgroundColor: 'black'
      }
    }
  }
);

const Sn = StackNavigator({
  tab: {
    screen: Tab,
    navigationOptions: ({ navigation }) => ({
      title: 'Store',
      headerStyle: {
        backgroundColor: 'white',
        paddingTop: 22,
        elevation: 0,
        paddingLeft: 15,
        paddingRight: 15
      },
      headerTitleStyle: {
        alignSelf: 'center'
      },
      headerLeft: <Menu navigation={navigation} />,
      headerRight: <Search />
    })
  },
  pengaturan: {
    screen: Pengaturan,
    navigationOptions: {
      title: 'Pengaturan'
    }
  }
});

const Drawer = DrawerNavigator({
  home: {
    screen: Sn,
    navigationOptions: {
      drawerLabel: 'Home'
    }
  },
  pengaturan: {
    screen: Pengaturan,
    navigationOptions: {
      drawerLabel: 'Pengaturan'
    }
  }
});

export default Drawer;
