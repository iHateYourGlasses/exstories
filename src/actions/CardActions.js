import {
  DELETE_CARD
} from '../constants/Stories'

export function deleteCard(id = false) {
  return (dispatch) => {
    dispatch({
      type: DELETE_CARD,
      payload: {id: id}
    });
  }
}