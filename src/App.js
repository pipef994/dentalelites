import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";

import Home from "./Home";
import Login from "./components/login/login";
import Logout from "./components/login/logout";
import Menu from "./components/dashboard/Navbar";
import Usuarios from "./components/usuarios/usuarios";
import Disableuser from "./components/usuarios/disableUser";
import Recuperar from "./components/login/recuperar";
import Agenda from "./components/agenda";
import Calendario from "./components/agenda/cita";
import Hclinicas from "./components/hclinicas";

function App() {
  const [loginUpdate, setloginUpdate] = useState(
    window.localStorage.getItem("email")
  );
  const storage = window.localStorage.getItem("email");
  return (
    <div>
      <BrowserRouter>
        {/* {storage || true ? ( // Remover el || true cuando se vaya a publicar */}
        {storage ? ( // Remover el || true cuando se vaya a publicar
          <React.Fragment>
            <Menu />
            <Switch>
              {/* <Route path="/login" exact component={Login} />
          <Route path="/" exact component={Home}>
            {storage ? <Redirect to="/login" /> : <Login />}
          </Route> */}
              <Route path="/" exact component={Home} />
              <Route path="/usuarios" component={Usuarios} />
              <Route path="/disableUser" exact component={Disableuser} />
              <Route path="/agenda" exact component={Agenda} />
              <Route path="/calendario" exact component={Calendario} />
              <Route path="/historia-clinica" component={Hclinicas} />
              <Route
                path="/logout"
                exact
                render={(props) => (
                  <Logout {...props} updateLogin={setloginUpdate} />
                )}
              />
              <Route
                component={() => (
                  <div className="ed-grid">
                    <h1>Error 404</h1>
                    <span>Pagina no encontrada</span>
                  </div>
                )}
              />
            </Switch>
          </React.Fragment>
        ) : (
          <Switch>
            <Route
              path="/login"
              exact
              render={(props) => (
                <Login {...props} updateLogin={setloginUpdate} />
              )}
            />
            <Route path="/recuperar" component={Recuperar} />
            <Redirect from="*" to="/login" />
          </Switch>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
