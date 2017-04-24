import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class Header extends Component {
  render() {
    const {isSigned} = this.props;
    let glyph = isSigned ? 'glyphicon glyphicon glyphicon-user' : 'glyphicon glyphicon-log-in';
    let linkLogInOut = isSigned ? '/userpage' : '/login';

    return (
        <div className='row headerLinks row-fluid header'>
          <Link to={linkLogInOut} className='col-sm-1 col-xs-12 pull-right text-right list-group-item authButton'>
            <span className={glyph}/>
          </Link>

          <div className='col-md-4 col-xs-12'>
            <Link to='/stories/trending'>
              <button className="btn btn-link text-center col-xs-12 list-group-item storiesLink">
                Истории
              </button>
            </Link>
            <Link to="/stories/all">

              <button className="btn btn-link storiesLink col-md-5 col-xs-12">
                Все подряд
              </button>
            </Link>
            <Link to="/stories/top">
              <button className="btn btn-link storiesLink col-md-3 col-xs-12">
                Лучшие
              </button>
            </Link>
            <Link to="/stories/trending">
              <button className="btn btn-link storiesLink col-md-4 col-xs-12">
                В тренде
              </button>
            </Link>
          </div>
        </div>
    )
  }
}