import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'

export default class AuthForm extends Component {

  updateFormInputState(e) {
    this.props.actions.updateFormInputState(e.target.dataset.inputctx, e.target.value);
  }

  switchAuthView() {
    this.props.actions.switchAuthView();
  }

  Login() {
    let mail = this.props.data.mail;
    let password = this.props.data.pass;
    this.props.actions.login(mail, password);
  }


  Register() {
    let mail = this.props.data.mail;
    let password = this.props.data.pass;
    this.props.actions.login(mail, password);
  }


  render() {

    let pageTitle = this.props.data.authView === 'login' ? 'Регистрация' : 'Войти';
    let buttonTitle = this.props.data.authView === 'login' ? 'Войти' : 'Регистрация';

    if (this.props.data.isSigned) {
      return (
          <Redirect to={'/userpage'}/>
      )
    }
    return (
        <div>
          <form className="form authForm col-xs-12">
            <h4 className="text-center">{pageTitle}</h4>
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
                    onClick={this.Login.bind(this)}>{buttonTitle}
            </button>
            <u className="registration_switch" onClick={this.switchAuthView.bind(this)}>{pageTitle}</u>
            {
              (this.props.data.isLoading === true)
                  ? <div className="loader"></div>
                  : null
            }
          </form>
        </div>
    )
  }
}