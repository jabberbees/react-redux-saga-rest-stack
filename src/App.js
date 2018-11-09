import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Main from './Main';
import SignIn from './SignIn';

class App extends Component {
  render() {
    return (
      <Switch>
        <ProtectedRoute exact path="/" component={Main} />
        <Route exact path="/signin" component={SignIn} />
      </Switch>
    );
  }
}

export default App;
