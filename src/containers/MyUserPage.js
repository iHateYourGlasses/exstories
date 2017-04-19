import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import UserPage from '../components/MyUserPage'

import * as UserPageActions from '../actions/UserPageActions'

export class MyUserPage extends Component {
  render() {
    return (
        <div className="row">
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

export default connect(mapStateToProps, mapDispatchToProps)(MyUserPage)