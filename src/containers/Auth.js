import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//import Card from '../components/Card'
import AuthForm from '../components/AuthForm'
import UserPage from '../components/UserPage'

import * as AuthActions from '../actions/AuthActions'

export class Auth extends Component{
  render() {
   const data = this.props.auth;
   const actions = this.props.AuthActions
    return (
      <div className="row authRow">
          {
              (data.isSigned === true)
                  ?  <UserPage data={data} actions={actions} />
                  :  <AuthForm data={data} actions={actions} />
          }
      </div>
      );
  }
}

function mapStateToProps (state) {
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