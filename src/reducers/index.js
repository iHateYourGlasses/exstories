import { combineReducers } from 'redux';
import stories from './stories';
import cardForm from './newstoryform';
import auth from './auth';
import userpage from './myuserpage';
import user from './userpage';
import fullstory from './fullstory';

export default combineReducers({
	stories,
  fullstory,
	auth,
	cardForm,
  userpage,
	user
});