import {
  CREATE_CARD,
  DELETE_CARD
} from '../constants/Stories'

const initialState = {
  stories: []
}

export default function stories(state = initialState, action) {
  switch (action.type) {
    case CREATE_CARD:

      let newCard = {id: action.payload.id, title: action.payload.title, desc: action.payload.desc}
      return {...state, stories: [...state.stories, newCard]}

    case DELETE_CARD:
      let newCardsArray = state.stories.filter(stories => stories.id !== action.payload.id)
      return {...state, stories: newCardsArray}

    default:
      return state;
  }
} 