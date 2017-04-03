import React, { Component } from 'react';

export default class AuthForm extends Component {
    updateNameState(e){
		this.props.actions.updateNameState(e.target.value);
	}
    updateMailState(e){
        this.props.actions.updateMailState(e.target.value);
	}
	updatePassState(e){
        this.props.actions.updatePassState(e.target.value);
	}
	Login(){
		let mail = this.props.data.email;
		let password = this.props.data.pass;
        this.props.actions.login(mail, password);
	}
	render() {
		return(
			<form className="form authForm">
				<div className='form-group'>
	  				<label htmlFor="authMail">Почта:</label>
	  				<input type="mail" className="form-control" id="authMail" onChange={this.updateMailState.bind(this)}/>
	  			</div>
				<div className='form-group'>
	  				<label htmlFor="authName">Имя:</label>
	  				<input type="text" className="form-control" id="authName" onChange={this.updateNameState.bind(this)}/>
	  			</div>
				<div className='form-group'>
	  				<label htmlFor="authPass">Пароль:</label>
	  				<input type="password" className="form-control" id="authPass" onChange={this.updatePassState.bind(this)}/>
	  			</div>
				<button type="button" className="btn btn-primary" onClick={this.Login.bind(this)}>Войти</button>

                {
                	(this.props.data.isLoading === true)
                    ? <div className="loader"></div>
                    :  null
                }

			</form>
        )
	}
}