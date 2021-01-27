import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import DenyButton from './DenyButton';

const buildingsData = [
  { number: '1', name: 'Жилой дом' },
  { number: '2', name: 'Гараж' }
];

class Home extends Component {
  linkTo = () => {
    if (this.props.building == '1') return '/floors';
    return '/materials';
  }

  checked = (number) => {
    if (this.props.building !== number) return false;
    return true;
  }

  render() {
    return (
      <div className="container">
        <div className="step">Шаг 1</div>
        <div className="variations">
          <div className="subheader">Что будем строить?</div>
          <div className="data">
            {buildingsData.map(building =>
              <div className="field" key={building.number}>
                <input
                  type="checkbox"
                  checked={this.checked(building.number)}
                  name="building"
                  value={building.number}
                  onChange={(e) => this.props.setBuilding(e.target.value)}
                />
                <Link
                  to={(building.number == '1')
                    ? './floors'
                    : './materials'}
                  className="linked"  
                  onClick={(e) => this.props.setBuilding(building.number)}
                >
                  {building.name}
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="buttons">
          <DenyButton />
          <Link to={this.linkTo()}>
            <input className="next-button" type="button" value="Далее" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
