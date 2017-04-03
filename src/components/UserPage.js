import React, { Component } from 'react';

export default class Card extends Component {
	/*deleteCard(e){
		this.props.deleteCard(this.props.id);
	}*/
	render() {
		const data = this.props.data;
		return (
			<div className='card col-xs-12'>

                <h4>{data.userName}</h4>

			</div>
			)
	}
}