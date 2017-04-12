import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as CardActions from '../actions/CardActions'

export class Story extends Component {
  render() {
    return (
        <p>hi!</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Story)