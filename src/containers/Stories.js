import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Card from '../components/Card'
import StoriesFooter from '../components/StoriesFooter'

import * as CardActions from '../actions/CardActions'

export class Stories extends Component {
  render() {
    const {stories} = this.props
    const {deleteCard} = this.props.StoriesActions
    return (
        <div className='row cardsRow'>
          {
            stories.stories.map((entry, index) =>
                <Card title={entry.title} desc={entry.desc} id={entry.id}
                key={index} deleteCard={deleteCard}
                curPath={this.props.location.pathname}/>
            )
          }
          <StoriesFooter />
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stories: state.stories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    StoriesActions: bindActionCreators(CardActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stories)