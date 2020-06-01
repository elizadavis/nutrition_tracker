import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Header from './layout/Header';
import Dashboard from './foods/Dashboard';
import Alerts from './layout/Alerts';
import Login from './accounts/Login';
import Register from './accounts/Register';
import Meals from './meals/Meals';
import PrivateRoute from './shared/PrivateRoute';
import { loadUser } from '../actions/auth';
import { Provider } from 'react-redux';
import store from '../store';

const alertOptions = {
  timeout: 3000,
  position: 'top center'
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  

  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <Router>
          <Header />
          <Alerts />
            <div className="container">
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <PrivateRoute exact path='/meals' component={Meals} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </div>
        </Router>
      </AlertProvider>
    </Provider>
  )

}

ReactDOM.render(<App />, document.getElementById('app'));
