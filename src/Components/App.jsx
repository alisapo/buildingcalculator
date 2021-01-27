import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';

import Home from '../Containers/Home'
import Floors from '../Containers/Floors';
import Materials from '../Containers/Materials';
import Parameters from '../Containers/Parameters';
import Price from '../Containers/Price';

import store from '../Store';

import '.././App.css';

const storeS = store();
const history = syncHistoryWithStore(
  createBrowserHistory({
    basename: process.env.PUBLIC_URL,
  }),
  storeS
);

class App extends React.Component {
  render() {
    return(
      <div className="app">
        <div className="header">Калькулятор цены конструкций</div>
        <Router history={history}>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/floors' exact component={Floors} />
            <Route path='/materials' exact component={Materials} />
            <Route path='/parameters' exact component={Parameters} />
            <Route path='/price' exact component={Price} />
          </Switch>        
        </Router>
      </div>
    )
  }
}

export default App;
