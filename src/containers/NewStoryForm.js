import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import CardForm from '../components/NewStoryForm'

import * as CardFormActions from '../actions/CardFormActions'

export class App extends Component {
  render() {
    const {cardForm, stories} = this.props;
    const isSigned = this.props.auth.isSigned;
    const {updateNameState, updateDescState, CreateNewCard} = this.props.CardFormActions;
    return (
        <div className='row'>
          <CardForm cardForm={cardForm} isSigned={isSigned} updateNameState={updateNameState}
                    updateDescState={updateDescState}
                    stories={stories} CreateNewCard={CreateNewCard}/>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cardForm: state.cardForm,
    auth: state.auth,
    stories: state.stories.stories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    CardFormActions: bindActionCreators(CardFormActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)