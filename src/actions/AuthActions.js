import {
  TRY_TO_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  UPDATE_AUTH_FORM_INPUT_STATE,
  SWITCH_AUTH_VIEW
} from '../constants/Auth'

export function updateFormInputState(id, newVal) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_AUTH_FORM_INPUT_STATE,
      payload: {id: id, newVal: newVal}
    });
  }
}

export function switchAuthView() {
  return (dispatch) => {
    dispatch({
      type: SWITCH_AUTH_VIEW,
      payload: {}
    });
  }
}

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
    }, 400)
  }
}
