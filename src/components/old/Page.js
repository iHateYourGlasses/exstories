import React, { PropTypes, Component } from 'react';

export default class Page extends Component {
	onYearBtnClick(e) {
		this.props.getPhotos(+e.target.innerText)
	}
	render() {
		const { year, photos, fetching } = this.props;
		return <div className='ib page'> 
		<p>
			<button className='btn' onClick={this.onYearBtnClick.bind(this)}>2016</button>
			<button className='btn' onClick={this.onYearBtnClick.bind(this)}>2015</button>
			<button className='btn' onClick={this.onYearBtnClick.bind(this)}>2014</button>
		</p>
		<h3>{year} год</h3>
		{{ //switch
		   'loading': (
		    <p>Загрузка...</p>
		   ),
		   'success': (
		   <p>У тебя {photos.length} фото.</p>
		   ),
		   'error': (
		    <p>Ошибка загрузки</p>
		   )
		 }[fetching]}
		</div>
	}
}
Page.propTypes = {
	year: PropTypes.number.isRequired,
	photos: PropTypes.array.isRequired,
	getPhotos: PropTypes.func.isRequired
}