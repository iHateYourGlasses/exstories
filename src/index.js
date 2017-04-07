import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import {HashRouter as Router, Route} from 'react-router-dom'

import configureStore from './store/configureStore'

import './../node_modules/bootstrap/dist/css/bootstrap.css'
import './css/index.css'

import Logo from './components/Logo'
import Footer from './components/Footer'

import CardForm from './containers/CardForm'
import Cards from './containers/Cards'
import Auth from './containers/Auth'
import UserPage from './containers/UserPage'
import Menu from './containers/Menu'

const store = configureStore();

render(
    <Provider store={store}>
      <Router >
        <div className='container'>
          <Logo />
          <Menu />
          <Route path='/login' component={Auth}/>
          <Route path='/userpage' component={UserPage}/>
          <Route path='/createCard' component={CardForm}/>
          <Route path='/myCards' component={Cards}/>
          <Footer />
        </div>
      </Router>
    </Provider>,
    document.getElementById('root')
);
