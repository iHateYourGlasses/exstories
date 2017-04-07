import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

export default class Card extends Component {
  updateFormInputState(e) {
    this.props.actions.updateFormInputState(e.target.dataset.inputctx, e.target.value);
  }

  updateUserData(e) {
    e.preventDefault();

    let newFormVal = this.props.userPageData[e.target.dataset.inputctx];
    this.props.actions.updateUserData(e.target.dataset.inputctx, newFormVal );
  }

  logout() {
    this.props.actions.logout();
  }

  render() {
    const authData = this.props.authData;
    const userPageData = this.props.userPageData;

    if (!authData.isSigned) {
      return (
          <Redirect to={'/login'}/>
      )
    } else return (
        <div className='userWrap col-xs-12'>
          <button className="btn btn-sm btn-warning exitBtn" onClick={this.logout.bind(this)}>Выйти</button>
          <h4 className="text-center col-xs-12">{authData.userName}</h4>
          <img alt="userAvatar" className="col-md-4 col-sm-6 col-xs-12"
               src="https://image.freepik.com/free-vector/abstract-blue-background_1048-1511.jpg"/>
          <form className="form-wrap form form-inline form col-md-8 col-sm-6 col-xs-12">
            <div className="form-group col-xs-12">
              <label htmlFor="userPageMailInput" className="col-xs-12">Почта: </label>
              <input type="email" className="form-control col-xs-12"
                     defaultValue={authData.mail} data-inputctx="mail" onChange={this.updateFormInputState.bind(this)}/>
              {
                (userPageData.mail)
                    ? (<button className={"btn updateUserInfoButton " + userPageData.mail_status} data-inputctx="mail"
                               onClick={this.updateUserData.bind(this)}>
                      <span className="glyphicon glyphicon-ok" data-inputctx="mail"/>
                    </button>)
                    : null
              }

            </div>
            <div className="form-group col-xs-12">
              <label htmlFor="userPageUserNameInput" className="col-xs-12">Имя: </label>
              <input type="text" className="form-control col-xs-12"
                     defaultValue={authData.userName} data-inputctx="userName"
                     onChange={this.updateFormInputState.bind(this)}/>
              {
                (userPageData.userName)
                    ? (<button className={"btn updateUserInfoButton " + userPageData.userName_status}
                               data-inputctx="userName"
                               onClick={this.updateUserData.bind(this)}>
                      <span className="glyphicon glyphicon-ok" data-inputctx="userName"/>
                    </button>)
                    : null
              }

            </div>
            <div className="form-group col-xs-12">
              <label htmlFor="userPagePassInput" className="col-xs-12">Пароль: </label>
              <input type="password" className="form-control col-xs-12"
                     defaultValue={authData.pass}
                     onChange={this.updateFormInputState.bind(this)} data-inputctx="pass"/>
              {
                (userPageData.pass)
                    ? (<button className={"btn updateUserInfoButton " + userPageData.pass_status} data-inputctx="pass"
                               onClick={this.updateUserData.bind(this)}>
                      <span className="glyphicon glyphicon-ok" data-inputctx="pass"/>
                    </button>)
                    : null
              }

            </div>
          </form>
        </div>
    )
  }
}