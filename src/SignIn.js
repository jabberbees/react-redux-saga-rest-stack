import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { signIn } from './actions';

class SignIn extends PureComponent {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const login = this.login.value;
    const password = this.password.value;
    this.props.dispatch(signIn(login, password));
  }

  render() {
    const { error, isAuthenticated } = this.props;

    if (isAuthenticated) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <div>
          <input
            ref={_ref => this.login = _ref}
            type="text"
            placeholder="SignIn"
          />
        </div>
        <div>
          <input
            ref={_ref => this.password = _ref}
            type="password"
            placeholder="password"
          />
        </div>
        <div>
          <button onClick={this.onSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error
});

export default connect(mapStateToProps)(SignIn);
