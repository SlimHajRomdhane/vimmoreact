/*!

=========================================================
* Now UI Dashboard PRO React - v1.5.1
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v=1.5.0";
import "assets/css/demo.css";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Route
        path="/admin"
        render={(props) => {
          return <AdminLayout {...props} />;
        }}
      />
      <Route
        path="/auth"
        render={(props) => {
          return <AuthLayout {...props} />;
        }}
      />
      <Redirect to="/admin/dashboard" />
    </Switch>
  </BrowserRouter>
);
