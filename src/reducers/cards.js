import {
CREATE_CARD,
DELETE_CARD} from '../constants/Cards'

const initialState = {
	cards: [{id: 0, name: 'Карта1', desc: 'Описание карты 1'}, {id: 1, name: 'Карта2', desc: 'Описание карты 2'}]
}

export default function cards(state = initialState, action) {
	switch(action.type){
		case CREATE_CARD:
			let cardsArray = state.cards, curMaxId = 0;

			state.cards.map((entry, index) =>
				curMaxId = entry.id > curMaxId ? entry.id  : curMaxId
			)

			let newCard = {id: ++curMaxId ,name: action.payload.name, desc: action.payload.desc}
			cardsArray[cardsArray.length] = newCard;
			return { ...state, cards: cardsArray }

		case DELETE_CARD:
			var newCardsArray = state.cards.filter(card => card.id !== action.payload.id)
			return { ...state, cards: newCardsArray }

		default: 
		 return state;
	}
} 