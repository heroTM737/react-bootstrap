import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import Dashboard from './component/Dashboard';
import Catalog from './component/Catalog';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/catalog" component={Catalog} />
        </Switch>
      </Router>
    );
  }
}

export default App;
