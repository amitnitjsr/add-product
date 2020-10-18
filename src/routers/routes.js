import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import App from '../Container/home/App';
import Product from '../Container/Product/Table';
import AddProduct from '../Container/Product/Add';
import PageNotFound from '../Container/PageNotFound';
import Signin from '../Container/Login/Signin';
import Signup from '../Container/Login/Signup';

// import PreLoading from './Component/PreLoading';


const routes = (props) => {
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={Signin} />
                <Route
                    exact
                    path="/signup"
                    component={Signup} />
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


