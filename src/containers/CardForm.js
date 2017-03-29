import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import CardForm from '../components/CardForm'

import * as CardFormActions from '../actions/CardFormActions'

export class App extends Component{
    render() {
        const { cardForm} = this.props;
        const { updateNameState, updateDescState, CreateNewCard } = this.props.CardFormActions;
        return (
            <div className='row'>
              <CardForm cardForm={cardForm}  updateNameState={updateNameState}  updateDescState={updateDescState} CreateNewCard={CreateNewCard} />
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        cardForm: state.cardForm
    }
}

function mapDispatchToProps(dispatch) {
    return {
        CardFormActions: bindActionCreators(CardFormActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)