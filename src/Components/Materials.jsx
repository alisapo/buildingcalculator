import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import DenyButton from './DenyButton';

class Materials extends Component {
  getMaterials = () => {
    if (this.props.building == '1') return [
      {number: '1', name: 'Кирпич'},
      {number: '2', name: 'Шлакоблок'},
      {number: '3', name: 'Деревянный брус'}
    ];

    return [
      {number: '4', name: 'Металл'},
      {number: '2', name: 'Шлакоблок'},
      {number: '5', name: 'Сендвич-панели'}
    ];
  }

  checked = (number) => {
    if (this.props.material !== number) return false;
    return true;
  }

  render() {
    return (
      <div className="container">
        <div className="step">Шаг 3</div>
        <div className="variations">
          <div className="subheader">Материал стен:</div>
          <div className="data">
            {this.getMaterials().map(material =>
              <div key={material.number}>
                <input
                  type="checkbox"
                  checked={this.checked(material.number)}
                  name="material"
                  value={material.number}
                  onChange={(e) => this.props.setMaterial(e.target.value)}
                />
                <Link
                  to="/parameters"
                  className="linked"
                  onClick={(e) => this.props.setMaterial(material.number)}
                >
                  {material.name}
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="buttons">
          <DenyButton />
          <Link to="/parameters">
            <input className="next-button" type="button" value="Далее" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Materials;
