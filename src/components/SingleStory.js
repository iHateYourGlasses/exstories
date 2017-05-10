import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class SingleStory extends Component {
  deleteCard(e) {
    this.props.deleteCard(this.props.id);
  }

  render() {
    const {id, user_id, story_title, story_body, user_name} = this.props.data;
    const link = '/story/'+id
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