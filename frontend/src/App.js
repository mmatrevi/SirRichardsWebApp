import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Content from "./components/Content";
import register from "./components/auth/register";
import Login from "./components/auth/Login";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Content} />
          <Route exact path="/register" component={register} />
          <Route exact path="/Login" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
