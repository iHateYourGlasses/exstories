import { combineReducers } from 'redux';
import cards from './cards';
import cardForm from './cardForm';
import auth from './auth';
import userpage from './userpage';

export default combineReducers({
	cards,
	auth,
	cardForm,
    userpage
});