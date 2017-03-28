import {
GET_PHOTOS_REQUEST,
GET_PHOTOS_SUCCESS,
GET_PHOTOS_ERROR } from '../constants/Page'


export function getPhotos(year) {
	return (dispatch) => {
		dispatch({
			type: GET_PHOTOS_REQUEST,
			payload: {year: year, photos: []}
		});
		
		setTimeout(() => {
			if(Math.random()>0.2){
				dispatch({
				type: GET_PHOTOS_SUCCESS,
				payload: {photos: [1,2,3,4,5], year: year}
				})
			}
			else{
				dispatch({
				type: GET_PHOTOS_ERROR,
				payload: {photos: [], year: year}
				})
			}
		}, 300)
	}
}