import React, { Component } from 'react';

export default class Card extends Component {
	deleteCard(e){
		this.props.deleteCard(this.props.id);
	}
	render() {
		const { title, desc } = this.props;
		return (
			<div className='card col-xs-12'>

				<button type="button" className="close deleteCard" aria-label="Close"  onClick={this.deleteCard.bind(this)}>
                    <span aria-hidden="true">&times;</span>
				</button>

                <h4>{title}</h4>
                <p className="cardMainText">{desc}</p>

			</div>
			)
	}
}