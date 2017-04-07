import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import UserPage from '../components/UserPage'

import * as UserPageActions from '../actions/UserPageActions'

export class Auth extends Component {
  render() {
    return (
        <div className="row authRow">
          <UserPage authData={this.props.auth} userPageData={this.props.userpage} actions={this.props.UserPageActions}/>
        </div>
    );
  }
}

function mapStateToProps(state) {
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