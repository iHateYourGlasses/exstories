import {
  TRY_TO_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  UPDATE_NAME_STATE,
  UPDATE_MAIL_STATE,
  UPDATE_PASS_STATE
} from '../constants/Auth'

export function login(mail, pass) {
  return (dispatch) => {
    dispatch({
      type: TRY_TO_LOGIN,
      payload: {}
    });

    setTimeout(() => {
      if (Math.random() > 0.1) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {}
        })
      }
      else {
        dispatch({
          type: LOGIN_FAIL,
          payload: {}
        })
      }
    }, 600)
  }
}

export function updateNameState(name) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_NAME_STATE,
      payload: {name: name}
    });
  }
}
export function updatePassState(pass) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_PASS_STATE,
      payload: {pass: pass}
    });
  }
}
export function updateMailState(mail) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_MAIL_STATE,
      payload: {mail: mail}
    });
  }
}