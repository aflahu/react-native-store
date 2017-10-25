import React from 'react';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import LoginForm from '../Components/LoginForm';
import Home from './../Screens/Home';
import Keranjang from './../Screens/Keranjang';
import Suka from './../Screens/Suka';
import Pengaturan from './../Screens/Pengaturan';
import HeaderIcon from '../Components/HeaderIcon';
import DrawerMenu from '../Components/DrawerMenu';

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
  Tab: {
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
  Pengaturan: {
    screen: Pengaturan,
    navigationOptions: {
      title: 'Pengaturan'
    }
  },
  LoginForm: {
    screen: LoginForm,
    navigationOptions: {
      title: 'Login',
    }
  }
});

const Drawer = DrawerNavigator(
  {
    home: {
      screen: Sn,
      navigationOptions: {
        drawerLabel: 'Home'
      }
    },
    Pengaturan: {
      screen: Pengaturan,
      navigationOptions: {
        drawerLabel: 'Pengaturan'
      }
    }
  },
  {
    contentComponent: DrawerMenu
  }
);

export default Drawer;
