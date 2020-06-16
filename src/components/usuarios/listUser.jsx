import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import "./listUser.scss";

function ListUser(props) {

  const [formData, setFormData] = useState(props.formData || {
    tip: '',
    nId: ''
  })

  const onChange = (e) => {
    const newState = {
      ...formData,
      [e.target.name]: e.target.value
    }
    setFormData(newState)
    props.updateValues(newState)
  }

  return (
    <div className="listUser">
      <div className="base-container">
        <h5><strong>Lista de usuarios</strong></h5>
        <div className="form">
          <div className="form-row">
            <div clas></div>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>N° Identificación</th>
                  <th>Nombre</th>
                  <th>Tipo de Usuario</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )

}

export default ListUser;