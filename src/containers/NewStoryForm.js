import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import CardForm from '../components/NewStoryForm'

import * as CardFormActions from '../actions/CardFormActions'

export class App extends Component {
  render() {
    const {cardForm} = this.props;
    const authData = this.props.auth;
    const {updateNameState, updateDescState, CreateNewCard} = this.props.CardFormActions;
    return (
        <div className='row'>
          <CardForm cardForm={cardForm} authData={authData} updateNameState={updateNameState}
                    updateDescState={updateDescState} CreateNewCard={CreateNewCard}/>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cardForm: state.cardForm,
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    CardFormActions: bindActionCreators(CardFormActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)