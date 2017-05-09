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

    axios.post(pathSwitch()+'api/stories/get', {
    })
        .then(function (response) {
          console.log(response);
        /*  let reqStatus = response.data.status;
          switch (reqStatus){
            case true:
              dispatch({
                type: CREATE_STORY_SUCCESS,
                payload: {newStoryId: response.data.story_id}
              });
              break;
            case false:
              dispatch({
                type: CREATE_STORY_ERROR,
                payload: {errorMsg: response.data.error_msg}
              });
              break;
          }
          setTimeout(function() {
            dispatch({
              type: CREATE_STORY_RESET_STATUS,
              payload: {errorMsg: response.data.error_msg}
            });
          }, 2000)
*/
        })
        .catch(function (error) {
          console.log(error);
        });
  }
}