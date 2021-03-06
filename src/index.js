import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import store from './store';
import { loadState } from './localStorage';
import { userIsNotAuthenticatedRedir, userWithoutRoleRedir } from './auth/auth';
import { configApiHost, setAuthToken } from './axiosConfiguration';
import registerServiceWorker from './registerServiceWorker';
// Containers
import Full from './containers/Full/';
// Views
import FrontPage from './views/Pages/FrontPage/FrontPage';
import Login from './containers/Login/LoginContainer';
import ForgotPassword from './containers/Login/ForgotPasswordContainer';
import Register from './containers/Register/RegisterContainer';
import FinishRegisterContainer from './containers/Register/FinishRegisterContainer';
import ConfirmEmail from './containers/Register/ConfirmEmailContainer';
import ResetPassword from './containers/Login/ResetPasswordContainer';

import Page404 from './views/Pages/Page404/';
import Page500 from './views/Pages/Page500/';
import Payments from './views/Pages/Payments/Payments';

import './styles/accord.css';

const history = createBrowserHistory();

configApiHost();

const persistedState = loadState();

if (persistedState != undefined && persistedState.Account != undefined) {
    setAuthToken(persistedState.Account.authToken);
}

console.log(window.location);
console.log(window.location.search);

ReactDOM.render(
    <Provider store={store}>
        <HashRouter history={history}>
            <Switch>
                <Route exact path="/login" name="Login Page" component={Login} />
                <Route
                    exact
                    path="/register/second_step"
                    name="Register second step"
                    component={FinishRegisterContainer}
                />
                <Route exact path="/register" name="Register Page" component={Register} />
                <Route exact path="/confirmemail" name="Confirm e-mail" component={ConfirmEmail} />
                <Route exact path="/forgotpassword" name="Forgot password" component={ForgotPassword} />
                <Route exact path="/resetpassword" name="Reset password" component={ResetPassword} />
                <Route exact path="/404" name="Page 404" component={Page404} />
                <Route exact path="/500" name="Page 500" component={Page500} />
                <Route exact path="/Payments" name="Payments" component={Payments} />
                <Route path="/home" name="Home" component={FrontPage} />
                <Route path="/" name="Home" component={userIsNotAuthenticatedRedir(userWithoutRoleRedir(Full))} />
            </Switch>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
