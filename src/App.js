import React from 'react';
import { Provider } from 'react-redux'
import { persistor, store } from './redux/Store';
import { PersistGate } from 'redux-persist/integration/react';
import { Route } from 'react-router-dom';
import Routes from './routers/routes';
import Signin from './Container/Login/Signin';
import Signup from './Container/Login/Signup';
import PageNotFound from './Container/PageNotFound';
import PrivateRoute from './routers/PrivateRoute';
// import PreLoading from './Component/PreLoading';

const App = (props) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate
          // loading={PreLoading}
          persistor={persistor}>
          <Routes />
          {/* <PrivateRoute exact path="/" component={Routes} /> */}
          {/* <Route
            exact
            path="/"
            component={Signin} /> */}
          {/* <Route
            exact
            path="/signup"
            component={Signup} />
          <Route
            path=""
            component={PageNotFound} /> */}
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
