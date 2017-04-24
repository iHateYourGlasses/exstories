import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Loading from '../components/LoadingScreen'
import UserPage from '../components/UserPage'

import * as UserPageActions from '../actions/UserPageActions'

export class Story extends Component {

  componentDidMount(){
    this.props.UserPageActions.getUserData(this.props.match.params.userId)
  }

  componentWillUnmount(){
    this.props.UserPageActions.clearUserData()
  }


  render() {
    return (
        <div className="userWrap">
          {{
            'loading': (
                <Loading />
            ),
            'loaded': (
             <UserPage data={this.props.user} />
            ),
            'error': (
              <div>error!</div>
            )
          }[this.props.user.status]}
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    UserPageActions: bindActionCreators(UserPageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Story)