import {
  USER_GET_DATA_REQUEST,
  USER_GET_DATA_SUCCESS,
  USER_GET_DATA_FAIL,
  USER_CLEAR_DATA
} from '../constants/UserPage'
import axios from 'axios';
import pathSwitch from '../misc/pathSwitcher'

export function getUserData(id) {
  return (dispatch) => {

    dispatch({
      type: USER_GET_DATA_REQUEST,
      payload: {}
    });

    axios.get(pathSwitch()+'api/user/'+id+'/', {
    }).then(function (response) {
      let reqStatus = response.data.status;
      switch (reqStatus){
        case true:
          dispatch({
            type: USER_GET_DATA_SUCCESS,
            payload: {userData: response.data.user}
          });
          break;
        case false:
          dispatch({
            type: USER_GET_DATA_FAIL,
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

export function clearUserData() {
  return (dispatch) => {
        dispatch({
          type: USER_CLEAR_DATA,
          payload: {}
        })
  }
}
