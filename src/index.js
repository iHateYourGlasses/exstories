import React from 'react';
import { render} from 'react-dom';
import { Provider } from 'react-redux'
//import {BrowserRouter as Router} from 'react-router-dom'
import {HashRouter as Router, Route} from 'react-router-dom'

import configureStore from './store/configureStore'

import './../node_modules/bootstrap/dist/css/bootstrap.css'
import './css/index.css'

import Header from './components/Header'
import Footer from './components/Footer'

import CardForm from './containers/CardForm'
import Cards from './containers/Cards'

const store = configureStore(); 

render(
    <Provider store={store}>
    	<Router >
		    <div className='container'>
		  		<Header />
		  		<Route path='/createCard' component={CardForm} />
		  		<Route path='/myCards' component={Cards} />
		    	<Footer />
				</div>
	    </Router>
    </Provider>,
 	document.getElementById('root')
);
