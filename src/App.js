import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import * as ReactBootStrap from "react-bootstrap";

import Home from "./Home";
import Login from "./components/login/login";
import Menu from "./components/dashboard/Navbar";
import Usuarios from "./components/usuarios/usuarios";
import Disableuser from "./components/usuarios/disableUser"
import Recuperar from "./components/login/recuperar"; 
import Agenda from "./components/Agenda/agenda";
// import Hclinicas from "./components/hclinicas/hclinicas";
// import Agenda from "./components/agenda/agenda";
// import Calendario from "./components/agenda/calendario";

function App() {
  const storage = window.localStorage.getItem("email");
  return (
    <div>
      <BrowserRouter>
        {storage && <Menu />}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/usuarios" component={Usuarios} />
          <Route path="/disableUser" exact component={Disableuser}/>
          <Route path="/recuperar" exact component={Recuperar} />
          <Route path="/agenda" exact component={Agenda} />
          <Route
            component={() => (
              <div className="ed-grid">
                <h1>Error 404</h1>
                <span>Pagina no encontrada</span>
              </div>
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
