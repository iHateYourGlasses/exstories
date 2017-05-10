import {
  TRY_TO_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  UPDATE_AUTH_FORM_INPUT_STATE,
  SWITCH_AUTH_VIEW
} from '../constants/Auth'
import axios from 'axios';
import pathSwitch from '../misc/pathSwitcher'

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

    axios.post(pathSwitch()+'api/users/get', {
      mail: mail,
      pass: pass
    })
    .then(function (response) {
      let reqStatus = response.data.status;
      switch (reqStatus){
        case true:
          dispatch({
            type: LOGIN_SUCCESS,
            payload: {authToken: response.data.token, userID: response.data.id, userName: response.data.user_name, user_confirmed: response.data.user_confirmed}
          });
          break;
        case false:
          dispatch({
            type: LOGIN_FAIL,
            payload: {errorMsg: response.data.error_msg}
          });
          break;
        default:
          console.log(reqStatus);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

export function register(mail, username, pass) {

  return (dispatch) => {
    dispatch({
      type: TRY_TO_LOGIN,
      payload: {}
    });

    axios.post(pathSwitch()+'api/users/add', {
      mail: mail,
      username: username,
      pass: pass
    })
    .then(function (response) {
      let reqStatus = response.data.status;
      switch (reqStatus){
        case true:
          dispatch({
            type: LOGIN_SUCCESS,
            payload: {authToken: response.data.token, userID: response.data.userID, user_confirmed: response.data.user_confirmed}
          });
          break;
        case false:
          dispatch({
            type: LOGIN_FAIL,
            payload: {errorMsg: response.data.error_msg}
          });
          break;
        default:
          console.log(reqStatus);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
