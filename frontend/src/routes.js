import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";

import CrustPick from "./components/CrustPick";
import SizePick from "./components/SizePick";
import SauceCheck from "./components/SauceCheck";
import ToppingPick from "./components/ToppingPick";
import Confirmation from "./components/Confirmation";
import Finish from "./components/Finish";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <App>
          <CrustPick />
        </App>
      </Route>
      <Route exact path="/crust-pick">
        <App>
          <CrustPick />
        </App>
      </Route>
      <Route exact path="/size-pick">
        <App>
          <SizePick />
        </App>
      </Route>
      <Route exact path="/sauce-check">
        <App>
          <SauceCheck />
        </App>
      </Route>
      <Route exact path="/topping-pick">
        <App>
          <ToppingPick />
        </App>
      </Route>
      <Route exact path="/confirmation">
        <App>
          <Confirmation />
        </App>
      </Route>
      <Route exact path="/finish">
        <App>
          <Finish />
        </App>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
