import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Loading from './LoadingScreen'

export default class FullStory extends Component {
  deleteCard(e) {
    this.props.deleteCard(this.props.id);
  }

  render() {
    let {loadingStatus} = this.props.data;
    if(loadingStatus === 'loading'){
      return(
      <div className='card col-xs-12'>
        <Loading />
      </div>
      )
    }

    const {story_title, story_body, user_name, user_id} = this.props.data;
    const link = document.location.pathname;
    const authorLink = '/user/'+user_id
    return (
        <div className='card col-xs-12'>

          <button type="button" className="close deleteCard" aria-label="Close" onClick={this.deleteCard.bind(this)}>
            <span aria-hidden="true">&times;</span>
          </button>

          <h4 className="cardTitle"><Link to={link}>{story_title}</Link></h4>
          <p className="cardMainText">{story_body}</p>
          <span className="storyAuthor"><Link to={authorLink}>{user_name}</Link></span>

        </div>
    )
  }
}