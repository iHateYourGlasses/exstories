import React, {Component} from 'react'
import {connect} from 'react-redux'

import Menu from '../components/Menu'

//import * as StoriesActions from '../actions/StoriesActions'

export class Cards extends Component {
  render() {
    const isSignedBool = this.props.auth.isSigned;

    return (
        <Menu isSigned={isSignedBool}/>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}
/*
 function mapDispatchToProps(dispatch) {
 return {
 StoriesActions: bindActionCreators(StoriesActions, dispatch)
 }
 }*/

export default connect(mapStateToProps)(Cards)