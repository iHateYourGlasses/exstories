import {
  TRY_TO_LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  UPDATE_USERPAGE_FORM_INPUT_STATE,
  TRY_TO_UPDATE_FORM_STATE,
  UPDATE_FORM_STATE_SUCCESS,
  UPDATE_FORM_STATE_FAIL
} from '../constants/UserPage'

export function logout() {
  return (dispatch) => {
    dispatch({
      type: TRY_TO_LOGOUT,
      payload: {}
    });

    setTimeout(() => {
      if (Math.random() > 0.1) {
        dispatch({
          type: LOGOUT_SUCCESS,
          payload: {}
        })
      }
      else {
        dispatch({
          type: LOGOUT_FAIL,
          payload: {}
        })
      }
    }, 300)
  }
}

export function updateUserData(id, newVal) {
  return (dispatch) => {
    dispatch({
      type: TRY_TO_UPDATE_FORM_STATE,
      payload: {id}
    });

    setTimeout(() => {
      if (Math.random() > 0.1) {
        dispatch({
          type: UPDATE_FORM_STATE_SUCCESS,
          payload: {id, newVal}
        })
      }
      else {
        dispatch({
          type: UPDATE_FORM_STATE_FAIL,
          payload: {id}
        })
      }
    }, 300)
  }
}

export function updateFormInputState(id, newVal) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_USERPAGE_FORM_INPUT_STATE,
      payload: {id: id, newVal: newVal}
    });
  }
}