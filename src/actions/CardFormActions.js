import {
  UPDATE_CARD_FORM_INPUT_STATE,
  CREATE_STORY_REQUEST,
  CREATE_STORY_SUCCESS,
  CREATE_STORY_ERROR,
  CREATE_STORY_RESET_STATUS
} from '../constants/NewStoryForm'
import axios from 'axios';
import pathSwitch from '../misc/pathSwitcher'


export function updateFormInputState(id, newVal) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_CARD_FORM_INPUT_STATE,
      payload: {id: id,newVal: newVal,}
    });
  }
}

export function CreateNewCard(storyData, authData) {
  return (dispatch) => {
    dispatch({
      type: CREATE_STORY_REQUEST,
      payload: {}
    });

    axios.post(pathSwitch()+'api/stories/add', {
      storyData: storyData,
      authData: authData
    })
        .then(function (response) {
          console.log(response);
          let reqStatus = response.data.status;
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
            default:
              console.log(reqStatus);
          }
          setTimeout(function() {
            dispatch({
              type: CREATE_STORY_RESET_STATUS,
              payload: {errorMsg: response.data.error_msg}
            });
          }, 2000)

        })
        .catch(function (error) {
          console.log(error);
        });
  }
}