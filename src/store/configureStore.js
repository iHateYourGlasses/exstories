import { createStore, applyMiddleware } from 'redux';
import combineReducers from '../reducers';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { loadState, saveState} from './localStorage';
import throttle from 'lodash/throttle';

export default function configureStore() {
	const logger  = createLogger();
	const localState = loadState();

	const store = createStore(
		combineReducers,
        localState,
	    applyMiddleware(thunk, logger));
	store.subscribe(throttle(() => {
        saveState({auth: store.getState().auth})
	}, 1000));
	
	return store;
}