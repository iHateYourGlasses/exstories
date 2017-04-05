import {
    TRY_TO_LOGIN,
    LOGIN_SUCCEES,
    LOGIN_FAIL,
    TRY_TO_LOGOUT,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    UPDATE_NAME_STATE,
    UPDATE_MAIL_STATE,
    UPDATE_PASS_STATE} from '../constants/Auth'

const initialState = {mail: 'test@mail.ru', pass: 'password', isSigned: false, userName: 'WagonPenetrator', isLoading: false};

export default function auth(state = initialState, action) {
	switch(action.type){
		case TRY_TO_LOGIN:
			return { ...state, isLoading: true}
		case LOGIN_SUCCEES:
			return { ...state, isLoading: false, isSigned: true}
		case LOGIN_FAIL:
			return { ...state, isLoading: false}

		case TRY_TO_LOGOUT:
			return { ...state, isLoading: true}
		case LOGOUT_SUCCESS:
			return { ...state, isLoading: false, isSigned: false}
		case LOGOUT_FAIL:
			return { ...state, isLoading: false}


        case UPDATE_NAME_STATE:
            return { ...state, userName: action.payload.name}
        case UPDATE_MAIL_STATE:
            return { ...state, mail: action.payload.mail}
        case UPDATE_PASS_STATE:
            return { ...state, pass: action.payload.pass}
		default: 
		 return state;
	}
} 