import {
  GET_SINGLE_STORY_REQUEST,
  GET_SINGLE_STORY_SUCCESS,
  GET_SINGLE_STORY_ERROR
} from '../constants/FullStory'

import axios from 'axios';
import pathSwitch from '../misc/pathSwitcher'


export function GetStoryData(storyID) {
  return (dispatch) => {
    dispatch({
      type: GET_SINGLE_STORY_REQUEST,
      payload: {}
    });

    axios.get(pathSwitch() + 'api/story/'+storyID+'/', {})
        .then(function (response) {
          console.log(response);
          let reqStatus = response.data.status;
          switch (reqStatus) {
            case true:
              dispatch({
                type: GET_SINGLE_STORY_SUCCESS,
                payload: {data: response.data.story}
              });
              break;
            case false:
              dispatch({
                type: GET_SINGLE_STORY_ERROR,
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