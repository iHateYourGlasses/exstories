import {
  GET_SINGLE_STORY_REQUEST,
  GET_SINGLE_STORY_SUCCESS,
  GET_SINGLE_STORY_ERROR
} from '../constants/FullStory'

const initialState = {
  loadingStatus: 'loading'
};

export default function fullstory(state = initialState, action) {
  switch (action.type) {

    case GET_SINGLE_STORY_REQUEST:
      return {...state, loadingStatus: 'loading'}

    case GET_SINGLE_STORY_SUCCESS:
      return {...state, loadingStatus: 'idle', ...action.payload.data}

    case GET_SINGLE_STORY_ERROR:
      return {...state, loadingStatus: 'error', errorMsg: action.payload.errorMsg}

    default:
      return state;
  }
}