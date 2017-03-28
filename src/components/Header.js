import React, {Component} from 'react';
import { Link } from 'react-router-dom'

export default class Header extends Component {
	render() {
		return(
			<div className='row-fluid header'>
				<h4 className='text-center'>ExStories</h4>
				<ul className='col-xs-12 headerLinks list-group list-unstyled'>
					<li className=''>
					<Link to='/myCards' className='col-xs-12 col-md-6 text-center list-group-item'>Мои карточки</Link>
					</li>
					<li className=''><Link to='/createCard' className='col-xs-12 col-md-6 text-center list-group-item'>Создать карточку</Link></li>
				</ul>
			</div>
		)	
		return(
			<div className='row-fluid header'>
				<h3 className='text-center'>Лого, типа.</h3>
			</div>
		)	
	}
}