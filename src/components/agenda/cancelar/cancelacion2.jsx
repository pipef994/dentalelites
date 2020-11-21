import React, { useState, Fragment, useEffect } from 'react';
import DiUserImg from '../../images/cancelCita.png'
import { useForm } from "react-hook-form";
import {
  Table,
  Button,
  Container,
} from "reactstrap";
import "./cancelacion2.css";
import Swal from 'sweetalert2';


const Cancelacion = (props) => {
  const { register, errors, handleSubmit, setError, clearError } = useForm();
  const [citas, setCitas] = useState([]);

  const consultarCitas = (data) => {
    let email = data.email;

    fetch(`http://localhost:8080/citas/consultarCitasUser/${email}`, {
      method: 'GET',
    }).then(res => res.json()).
      then(res => {
        if (res.mensaje === 'OK') {
          tratarDatos(res.data);
        }
      })
  }

  const tratarDatos = (data) => {
    let datos = data.map(function (elem) {
      return elem.calendario;
    })
    setCitas(datos);
    return datos;
  }

  const renderCitas = (data, index) => {
    let fecha = new Date(data.date);
    fecha.toLocaleDateString();
    return (
      <tr key={index}>
        <td>{fecha.toLocaleDateString()}</td>
        <td>{data.hour}</td>
        <td>
          <Button color="danger" className="btn4">Eliminar</Button>
        </td>
      </tr>
    )
  }

  return (
    <Fragment>
      <form className="disableUSer" onSubmit={handleSubmit(consultarCitas)}>
        <div className="base-container">
          <div className="header">Cancelar Cita</div>
          <br />
          <div className="content">
            <div className="form">
              <div className="form-group">
                <label htmlFor="email">Correo</label>
                <input type="email" id="email" name="email"
                  placeholder="Ingrese el correo"
                  ref={register({
                    required: { value: true, message: 'Campo obligatorio' }
                  })} />
                {errors.email &&
                  <span className="text-danger text-small d-block mb-2">
                    {errors.email.message}
                  </span>
                }
              </div>
              <div className="footer">
                <button type="submit" className="btn" id="submit" name="submit">
                  Consultar citas
                </button>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </form>
      <Container>
        <Table>
          <thead>
            <tr>
              <th>Fecha cita</th>
              <th>Hora Cita</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {citas.map(renderCitas)}
          </tbody>
        </Table>
      </Container>
    </Fragment>
  )

}

export default Cancelacion;