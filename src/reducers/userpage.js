import {
  USER_GET_DATA_SUCCESS,
  USER_GET_DATA_FAIL,
  USER_CLEAR_DATA
} from '../constants/UserPage'

const initialState = {
  status: 'loading'
};

export default function user(state = initialState, action) {
  switch (action.type) {

    case USER_GET_DATA_SUCCESS:
      return {status: 'loaded', ...action.payload}

    case USER_GET_DATA_FAIL:
      return {status: 'error'}
    case USER_CLEAR_DATA:
      return initialState

    default:
      return state;
  }
}