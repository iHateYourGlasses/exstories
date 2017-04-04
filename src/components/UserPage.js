import React, { Component } from 'react';

export default class Card extends Component {
	logout(){
		this.props.actions.logout();
	}
	render() {
		const data = this.props.data;
		return (
			<div className='card col-xs-12'>

                <h4>{data.userName}</h4>
				<button className="btn btn-sm btn-warning exitBtn" onClick={this.logout.bind(this)}>Выйти</button>

			</div>
			)
	}
}