import React from "react";
import {Router, Route, IndexRoute, browserHistory} from "react-router";

import Catalog from "./catalog/app-catalog";
import Cart from "./cart/app-cart";

import Template from "./template";

const getRoutes = () => (
  <Route component={Template}>
    <Route path="/" component={Catalog} />
    <Route path="cart" component={Cart}></Route>
  </Route>
);

export default () => {
  return (
    <Router history={browserHistory}>
      {getRoutes()}
    </Router>
  );
};