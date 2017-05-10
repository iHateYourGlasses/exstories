import {
  GET_CARDS_REQUEST,
  GET_CARDS_SUCCESS,
  GET_CARDS_ERROR
} from '../constants/Stories'
import axios from 'axios';
import pathSwitch from '../misc/pathSwitcher'


export function GetCards() {
  return (dispatch) => {
    dispatch({
      type: GET_CARDS_REQUEST,
      payload: {}
    });

    axios.get(pathSwitch()+'api/stories/get', {
    })
        .then(function (response) {
          console.log(response);
          let reqStatus = response.data.status;
          switch (reqStatus){
            case true:
              dispatch({
                type: GET_CARDS_SUCCESS,
                payload: {stories: response.data.stories}
              });
              break;
            case false:
              dispatch({
                type: GET_CARDS_ERROR,
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