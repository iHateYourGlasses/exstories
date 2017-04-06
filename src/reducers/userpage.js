import {
    TRY_TO_LOGOUT,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL} from '../constants/UserPage'

const initialState = {isLoading: false};

export default function userpage(state = initialState, action) {
	switch(action.type){
		case TRY_TO_LOGOUT:
			return { ...state, isLoading: true}
		case LOGOUT_SUCCESS:
			return { ...state, isLoading: false, isSigned: false}
		case LOGOUT_FAIL:
			return { ...state, isLoading: false}

		default: 
		 return state;
	}
} 