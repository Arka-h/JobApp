/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import UserLayout from "layouts/User.js";
import AuthLayout from "layouts/Auth.js";
import { Provider }from 'react-redux'
import { createStore,applyMiddleware } from "redux";
import reducers from './reducers'
import reduxThunk from 'redux-thunk'
import Axios from "axios";

const store = createStore(reducers,{},applyMiddleware(reduxThunk))

const logout = props => {
    Axios({
      method: 'GET',
      withCredentials: true,
      url: "http://localhost:4000/logout"
  }).then((res)=>{
    console.log(res)
    window.location='/user'
  })
}
ReactDOM.render( 
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/user" render={props => <UserLayout {...props} />} />
        <Route path="/auth" render={props => <AuthLayout {...props} />} />
        <Route path="/logout" render={logout} />
        <Redirect from="/*" to="/user" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
