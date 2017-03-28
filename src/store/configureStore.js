import { createStore, applyMiddleware } from 'redux';
import combineReducers from '../reducers';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
	const logger  = createLogger();
	const store = createStore(
		combineReducers,
	    initialState,
	    applyMiddleware(thunk, logger));
	
	return store;
}