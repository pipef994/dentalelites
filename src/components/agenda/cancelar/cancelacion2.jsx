import React, { useState, Fragment, useEffect } from 'react';
import * as ReactBootStrap from "react-bootstrap";
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
  const [citas2, setCitas2] = useState([]);

  const renderUser = (cita, index) => {
    let fecha = new Date(cita.date);
    let dsfsda = fecha.toLocaleDateString() + cita.hour;
    return (
      <tr key={dsfsda}>
        <td>{fecha.toLocaleDateString()}</td>
        <td>{cita.hour}</td>
        <td>
          <Button color="danger" className="btn4" onClick={() => eliminar(cita)}> Eliminar</Button>
        </td>
      </tr>
    )
  }

  const consultarCitas = (data) => {
    let fecha = new Date();
    fecha.setDate(1);
    fecha.setHours(0, 0, 0, 0);
    fecha = fecha.toISOString();
    let email = data.email;
    fetch(`http://localhost:8080/citas/consultarCitasUser/${email}/${fecha}`, {
      method: 'GET',
    }).then(res => res.json()).
      then(res => {
        if (res.mensaje === 'OK') {
          tratarDatos(res.data);
        }
      }).catch(e => console.log(e));
  }

  const tratarDatos = (data) => {
    let datos = data.map(function (elem) {
      return elem.calendario;
    })
    setCitas(datos);
  }
  const eliminar = (dato) => {
    Swal.fire({
      title: 'Esta seguro de cancelar la cita?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Si`,
      denyButtonText: `No`,
      customClass: {
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      }
    }).then((result) => {
      let registros = [...citas];
      if (result.isConfirmed) {
        let contador = 0;
        console.log(dato);
        registros.map((registro) => {
          if (registro.date == dato.date) {
            registros.splice(contador, 1)
          }
          contador++;
        });
        setCitas(registros);
      } else if (result.isDenied) {
        Swal.fire('La cita no se cancelo', '', 'info')
      }
    })
  }

  console.log(citas);
  console.log('render');
  return (
    <form className="listUser" onSubmit={handleSubmit(consultarCitas)}>
      <div className="base-container">
        <h5><strong>Cancelar Cita</strong></h5>
        <br />
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
          <br />
          <br />
          <ReactBootStrap.Table striped bordered hover>
            <thead>
              <tr>
                <th>Fecha cita</th>
                <th>Hora Cita</th>
                <th>Acciónn</th>
              </tr>
            </thead>
            <tbody>
              {citas.map(renderUser)}
            </tbody>
          </ReactBootStrap.Table>
        </div>
      </div>
    </form>
  )
}


export default Cancelacion;