import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class FullStory extends Component {
  deleteCard(e) {
    this.props.deleteCard(this.props.id);
  }

  render() {
    const {title, desc, author, author_id} = this.props.data;
    const link = document.location.pathname;
    const authorLink = '/user/'+author_id
    return (
        <div className='card col-xs-12'>

          <button type="button" className="close deleteCard" aria-label="Close" onClick={this.deleteCard.bind(this)}>
            <span aria-hidden="true">&times;</span>
          </button>

          <h4 className="cardTitle"><Link to={link}>{title}</Link></h4>
          <p className="cardMainText">{desc}</p>
          <span className="storyAuthor"><Link to={authorLink}>{author}</Link></span>

        </div>
    )
  }
}