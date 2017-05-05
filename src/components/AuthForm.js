import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'

export default class AuthForm extends Component {

  updateFormInputState(e) {
    this.props.actions.updateFormInputState(e.target.dataset.inputctx, e.target.value);
  }

  switchAuthView() {
    this.props.actions.switchAuthView();
  }

  Enter() {
    let mail = this.props.data.mail;
    let username = this.props.data.userName;
    let password = this.props.data.pass;
    switch (this.props.data.authView){
      case 'register':
        this.props.actions.register(mail, username, password);
        break;
      case 'login':
        this.props.actions.login(mail, password);
        break;
    }
  }


  render() {

    let switchTitle = this.props.data.authView === 'login' ? 'Регистрация' : 'Войти';
    let buttonTitle = this.props.data.authView === 'login' ? 'Войти' : 'Регистрация';
    let componentTitle = this.props.data.authView === 'login' ? 'Вход' : 'Регистрация';

    if (this.props.data.isSigned) {
      return (
          <Redirect to={'/userpage'}/>
      )
    }
    return (
        <div>
          <form className="form authForm col-xs-12">
            <h4 className="text-center">{componentTitle}</h4>
            <div className='form-group'>
              <label htmlFor="authMail">Почта:</label>
              <input type="mail" className="form-control" id="authMail"
                     data-inputctx="mail"
                     onChange={this.updateFormInputState.bind(this)}
                     value={this.props.data.mail}/>
            </div>
            {
              (this.props.data.authView === 'login')
                  ? null
                  : <div className='form-group'>
                    <label htmlFor="authName">Имя:</label>
                    <input type="text" className="form-control" id="authName"
                           data-inputctx="userName"
                           onChange={this.updateFormInputState.bind(this)}
                           value={this.props.data.userName}/>
                  </div>
            }

            <div className='form-group'>
              <label htmlFor="authPass">Пароль:</label>
              <input type="password" className="form-control" id="authPass"
                     data-inputctx="pass"
                     onChange={this.updateFormInputState.bind(this)}
                     value={this.props.data.pass}/>
            </div>
            <button type="button" className="btn btn-primary"
                    onClick={this.Enter.bind(this)}>{buttonTitle}
            </button>
            <u className="registration_switch" onClick={this.switchAuthView.bind(this)}>{switchTitle}</u>
            {
              (this.props.data.loadingStatus === 'loading')
                  ? <div className="loader"></div>
                  : null
            }
            {
              (this.props.data.loadingStatus === 'error')
                  ? <div className="errorMsg">{this.props.data.errorMsg}</div>
                  : null
            }
          </form>
        </div>
    )
  }
}