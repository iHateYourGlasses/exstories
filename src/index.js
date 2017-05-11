import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import configureStore from './store/configureStore'

import './../node_modules/bootstrap/dist/css/bootstrap.css'
import './css/index.css'

import Logo from './components/Logo'
//import Footer from './components/Footer'

import CardForm from './containers/NewStoryForm'
import Stories from './containers/Stories'
import Auth from './containers/Auth'
import MyUserPage from './containers/MyUserPage'
import UserPage from './containers/UserPage'
import Menu from './containers/Menu'
import Story from './containers/Story'
import Home from './components/Home'

const store = configureStore();

render(
    <Provider store={store}>
      <Router >
        <div className='container'>
          <Logo />
          <Menu />
          <Route path='/login' component={Auth}/>
          <Route path='/userpage' component={MyUserPage}/>
          <Route path='/createCard' component={CardForm}/>

          <Route path='/user/:userId' exact={true} component={UserPage}/>

          <Route path='/stories/:storyType' exact={true} component={Stories}/>

          <Route path='/story/:storyId' exact={true} component={Story}/>

          <Route exact path="/" component={Home}/>

        </div>
      </Router>
    </Provider>,
    document.getElementById('root')
);
