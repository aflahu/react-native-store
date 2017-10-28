import { combineReducers } from 'redux';
import AuthReducers from './AuthReducers';
import BuyReducers from './BuyReducers';

export default combineReducers({ auth: AuthReducers, buy: BuyReducers });
