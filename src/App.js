import React from 'react';
import { Provider } from 'react-redux'
import { persistor, store } from './redux/Store';
import { PersistGate } from 'redux-persist/integration/react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Signin from './Container/Login/Signin';
import Signup from './Container/Login/Signup';
import PageNotFound from './Container/PageNotFound';
import PrivateRoute from './routers/PrivateRoute';
// import PreLoading from './Component/PreLoading';
import DefaultLayout from './routers/defaultLayout';
// import { addNewProduct } from './redux/product/Action';
import Product from './Container/Product/Table';
import AddProduct from './Container/Product/Add';

const App = (props) => {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <Provider store={store}>
          <PersistGate
            persistor={persistor}>
            <Switch>
              <Route
                exact
                path="/signin"
                component={Signin} />
              <Route
                exact
                path="/signup"
                component={Signup} />
              <PrivateRoute exact path="/" component={DefaultLayout} />
              <PrivateRoute exact path="/product" component={Product} />
              <PrivateRoute exact path="/product/new" component={AddProduct} />
              <PrivateRoute exact path="/product/edit/:id" component={AddProduct} />
              <Route
                path=""
                component={PageNotFound} />
            </Switch>
          </PersistGate>
        </Provider>
      </React.StrictMode>
    </BrowserRouter>
  );
}

export default App;
