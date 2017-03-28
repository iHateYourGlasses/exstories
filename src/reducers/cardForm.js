import {
UPDATE_CARD_FORM_NAME,
UPDATE_CARD_FORM_DESC} from '../constants/CardForm'

const initialState = {name: 'Например', desc: 'Например'}

export default function cards(state = initialState, action) {
	switch(action.type){
		case UPDATE_CARD_FORM_NAME:
			return { ...state, name: action.payload.name}
		case UPDATE_CARD_FORM_DESC:
			return { ...state, desc: action.payload.desc}
		default: 
		 return state;
	}
} 