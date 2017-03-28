import { combineReducers } from 'redux';
import cards from './cards';
import cardForm from './cardForm';

export default combineReducers({
	cards,
	cardForm
});