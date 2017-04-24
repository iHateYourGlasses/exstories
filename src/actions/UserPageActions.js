import {
  USER_GET_DATA_SUCCESS,
  USER_GET_DATA_FAIL,
  USER_CLEAR_DATA
} from '../constants/UserPage'

export function getUserData(id) {
  return (dispatch) => {

    setTimeout(() => {
      if (Math.random() > 0.1) {

        let userName =  id === '150' ? 'Федор Михайлович' : 'Карл Меннингер'

        dispatch({
          type: USER_GET_DATA_SUCCESS,
          payload: {id, userName, regDate: '2017-04-05', storiesCount: '1'}
        })
      }
      else {
        dispatch({
          type: USER_GET_DATA_FAIL,
          payload: {}
        })
      }
    }, 400)
  }
}

export function clearUserData() {
  return (dispatch) => {
        dispatch({
          type: USER_CLEAR_DATA,
          payload: {}
        })
  }
}
