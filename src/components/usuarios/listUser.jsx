import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import "./listUser.scss";
import * as ReactBootStrap from "react-bootstrap";

const ListUser = (props) => {
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => { //Cada vez que cambia los valores 
    fetch('http://localhost:8080/usuarios/', {
      method: 'GET'
    }).then(res => res.json())
      .then(res => {
        console.log(res);
        setUsuarios(res.data); // Con esto tengo la información 
      })
      .catch(e => console.log(e));
  }, [])

  const renderUser = (usuario, index) => {
    return (
      <tr key={index}>
        <td>{usuario.nId}</td>
        <td>{usuario.firstName}</td>
        <td>{usuario.secondName}</td>
        <td>{usuario.firstLastName}</td>
        <td>{usuario.secondLastName}</td>
        <td>{usuario.activo ? "Activo" : "Inactivo"}</td>
      </tr>
    )
  }

  return (
    <div className="listUser">
      <div className="base-container">
        <h5><strong>Usuarios en el sistema</strong></h5>
        <div className="form">
          <div className="form-row">
            <div clas></div>
            <ReactBootStrap.Table striped bordered hover>
              <thead>
                <tr>
                  <th>Documento</th>
                  <th>Primer Nombre</th>
                  <th>Segundo Nombre</th>
                  <th>Primer Apellido</th>
                  <th>Segundo Apellido</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map(renderUser)}
              </tbody>
            </ReactBootStrap.Table>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ListUser;