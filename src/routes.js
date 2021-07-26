import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "./Pages/Home";
import CreateClient from "./Pages/CreateClient";
import CreateProduct from "./Pages/CreateProduct";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/create-client" component={CreateClient} />
        <Route path="/create-product" component={CreateProduct} />
      </Switch>
    </BrowserRouter>
  );
}
