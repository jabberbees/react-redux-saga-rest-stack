import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clean, pending, rejected, fulfilled, done } from 'redux-saga-thunk';

import * as actions from './actions';
import { DO_SOMETHING_WITH_PROMISE_REQUEST } from './actionTypes';

class Main extends Component {
  componentDidMount() {
    this.props.actions.fakeTokenExpiry(false);
    this.props.actions.fakeError(false);
  }

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
        <button onClick={() => { this.props.actions.doSomething(); }}>
          Do something!
        </button>
        &nbsp;
        <button onClick={() => {
          this.props.actions.doSomethingWithPromise()
            .then(() => {
              console.log('Yaay!');
            })
            .catch((error) => {
              console.log('Oops!', error)
            });
        }}>
          Do something with promise!
        </button>
        <div>
          <input type="checkbox" id="api-token-expired"
            onChange={e => { this.props.actions.fakeTokenExpiry(e.target.checked); }}
          />
          <label htmlFor="api-token-expired">Simulate API token expired</label>
        </div>
        <div>
          <input type="checkbox" id="api-error"
            onChange={e => { this.props.actions.fakeError(e.target.checked); }}
          />
          <label htmlFor="api-error">Simulate API error</label>
        </div>
        <div>
          <p>API: {busy ? "busy" : "idle"}.</p>
        </div>
        <div>
          <p>Something with promise status:
            {this.props.somethingWithPromisePending ? " pending" : ""}
            {this.props.somethingWithPromiseRejected ? " rejected" : ""}
            {this.props.somethingWithPromiseFulfilled ? " fulfilled" : ""}
            {this.props.somethingWithPromiseDone ? " done" : ""}
            &nbsp;
            <span
              style={{
                textDecoration: 'underline',
                color: 'blue',
                cursor: 'pointer'
              }}
              onClick={() => this.props.actions.clearSomethingWithPromiseStatus()}>
              clear
            </span>
          </p>
        </div>
        <div>
          {errorComponent}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error,
  busy: state.api.working,
  successes: state.api.successes,
  failures: state.api.failures,
  somethingWithPromisePending: pending(state, DO_SOMETHING_WITH_PROMISE_REQUEST),
  somethingWithPromiseRejected: rejected(state, DO_SOMETHING_WITH_PROMISE_REQUEST),
  somethingWithPromiseFulfilled: fulfilled(state, DO_SOMETHING_WITH_PROMISE_REQUEST),
  somethingWithPromiseDone: done(state, DO_SOMETHING_WITH_PROMISE_REQUEST)
});

function matchDispatchToProps(dispatch) {
  return {
    actions: {
      ...bindActionCreators(actions, dispatch),
      clearSomethingWithPromiseStatus: () => dispatch(clean(DO_SOMETHING_WITH_PROMISE_REQUEST))
    }
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(Main);
