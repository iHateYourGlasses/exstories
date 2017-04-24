import React, {Component} from 'react'

export default class UserPage extends Component {
  render() {
    let userData = this.props.data;
    return (
        <div className='col-xs-12'>
          <h4 className="text-center">{userData.userName}</h4>
          <p className="col-xs-12 col-md-6 text-center">Активен с {userData.regDate}</p>
          <p className="col-xs-12 col-md-6 text-center">Историй: {userData.storiesCount}</p>
        </div>
    )
  }
}