import PropTypes from 'prop-types';
import React from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class ProtectedRoute extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    
    render() {
        const { isProtected, signUp, isAuthenticated, component: Component, ...rest } = this.props;

        return (
            <Route
                {...rest}
                render={props => {
                    return (isAuthenticated || !isProtected) ? (
                        <Component {...props} />
                    ) : (
                        <Redirect
                            to={{
                                pathname: signUp ? "/signup" : "/signin",
                                state: { target: props.history.location }
                            }}
                        />
                    )
                }}
            />
        );
    }
}

ProtectedRoute.propTypes = {
    isAuthenticated: PropTypes.bool,
    isProtected: PropTypes.bool,
    signUp: PropTypes.bool
};

ProtectedRoute.defaultProps = {
    isProtected: true,
    signUp: false
};

function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated
    };
}

export default withRouter(connect(mapStateToProps)(ProtectedRoute));
