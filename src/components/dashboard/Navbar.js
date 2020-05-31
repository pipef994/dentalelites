import React from "react";
import { Link, withRouter } from "react-router-dom";

import * as ReactBootStrap from "react-bootstrap";

class Navbar extends React.Component {
  getNavLinkClass = (path) => {
    return this.props.location.pathname === path ? "active" : "";
  };

  render() {
    return (
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <ReactBootStrap.Navbar.Brand href="/home">
          Dental Elite
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.NavDropdown
              title="Usuarios"
              id="collasible-nav-dropdown"
            >
              <ReactBootStrap.NavDropdown.Item href="Usuarios">
                <Link to="usuarios">
                  Crear
                </Link>
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="DisableUser">
                <Link to="disableUser">
                  Inhabilitar
                </Link>
              </ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
            <ReactBootStrap.NavDropdown
              title="Agenda"
              id="collasible-nav-dropdown"
            >
              <ReactBootStrap.NavDropdown.Item href="Agenda">
                <Link to="agenda"> Agenda </Link>
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/2.2">
                Cancelar
              </ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>

            <ReactBootStrap.NavDropdown
              title="Historia Clinica"
              id="collasible-nav-dropdown"
            >
              <ReactBootStrap.NavDropdown.Item href="#action/3.1">
                Crear
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.2">
                Modificar
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.3">
                Consultar
              </ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    );
  }
}
Navbar = withRouter(Navbar);
export default Navbar;
