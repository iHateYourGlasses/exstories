import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import FullStory from '../components/FullStory'

import * as CardActions from '../actions/CardActions'

export class Story extends Component {

  render() {
    return (
        <FullStory data={this.props.story} />
    );
  }
}

function mapStateToProps(state) {
  let curStoryId = document.location.pathname.split('/');
  curStoryId = curStoryId[curStoryId.length - 1]*1;
  return {
    story: state.stories.stories.filter(stories => stories.id === curStoryId)[0]
  }
}

function mapDispatchToProps(dispatch) {
  return {
    StoriesActions: bindActionCreators(CardActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Story)