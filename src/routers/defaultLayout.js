import React, { Component } from 'react'
import routes from './routes';
import PrivateRoute from './PrivateRoute';
import { Switch, Redirect } from 'react-router-dom';
export default class defaultLayout extends Component {
    render() {
        return (
            <div>
                <Switch>
                    {routes.map((route, idx) => {
                        return route.component ? (
                            <PrivateRoute
                                key={idx}
                                path={route.path}
                                component={route.component}
                            />
                        ) : null;
                    })}
                    <Redirect from='/' to='/product' />
                </Switch>
            </div>
        )
    }
}
