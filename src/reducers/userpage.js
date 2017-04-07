import {
  TRY_TO_LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  UPDATE_USERPAGE_FORM_INPUT_STATE,
  TRY_TO_UPDATE_FORM_STATE,
  UPDATE_FORM_STATE_SUCCESS,
  UPDATE_FORM_STATE_FAIL
} from '../constants/UserPage'

const initialState = {};

export default function userpage(state = initialState, action) {
  switch (action.type) {
    case TRY_TO_LOGOUT:
      return {...state, isLoading: true}
    case LOGOUT_SUCCESS:
      return {...state, isLoading: false, isSigned: false}
    case LOGOUT_FAIL:
      return {...state, isLoading: false}

    case UPDATE_USERPAGE_FORM_INPUT_STATE:
      return {...state, [action.payload.id]: action.payload.newVal, [action.payload.id + '_status']: 'edit'}

    case TRY_TO_UPDATE_FORM_STATE:
      return {...state, [action.payload.id + '_status']: 'btn-warning'}

    case UPDATE_FORM_STATE_SUCCESS:
      return {...state, [action.payload.id + '_status']: 'btn-success'}

    case UPDATE_FORM_STATE_FAIL:
      return {...state, [action.payload.id + '_status']: 'btn-danger'}

    default:
      return state;
  }
} 