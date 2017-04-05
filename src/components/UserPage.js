import React, { Component } from 'react';

export default class Card extends Component {
	logout(){
		this.props.actions.logout();
	}
	render() {
		const data = this.props.data;
		return (
			<div className='userWrap col-xs-12'>
				<button className="btn btn-sm btn-warning exitBtn" onClick={this.logout.bind(this)}>Выйти</button>
				<h4 className="text-center col-xs-12">{data.userName}</h4>
				<img  alt="userAvatar"  className="col-md-4 col-sm-6 col-xs-12" src="https://image.freepik.com/free-vector/abstract-blue-background_1048-1511.jpg" />
				<form className="form-wrap form-inline form col-md-8 col-sm-6 col-xs-12">
					<div className="form-group col-xs-12">
						<label htmlFor="userPageMailInput" className="col-xs-12">Почта: </label>
						<input type="email" className="form-control col-xs-12" id="userPageMailInput" defaultValue={data.mail} />
					</div>
					<div className="form-group col-xs-12">
						<label htmlFor="userPagePassInput"className="col-xs-12">Сменить пароль: </label>
						<input type="password" className="form-control col-xs-12" id="userPagePassInput" />
					</div>
				</form>

			</div>
			)
	}
}