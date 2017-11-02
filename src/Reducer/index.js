import { combineReducers } from 'redux';
import AuthReducers from './AuthReducers';
import BuyReducers from './BuyReducers';
import BasketReducers from './BasketReducers';

export default combineReducers({ auth: AuthReducers, buy: BuyReducers, basket: BasketReducers });
