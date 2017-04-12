import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import AuthForm from '../components/AuthForm'

import * as AuthActions from '../actions/AuthActions'

export class Auth extends Component {
  render() {
    const authData = this.props.auth;
    const authActions = this.props.AuthActions;
    return (
        <div className="row authRow">
          <AuthForm data={authData} actions={authActions}/>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    AuthActions: bindActionCreators(AuthActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)