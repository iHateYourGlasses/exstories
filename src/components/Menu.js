import React, {Component} from 'react';
import { Link } from 'react-router-dom'

export default class Header extends Component {
	render() {
		return(
				<ul className='row headerLinks list-group list-unstyled row-fluid header'>
					<li className=''>
						<Link to='/myCards' className='col-xs-10 text-center list-group-item'>Истории</Link>
					</li>
					<li className=''>
						<Link to='/createCard' className='col-xs-1 text-center list-group-item'>
							<span className="glyphicon glyphicon-plus-sign" />
						</Link>
					</li>
					<li className=''>
						<Link to='/login' className='col-xs-1 text-center list-group-item'>
							<span className="glyphicon glyphicon-log-in" />
						</Link>
					</li>
				</ul>
		)
	}
}