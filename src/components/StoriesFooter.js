import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class StoriesFooter extends Component {
  render() {
    return (
        <div className="storiesFooter">
          <ul className="pagination">
            <li>
              <Link to={'#'+ (+window.location.hash.substring(1) - 1)} href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </Link>
            </li>
            <li>
              <Link to='#1'>1</Link>
            </li>
            <li>
              <Link to='#2'>2</Link>
            </li>
            <li>
              <Link to='#3'>3</Link>
            </li>
            <li>
              <Link to='#4'>4</Link>
            </li>
            <li>
              <Link to='#5'>5</Link>
            </li>
            <li>
              <Link to={'#'+ (+window.location.hash.substring(1) + 1)} aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </Link>
            </li>
          </ul>
            <Link to='/createCard'  className='col-md-2 col-xs-12 pull-right text-center list-group-item newStoryLink'>
              Создать свою
            </Link>
        </div>)
  }
}