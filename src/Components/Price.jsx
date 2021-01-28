import React, { Component } from 'react';

import DenyButton from './DenyButton';

const url = "https://data.techart.ru/lab/json/?building=";

class Price extends React.Component {
  componentWillMount() {
    fetch(
      `${url}
      ${this.props.building}
      &height=${this.props.height}
      &material=${this.props.material}
      &sizex=${this.props.sizex}
      &sizey=${this.props.sizey}`)
      .then(res => res.json())
      .then((res) => {
        this.props.result(res);
      });
  }

  getCalculation = () => {
    if (this.props.status == 'error') return (
      <div className="variations">
        <div className="subheader">Ошибка</div>
        <div className="data-error">
          {!this.props.message ? 'Считаю...' : this.props.message}
        </div>
      </div>
    );

    return(
      <div className="variations">
        <div className="subheader">Успешно</div>
        <div className="data-success">
          Цена строения: {!this.props.message ? 'Считаю...' : this.props.message}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        <div className="step">Результат расчёта</div>
        {this.getCalculation()}
        <div className="buttons">
          <DenyButton />
        </div>
      </div>
    );
  }
}

export default Price;
