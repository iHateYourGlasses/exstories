import React, {Component} from 'react';

export default class CardForm extends Component {
  updateNameState(e) {
    this.props.updateNameState(e.target.value);
  }

  updateDescState(e) {
    this.props.updateDescState(e.target.value);
  }

  CreateNewCard(e) {
    let storiesArray = this.props.stories, curMaxId = 0;

    storiesArray.map((entry, index) =>
        curMaxId = entry.id > curMaxId ? entry.id : curMaxId
    )

    this.props.CreateNewCard(++curMaxId, this.props.cardForm.title, this.props.cardForm.desc, this.props.cardForm.publishType);
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
                      defaultValue={this.props.cardForm.desc}></textarea>
          </div>
          <div className='form-group'>
            <label htmlFor="cardDescription">Опубликовать:</label>
            <select className="form-control" name="publishType" id="publishType"
                    defaultValue={this.props.isSigned ? 'От своего имени' : 'Анонимно' }>
              <option value="Анонимно">Анонимно</option>

              {
                (this.props.isSigned)
                    ? <option value="От своего имени">От своего имени</option>
                    : null
              }

            </select>
          </div>
          <button type="button" className="btn btn-primary" onClick={this.CreateNewCard.bind(this)}>Сохранить</button>
        </form>
    )
  }
}