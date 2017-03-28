import React, { Component } from 'react';

export default class Card extends Component {
	deleteCard(e){
		this.props.deleteCard(this.props.id);
	}
	render() {
		const { name, desc } = this.props
		return (
			<div className='card col-md-6 col-xs-12'>
				<button type="button" className="close deleteCard" aria-label="Close"  onClick={this.deleteCard.bind(this)}>
				  <span aria-hidden="true">&times;</span>
				</button>
					<h4 className='text-center'>{name}</h4>
					<p>{desc}</p>
			</div>
			)
	}
}