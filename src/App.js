import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import * as ReactBootStrap from "react-bootstrap";

import Login from "./components/login/login";
import Menu from "./components/dashboard/Navbar";
// import Usuarios from "./components/usuarios/usuarios";
// import Hclinicas from "./components/hclinicas/hclinicas";
// import Agenda from "./components/agenda/agenda";
// import Calendario from "./components/agenda/calendario";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={Login}>
            <Login />
          </Route>
          <Route path="/Navbar">
            <Menu />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
    //  <div>
    //    <BrowserRouter>
    //     <div>
    //       <Menu/>
    //     </div>
    //    </BrowserRouter>
    //  </div>
  );
}

export default App;
