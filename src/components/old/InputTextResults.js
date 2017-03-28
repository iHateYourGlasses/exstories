import React, { PropTypes, Component } from 'react';

export default class InputTextResults extends Component {
	render() {
		const { count } = this.props
		return (
		<div className='col-md-4'>
		<p>Слов: {count}</p> 
		</div>)
	}
}

Component.propTypes = {
	count: PropTypes.number
}