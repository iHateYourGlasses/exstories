import {
CREATE_CARD,
DELETE_CARD} from '../constants/Cards'

const initialState = {
	stories: [{id: 0, title: 'Заголовок 1', desc: 'Я клоп и признаю со всем принижением, что ничего не могу понять, для чего все так устроено. Люди сами, значит, виноваты: им дан был рай, они захотели свободы и похитили огонь с небеси, сами зная, что станут несчастны, значит нечего их жалеть. О, по моему, по жалкому, земному эвклидовскому уму моему, я знаю лишь то, что страдание есть, что виновных нет, что все одно из другого выходит прямо и просто, что все течет и уравновешивается, - но ведь это лишь эвклидовская дичь, ведь я знаю же это, ведь жить по ней я не могу же согласиться! Что мне в том, что виновных нет и что все прямо и просто одно из другого выходит, и что я это знаю - мне надо возмездие, иначе ведь я истреблю себя. И возмездие не в бесконечности где-нибудь и когда-нибудь, а здесь уже на земле, и чтоб я его сам увидал. Я веровал, я хочу сам и видеть, а если к тому часу буду уже мертв, то пусть воскресят меня, ибо если все без меня произойдет, то будет слишком обидно. Не для того же я страдал, чтобы собой, злодействами и страданиями моими унавозить кому-то будущую гармонию. Я хочу видеть своими глазами, как лань ляжет подле льва и как зарезанный встанет и обнимется с убившим его. Я хочу быть тут, когда все вдруг узнают, для чего все так было.Федор Михайлович Достоевский'},
		{id: 1, title: 'Заголовок 2', desc: 'Описание карты 2'}],
	status: 'loading'
}

export default function stories(state = initialState, action) {
	switch(action.type){
		case CREATE_CARD:
			let storiesArray = state.stories, curMaxId = 0;

			state.stories.map((entry, index) =>
				curMaxId = entry.id > curMaxId ? entry.id  : curMaxId
			)

			let newCard = {id: ++curMaxId ,title: action.payload.title, desc: action.payload.desc}
			storiesArray[storiesArray.length] = newCard;
			return { ...state, stories: storiesArray }

		case DELETE_CARD:
			var newCardsArray = state.stories.filter(stories => stories.id !== action.payload.id)
			return { ...state, stories: newCardsArray }

		default: 
		 return state;
	}
} 