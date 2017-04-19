import {
UPDATE_CARD_FORM_NAME,
UPDATE_CARD_FORM_DESC} from '../constants/NewStoryForm'

const initialState = {title: 'Заголовок', desc: 'Простыня о невзаимной любви', publishType: 'Анонимно'};

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