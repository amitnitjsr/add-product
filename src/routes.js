import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import App from './Container/home/App';
import Product from './Container/Product/Table';
import AddProduct from './Container/Product/Add';
import PageNotFound from './Container/PageNotFound';
import Login from './Container/Login/login1'
// import PreLoading from './Component/PreLoading';


const routes = (props) => {
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={Login} />
                <Route
                    exact
                    path="/product"
                    component={Product} />
                <Route
                    exact
                    path="/product/new"
                    component={AddProduct} />
                <Route
                    exact
                    path="/product/edit/:id"
                    component={AddProduct} />
                <Route
                    path=""
                    component={PageNotFound} />
            </Switch>
        </Router>
    );
}

export default routes;