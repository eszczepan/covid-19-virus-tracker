import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "../routes";
import Home from "../pages/Home";
import News from "../pages/News";
import Info from "../pages/Info";
import Travel from "../pages/Travel";
import About from "../pages/About";

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.news} component={News} />
        <Route path={routes.info} component={Info} />
        <Route path={routes.travel} component={Travel} />
        <Route path={routes.about} component={About} />
      </Switch>
    </BrowserRouter>
  );
};

export default Root;
