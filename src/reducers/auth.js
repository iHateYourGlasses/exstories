import {
  TRY_TO_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  UPDATE_AUTH_FORM_INPUT_STATE,
  SWITCH_AUTH_VIEW
} from '../constants/Auth'
import {
  LOGOUT_SUCCESS,
  UPDATE_FORM_STATE_SUCCESS
} from '../constants/MyUserPage'

const initialState = {
  mail: 'test@mail.ru', pass: '', isSigned: false,
  userName: 'WagonPenetrator', isLoading: false, authView: 'login'
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case TRY_TO_LOGIN:
      return {...state, isLoading: true}
    case LOGIN_SUCCESS:
      return {...state, isLoading: false, isSigned: true}
    case LOGIN_FAIL:
      return {...state, isLoading: false}

    case SWITCH_AUTH_VIEW:
      let newView = state.authView === 'login' ? 'register' : 'login';
      return {...state, authView: newView}

    case UPDATE_AUTH_FORM_INPUT_STATE:
      return {...state, [action.payload.id]: action.payload.newVal}


    case LOGOUT_SUCCESS:
      return {...state, isLoading: false, isSigned: false}

    case UPDATE_FORM_STATE_SUCCESS:
      return {...state, [action.payload.id]: action.payload.newVal}

    default:
      return state;
  }
} 