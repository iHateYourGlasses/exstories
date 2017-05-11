import {
UPDATE_CARD_FORM_INPUT_STATE,
CREATE_STORY_REQUEST,
CREATE_STORY_SUCCESS,
CREATE_STORY_ERROR,
CREATE_STORY_RESET_STATUS} from '../constants/NewStoryForm'

const initialState = {title: 'Заголовок', desc: 'Простыня о невзаимной любви', publishType: 'Анонимно', status: 'idle'};

export default function cards(state = initialState, action) {
	switch(action.type){
		case CREATE_STORY_REQUEST:
			return { ...state, status: 'loading'}
		case CREATE_STORY_SUCCESS:
			return { ...state, status: 'success', message: 'Новая истоия добавлена'}
		case CREATE_STORY_ERROR:
			return { ...state, status: 'error', message: action.payload.errorMsg}

    case UPDATE_CARD_FORM_INPUT_STATE:
      return {...state, [action.payload.id]: action.payload.newVal}


    case CREATE_STORY_RESET_STATUS:
			return { ...state, status: 'idle', message: ''}
		default: 
		 return state;
	}
} 