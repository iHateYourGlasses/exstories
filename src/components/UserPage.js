import React, {Component} from 'react'

export default class UserPage extends Component {
  render() {
    let userData = this.props.data.userData;
    return (
        <div className='col-xs-12'>
          <h4 className="text-center">{userData.user_name}</h4>
          <p className="col-xs-12 col-md-6 text-center">Активен с {userData.user_created}</p>
          <p className="col-xs-12 col-md-6 text-center">Историй: {userData.stories_count}</p>
        </div>
    )
  }
}