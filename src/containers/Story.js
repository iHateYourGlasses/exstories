import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import FullStory from '../components/FullStory'

import * as FullStoryActions from '../actions/FullStoryActions'

export class Story extends Component {

  componentWillMount() {
    let storyID = this.props.match.params.storyId;
    this.props.FullStoryActions.GetStoryData(storyID);
  }

  render() {
    return (
        <FullStory data={this.props.story} />
    );
  }
}

function mapStateToProps(state) {
  return {
    story: state.fullstory
  }
}

function mapDispatchToProps(dispatch) {
  return {
    FullStoryActions: bindActionCreators(FullStoryActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Story)