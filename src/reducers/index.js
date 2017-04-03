import { combineReducers } from 'redux';
import cards from './cards';
import cardForm from './cardForm';
import auth from './auth';

export default combineReducers({
	cards,
	auth,
	cardForm
});