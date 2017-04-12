import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class Header extends Component {
  render() {
    const {isSigned} = this.props;
    let glyph = isSigned ? 'glyphicon glyphicon glyphicon-user' : 'glyphicon glyphicon-log-in';
    let linkLogInOut = isSigned ? '/userpage' : '/login';

    return (
        <ul className='row headerLinks list-group list-unstyled row-fluid header'>
          <li className=''>
            <Link to={linkLogInOut} className='col-md-2 col-xs-12 pull-right text-center list-group-item authButton'>
              <span  className={glyph}/>
            </Link>
          </li>
          <li className='col-md-4 col-xs-12'>
            <button className="btn btn-link text-center col-xs-12 list-group-item storiesLink">
              <Link to='/stories/trending'>Истории</Link>
            </button>
            <button className="btn btn-link storiesLink col-md-5 col-xs-12">
              <Link to="/stories/all">Все подряд</Link>
            </button>
            <button className="btn btn-link storiesLink col-md-3 col-xs-12">
              <Link to="/stories/top">Лучшие</Link>
            </button>
            <button className="btn btn-link storiesLink col-md-4 col-xs-12">
              <Link to="/stories/trending">В тренде</Link>
            </button>
          </li>
        </ul>
    )
  }
}