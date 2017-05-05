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
  userName: 'WagonPenetrator', loadingStatus: 'idle', authView: 'login'
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case TRY_TO_LOGIN:
      return {...state, loadingStatus: 'loading'}
    case LOGIN_SUCCESS:
      return {
        ...state,
        loadingStatus: 'idle',
        isSigned: true, pass: '',
        userID: action.payload.userID,
        authToken: action.payload.authToken}

    case LOGIN_FAIL:
      return {...state, loadingStatus: 'error', errorMsg: action.payload.errorMsg}

    case SWITCH_AUTH_VIEW:
      let newView = state.authView === 'login' ? 'register' : 'login';
      return {...state, authView: newView}

    case UPDATE_AUTH_FORM_INPUT_STATE:
      return {...state, [action.payload.id]: action.payload.newVal}


    case LOGOUT_SUCCESS:
      return {...state, loadingStatus: 'idle', isSigned: false}

    case UPDATE_FORM_STATE_SUCCESS:
      return {...state, [action.payload.id]: action.payload.newVal}

    default:
      return state;
  }
} 