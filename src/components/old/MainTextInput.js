import React, { PropTypes, Component } from 'react';

export default class MainTextInput extends Component {
	countWords(e){
		this.props.countWords(e.target.value)
	}
	render() {
		const { text } = this.props
		return <textarea className='mainTextArea col-md-8' onChange={this.countWords.bind(this)} defaultValue={text}></textarea>
	}
}

MainTextInput.propTypes = {
	text: PropTypes.string.isRequired
}