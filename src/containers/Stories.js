import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import SingleStory from '../components/SingleStory'
import StoriesFooter from '../components/StoriesFooter'
import Loading from '../components/LoadingScreen'

import * as StoriesActions from '../actions/StoriesActions'

export class Stories extends Component {
  componentWillMount() {
    this.props.StoriesActions.GetCards();
  }

  render() {
    const {stories} = this.props
    const {deleteCard} = this.props.StoriesActions
    return (
        <div className='row cardsRow'>
          {
            (this.props.stories.loadingStatus === 'loading')
                ? <Loading /> : null
          }
          {
            (this.props.stories.loadingStatus === 'error')
                ? <p>{stories.errorMsg}</p> : null
          }
          {
            stories.stories.map((entry, index) =>
                <SingleStory data={entry} key={+entry.id} deleteCard={deleteCard}
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