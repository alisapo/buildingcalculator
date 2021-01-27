import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as itemsActions from '../Actions/Calculations';

const DenyButton = ({ deny, status }) => {
  return (
    <div>
      <Link to="/">
        <input
          className="deny-button"
          type="button"
          value={!status ?
            "Отмена"
            : "Новый расчёт"}
          onClick={deny}
        />
      </Link>
    </div>
  );
}

const mapStateToProps = ({ buildings }) => ({ 
  status: buildings.status,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(itemsActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DenyButton);
