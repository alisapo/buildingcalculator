import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import DenyButton from './DenyButton';

class Floors extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="step">Шаг 2</div>
        <div className="variations">
          <div className="subheader">Количество этажей (число):</div>
          <div className="data-parameters">
            <input
              type="number"
              className="height"
              value={this.props.height}
              onChange={(e) => this.props.setHeight(e.target.value)}
            />
          </div>
        </div>
        <div className="buttons">
          <DenyButton />
          <Link to="/materials">
            <input className="next-button" type="button" value="Далее" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Floors;
