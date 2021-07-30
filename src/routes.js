import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "./Pages/Home";
import Client from "./Pages/Client";
import Product from "./Pages/Product";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/client" component={Client} />
        <Route path="/product" component={Product} />
      </Switch>
    </BrowserRouter>
  );
}
