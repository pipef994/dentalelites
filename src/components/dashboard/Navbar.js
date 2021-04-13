import React from "react";
import "./Navbar.scss";
import { Link, withRouter } from "react-router-dom";

import * as ReactBootStrap from "react-bootstrap";

class Navbar extends React.Component {
  getNavLinkClass = (path) => {
    return this.props.location.pathname === path ? "active" : "";
  };
  render() {
    let perfil = window.localStorage.getItem("Perfil");

    return (
      <ReactBootStrap.Navbar className="color-nav" collapseOnSelect expand="lg">
        <ReactBootStrap.Navbar.Brand href="/home" className="texto">
          Dental Elite
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            {perfil === "admin" && (
              <ReactBootStrap.NavDropdown
                title="Administrar Usuarios"
                id="collasible-nav-dropdown"
              >
                <ReactBootStrap.NavDropdown.Item href="/usuarios">
                  Crear
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="/disableUser">
                  Gestionar
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="/listUser">
                  Consultar
                </ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
            )}
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
            {(perfil === "admin" || perfil === "odont" || perfil === "aux") && (
              <ReactBootStrap.NavDropdown
                title="Historia Clinica"
                id="collasible-nav-dropdown"
              >
                <ReactBootStrap.NavDropdown.Item href="/historia-clinica">
                  Crear
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="/evolucion">
                  Evolución
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="consultar-hc">
                  Consultar
                </ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
            )}
            {(perfil === "admin" || perfil === "odont" || perfil === "aux") && (
              <ReactBootStrap.Nav>
                <ReactBootStrap.Nav.Link href="/odontograma">
                  Odontograma
                </ReactBootStrap.Nav.Link>
              </ReactBootStrap.Nav>
            )}
            <ReactBootStrap.Nav>
              <ReactBootStrap.Nav.Link href="/valoracion">
                Valoración
              </ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
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
