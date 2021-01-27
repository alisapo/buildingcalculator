import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import DenyButton from './DenyButton';

class Parameters extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="step">Шаг 4</div>
        <div className="variations">
          <div className="subheader">Длина стен (в метрах):</div>
          <div className="data-parameters">
            <input
              type="number"
              className="sizex"
              value={this.props.sizex}
              onChange={(e) => this.props.setSizeX(e.target.value)}
            />
            <div className="separator">X</div>
            <input
              type="number"
              className="sizey"
              value={this.props.sizey}
              onChange={(e) => this.props.setSizeY(e.target.value)}
            />
          </div>
        </div>
        <div className="buttons">
          <DenyButton />
          <Link to="/price">
            <input className="next-button" type="button" value="Рассчитать" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Parameters;
