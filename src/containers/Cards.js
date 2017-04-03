import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Card from '../components/Card'

import * as CardActions from '../actions/CardActions'

export class Cards extends Component{
  render() {
    const { cards} = this.props
    const { deleteCard } = this.props.CardActions
    return (
      <div className='row cardsRow'>
        {
          cards.cards.map((entry, index) =>
            <Card title={entry.title} desc={entry.desc} id={entry.id} key={index} deleteCard={deleteCard} />
          )
        }
      </div>
      );
  }
}

function mapStateToProps (state) {
  return {
   cards: state.cards
  }
}

function mapDispatchToProps(dispatch) {
  return {
    CardActions: bindActionCreators(CardActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards)