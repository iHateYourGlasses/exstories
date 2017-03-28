import {
UPDATE_CARD_FORM_NAME,
UPDATE_CARD_FORM_DESC} from '../constants/CardForm'

import {
CREATE_CARD} from '../constants/Cards'


export function updateNameState(name) {
	return (dispatch) => {
		dispatch({
			type: UPDATE_CARD_FORM_NAME,
			payload: {name: name}
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
export function CreateNewCard(name, desc) {
	return (dispatch) => {
		dispatch({
			type: CREATE_CARD,
			payload: {name: name, desc: desc}
		});
	}
}