import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/Reducer';
import Drawer from './src/Config/Router';

export default class App extends React.Component {
  componentWillUpdate() {
    const config = {
      apiKey: 'AIzaSyBAmueJS2yaHDruUkE_4_xZfvcarbqBlzw',
      authDomain: 'react-native-store.firebaseapp.com',
      databaseURL: 'https://react-native-store.firebaseio.com',
      projectId: 'react-native-store',
      storageBucket: 'react-native-store.appspot.com',
      messagingSenderId: '26234986880'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Drawer />
      </Provider>
    );
  }
}
