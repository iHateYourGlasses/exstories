import { combineReducers } from 'redux';
import stories from './stories';
import cardForm from './cardForm';
import auth from './auth';
import userpage from './userpage';

export default combineReducers({
	stories,
	auth,
	cardForm,
  userpage
});