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
              <ReactBootStrap.NavDropdown.Item href="/usuarios">
                Crear
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="/disableUser">
                Deshabilitar
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="/listUser">
                Consultar
              </ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
            <ReactBootStrap.NavDropdown
              title="Agenda"
              id="collasible-nav-dropdown"
            >
              <ReactBootStrap.NavDropdown.Item href="/agenda">
                Agendar
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="/cancelacion">
                Cancelar
              </ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
            <ReactBootStrap.NavDropdown
              title="Historia Clinica"
              id="collasible-nav-dropdown"
            >
              <ReactBootStrap.NavDropdown.Item href="/historia-clinica">
                Crear
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.3">
                Modificar
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.3">
                Consultar
              </ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
            <ReactBootStrap.Nav.Link href="/logout">
              Cerrar Sesion
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    );
  }
}
Navbar = withRouter(Navbar);
export default Navbar;
