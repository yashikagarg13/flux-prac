import React from "react";
import {Router, Route, IndexRoute, browserHistory} from "react-router";

import Catalog from "./catalog/app-catalog";
import Cart from "./cart/app-cart";
import CatalogItemWrapper from "./catalog/catalog-item-wrapper";

import Template from "./template";

const getRoutes = () => (
  <Route component={Template}>
    <Route path="/" component={Catalog} />
    <Route path="cart" component={Cart}></Route>
    <Route path="catlog-item/:id" component={CatalogItemWrapper}></Route>
  </Route>
);

export default () => {
  return (
    <Router history={browserHistory}>
      {getRoutes()}
    </Router>
  );
};