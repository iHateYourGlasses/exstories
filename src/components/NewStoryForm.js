import React, {Component} from 'react';

export default class CardForm extends Component {
  updateNameState(e) {
    this.props.updateNameState(e.target.value);
  }

  updateDescState(e) {
    this.props.updateDescState(e.target.value);
  }

  CreateNewCard(e) {/*
    let storiesArray = this.props.stories, curMaxId = 0;

    storiesArray.map((entry, index) =>
        curMaxId = entry.id > curMaxId ? entry.id : curMaxId
    )*/

    this.props.CreateNewCard(this.props.cardForm, this.props.authData);
  }

  render() {
    return (
        <form className="form">
          <div className='form-group'>
            <label htmlFor="cardName">Имя:</label>
            <input type="text" className="form-control" id="cardName" onChange={this.updateNameState.bind(this)}
                   defaultValue={this.props.cardForm.title}/>
          </div>
          <div className='form-group'>
            <label htmlFor="cardDescription">Описание:</label>
            <textarea className="form-control" rows="5" id="cardDescription" onChange={this.updateDescState.bind(this)}
                      defaultValue={this.props.cardForm.desc} />
          </div>
          <div className='form-group'>
            <label htmlFor="cardDescription">Опубликовать:</label>
            <select className="form-control" name="publishType" id="publishType"
                    defaultValue={this.props.authData.isSigned ? 'От своего имени' : 'Анонимно' }>
              <option value="Анонимно">Анонимно</option>

              {
                (this.props.authData.isSigned)
                    ? <option value="От своего имени">От своего имени</option>
                    : null
              }

            </select>
          </div>
          <button type="button" className="btn btn-primary" onClick={this.CreateNewCard.bind(this)}>Сохранить</button>
          {
            (this.props.cardForm.status === 'loading')
                ? <div className="loader"></div>
                : null
          }
          {
          (this.props.cardForm.status === 'success' || this.props.cardForm.status === 'error' )
              ? <p>{this.props.cardForm.message}</p>
              : null
          }
        </form>
    )
  }
}