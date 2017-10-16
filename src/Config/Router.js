import React from 'react';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import Home from './../Screens/Home';
import Keranjang from './../Screens/Keranjang';
import Suka from './../Screens/Suka';
import Pengaturan from './../Screens/Pengaturan';
import HeaderIcon from '../Components/HeaderIcon';

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
        backgroundColor: 'white',
        height: 45
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
        paddingTop: 25,
        elevation: 0
      },
      headerTitleStyle: {
        alignSelf: 'center'
      },
      headerLeft: <HeaderIcon name="ios-menu-outline" type="ionicon" navigation={navigation} />,
      headerRight: (
        <HeaderIcon name="ios-chatbubbles-outline" type="ionicon" navigation={navigation} />
      )
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
