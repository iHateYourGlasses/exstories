import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Card from '../components/SingleStory'
import StoriesFooter from '../components/StoriesFooter'

import * as StoriesActions from '../actions/StoriesActions'

export class Stories extends Component {
  componentWillMount(){
    console.log('rendering...');
    this.props.storiesActions.GetCards();
  }

  render() {
    const {stories} = this.props
    const {deleteCard} = this.props.StoriesActions
    return (
        <div className='row cardsRow'>
          {
            stories.stories.map((entry, index) =>
                <Card title={entry.title} desc={entry.desc} id={entry.id}
                key={index} author={entry.author} authorid={entry.author_id} deleteCard={deleteCard}
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
    StoriesActions: bindActionCreators(StoriesActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stories)