import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import "./App.scss";

import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';
import Usuarios from './components/usuarios/usuarios';
import Hclinicas from './components/hclinicas/hclinicas';
import Agenda from './components/agenda/agenda';
import Calendario from './components/agenda/calendario';

function App() {
  return (
    <Router>
    {/* <div className="container text-center ">
      <div className="btn-group">
        <NavLink to="/login" className ="btn btn-dark" activeClassName="active">
          login
        </NavLink>
        <NavLink to="/usuarios" className ="btn btn-dark" activeClassName="active">
         usuarios
        </NavLink>
        <NavLink to="/agenda" className ="btn btn-dark" activeClassName="active">
         agenda
        </NavLink>
        <NavLink to="/Calendario" className ="btn btn-dark" activeClassName="active">
         Calendario
        </NavLink>
        <NavLink to="/hclinicas" className ="btn btn-dark" activeClassName="active">
         Historias Clinicas
        </NavLink>
      </div>
      <hr/> */}
      {/* <Route path="/login" exact component={Login} /> */}
      <Switch>
        <Route path="/login" exact component={Login}> 
          <Login />
        </Route>
        <Route path="/dashboard">
         <Dashboard />
        </Route>
        <Route path="/usuarios">
          <Usuarios />
        </Route>
        <Route path="/hclinicas">
          <Hclinicas />
        </Route>
        <Route path="/agenda">
          <Agenda />
        </Route>
        <Route path="/calendario">
          <Calendario />
        </Route>
        <Route path="/hclinicas">
          <Hclinicas />
        </Route>
        <Route component={
          () => <div className="ed-grid">
            <h1>Error 404</h1>
            <span>Pagina no encontrada</span>
          </div>
        }/>
      </Switch>
    {/* </div> */}
    </Router>
  );
  
}

export default App;
