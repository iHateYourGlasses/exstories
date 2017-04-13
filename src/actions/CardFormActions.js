import {
  UPDATE_CARD_FORM_NAME,
  UPDATE_CARD_FORM_DESC
} from '../constants/CardForm'

import {
  CREATE_CARD
} from '../constants/Cards'


export function updateNameState(name) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_CARD_FORM_NAME,
      payload: {title: name}
    });
  }
}
export function updateDescState(desc) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_CARD_FORM_DESC,
      payload: {desc: desc}
    });
  }
}
export function CreateNewCard(id, title, desc) {
  return (dispatch) => {
    dispatch({
      type: CREATE_CARD,
      payload: {id: id, title: title, desc: desc}
    });
  }
}