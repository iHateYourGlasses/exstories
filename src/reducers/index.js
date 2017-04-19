import { combineReducers } from 'redux';
import stories from './stories';
import cardForm from './newstoryform';
import auth from './auth';
import userpage from './myuserpage';

export default combineReducers({
	stories,
	auth,
	cardForm,
  userpage
});