import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom'
import {createBrowserHistory} from 'history';
import {Provider} from "react-redux"

import store from "./store"

// Containers
import Full from './containers/Full/'

// Views
import FrontPage from './views/Pages/FrontPage/FrontPage'
import Login from './components/Login/LoginContainer'
import Register from './views/Pages/Register/'
import Page404 from './views/Pages/Page404/'
import Page500 from './views/Pages/Page500/'
import GymsPage from './views/Institutions/GymsPage'

const history = createBrowserHistory();

ReactDOM.render((
  <Provider store={store}>
    <HashRouter history={history}>
      <Switch>
        <Route exact path="/login" name="Login Page" component={Login}/>
        <Route exact path="/register" name="Register Page" component={Register}/>
        <Route exact path="/404" name="Page 404" component={Page404}/>
        <Route exact path="/500" name="Page 500" component={Page500}/>
        <Route path="/home" name="Home" component={FrontPage}/>
        <Route path="/" name="Home" component={Full}/>
      </Switch>
    </HashRouter>
  </Provider>
), document.getElementById('root'))
