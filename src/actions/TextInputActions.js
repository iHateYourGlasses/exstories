import {
COUNT_WORDS_REQUEST,
COUNT_WORDS_SUCCESS,
COUNT_WORDS_ERROR } from '../constants/TextInput.js'
import fetch from 'isomorphic-fetch'

export function countWords(input) {
	return (dispatch) => {
		dispatch({
			type: COUNT_WORDS_REQUEST,
			payload: {text: input}
		});

		let wordCount = input
			.replace(/(^\s*)|(\s*$)/gi,"")
			.replace(/[ ]{2,}/gi," ")
			.replace(/\n /,"\n")
			.split(' ')
			.length;

		let header = new Headers({
        	'Access-Control-Allow-Origin': '*',
        	'Content-Type': 'multipart/form-data'
		});

		let sentData = {
    		method:'POST',
    		mode: 'cors',
			header: header
		}

		return fetch('http://finereports.info/soc/json.php?event=getTextData', sentData)
    		.then(response => response.json())
    		.then(json => console.log(json))
        .catch((error) => {
          // Something went wrong 
        });/*
		setTimeout(() => {
			if(Math.random()>0){
				dispatch({
				type: COUNT_WORDS_SUCCESS,
				payload: {count: wordCount}
				})
			}
			else{
				dispatch({
				type: COUNT_WORDS_ERROR,
				payload: {}
				})
			}
		}, 10)*/
	}
}