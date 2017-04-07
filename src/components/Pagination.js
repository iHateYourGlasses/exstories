import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
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
        </ul>)
  }
}