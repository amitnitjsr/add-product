import React from 'react';
import { Route, Redirect, Router } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Router>
        <Route {...rest} render={props => (
            localStorage.getItem('user')
                ? <Component {...props} />
                : <Redirect to='/' />
        )} />
    </Router>
)

export default PrivateRoute;