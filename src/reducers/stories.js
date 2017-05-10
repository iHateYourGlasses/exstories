import {
  CREATE_CARD,
  DELETE_CARD,
  GET_CARDS_REQUEST,
  GET_CARDS_SUCCESS,
  GET_CARDS_ERROR
} from '../constants/Stories'

const initialState = {
  loadingStatus: 'idle',
  stories: []
};

export default function stories(state = initialState, action) {
  switch (action.type) {
    case CREATE_CARD:

      let newCard = {id: action.payload.id, title: action.payload.title, desc: action.payload.desc}
      return {...state, stories: [...state.stories, newCard]}

    case DELETE_CARD:
      let newCardsArray = state.stories.filter(stories => stories.id !== action.payload.id)
      return {...state, stories: newCardsArray}

    case GET_CARDS_REQUEST:
      return {...state, loadingStatus: 'loading'}

    case GET_CARDS_SUCCESS:
      return {...state, loadingStatus: 'idle', stories: [ ...action.payload.stories]}

    case GET_CARDS_ERROR:
      return {...state, loadingStatus: 'error', errorMsg: action.payload.errorMsg}

    default:
      return state;
  }
} 