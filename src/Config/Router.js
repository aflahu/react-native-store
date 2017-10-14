import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import Home from './../Screens/Home';
import Keranjang from './../Screens/Keranjang';
import Suka from './../Screens/Suka';
import Pengaturan from './../Screens/Pengaturan';

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
    navigationOptions: {
      title: 'Store',
      headerStyle: {
        backgroundColor: 'white',
        paddingTop: 17,
        elevation: 0
      },
    }
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
