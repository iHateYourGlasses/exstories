import {
DELETE_CARD} from '../constants/Cards'

export function deleteCard(id=false) {
	return (dispatch) => {
		dispatch({
			type: DELETE_CARD,
			payload: {id: id}
		});
	}
}