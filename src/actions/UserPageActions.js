import {
TRY_TO_LOGOUT,
LOGOUT_SUCCESS,
LOGOUT_FAIL/*,
UPDATE_NAME_STATE,
UPDATE_MAIL_STATE,
UPDATE_PASS_STATE*/} from '../constants/UserPage'

export function logout() {
    return (dispatch) => {
        dispatch({
            type: TRY_TO_LOGOUT,
            payload: {}
        });

        setTimeout(() => {
            if(Math.random()>0.1){
                dispatch({
                    type: LOGOUT_SUCCESS,
                    payload: {}
                })
            }
            else{
                dispatch({
                    type: LOGOUT_FAIL,
                    payload: {}
                })
            }
        }, 600)
    }
}
/*
export function updateNameState(name) {
    return (dispatch) => {
        dispatch({
            type: UPDATE_NAME_STATE,
            payload: {name: name}
        });
    }
}
export function updatePassState(pass) {
    return (dispatch) => {
        dispatch({
            type: UPDATE_PASS_STATE,
            payload: {pass: pass}
        });
    }
}
export function updateMailState(mail) {
    return (dispatch) => {
        dispatch({
            type: UPDATE_MAIL_STATE,
            payload: {mail: mail}
        });
    }
}*/