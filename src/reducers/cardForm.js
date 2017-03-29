import {
UPDATE_CARD_FORM_NAME,
UPDATE_CARD_FORM_DESC} from '../constants/CardForm'

const initialState = {title: 'Заголовок', desc: 'Простыня о невзаимной любви'}

export default function cards(state = initialState, action) {
	switch(action.type){
		case UPDATE_CARD_FORM_NAME:
			return { ...state, title: action.payload.title}
		case UPDATE_CARD_FORM_DESC:
			return { ...state, desc: action.payload.desc}
		default: 
		 return state;
	}
} 