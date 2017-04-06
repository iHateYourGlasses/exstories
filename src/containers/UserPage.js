import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import UserPage from '../components/UserPage'

import * as UserPageActions from '../actions/UserPageActions'

export class Auth extends Component{
  render() {
   const userPageData= this.props.auth;
   const authData= this.props.auth;
   const userPageActions = this.props.UserPageActions
    return (
      <div className="row authRow">
          <UserPage authData={authData} userPageData={userPageData} actions={userPageActions}  />
      </div>
      );
  }
}

function mapStateToProps (state) {
  return {
   userpage: state.userpage,
   auth: state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    UserPageActions: bindActionCreators(UserPageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)