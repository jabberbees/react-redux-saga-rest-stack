import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './actions';

class Main extends Component {
  render() {
    const { error, busy, successes, failures } = this.props;

    var errorComponent = (error) ? (
      <p>Error: {error}.</p>
    ) : null;

    return (
      <div className="App">
        <p>Successes: {successes}, failures: {failures}.</p>
        <button onClick={() => { this.props.actions.signOut(); }}>
          Sign out
        </button>
        &nbsp;
        <button onClick={() => { this.props.actions.fakeTokenExpiry(); }}>
          Fake token expiry
        </button>
        &nbsp;
        <button onClick={() => { this.props.actions.doSomething(); }}>
          Do something!
        </button>
        <p>API: {busy ? "busy" : "idle"}.</p>
        {errorComponent}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error,
  busy: state.api.working,
  successes: state.api.successes,
  failures: state.api.failures,
});

function matchDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(Main);
