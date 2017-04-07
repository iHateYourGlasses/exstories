import React, {Component} from 'react'
import {connect} from 'react-redux'

import Menu from '../components/Menu'

//import * as CardActions from '../actions/CardActions'

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
 CardActions: bindActionCreators(CardActions, dispatch)
 }
 }*/

export default connect(mapStateToProps)(Cards)