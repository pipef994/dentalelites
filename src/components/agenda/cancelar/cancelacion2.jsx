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
import moment from 'moment';

const Cancelacion = (props) => {
  const { register, errors, handleSubmit, setError, clearError } = useForm();
  const [citas, setCitas] = useState([]);
  const [correocancelar, setCorreo] = useState();

  const renderUser = (cita, index) => {
    let fecha = new Date(cita.date);
    let id = cita.id;
    return (
      <tr key={id}>
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
    setCorreo(data.email);
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
    const dataAux = [];
    data.forEach(element => {
      dataAux.push({
        id: element.id,
        ...element.calendario
      });
    });
    setCitas(dataAux);
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
        registros.forEach(registro => {
          if (registro.id === dato.id) {
            registros.splice(contador, 1);
          }
          contador++;
        });

        fetch(`http://localhost:8080/citas/cancelarCita/${dato.id}`, {
          method: 'GET',
        }).then(call => call.json()).
          then(call => {
            if (call.mensaje === 'OK') {
              Swal.fire({
                icon: 'success',
                text: 'Cita Borrada con exito!'
              })
            }
          }).catch(e => console.log(e));
        let fdate = moment(dato.date).format("MMMM DD YYYY");
        let hour = dato.hour;
        fetch(`http://localhost:8080/citas/sendCancelAppointment/${correocancelar}/${fdate}/${hour}`, {
          method: 'GET',
        }).then(call => call.json()).
          then(call => {
            if (call.mensaje === 'OK') {
              console.log("Envio correo");
            }
          }).catch(e => console.log(e));

        setCitas(registros);
      } else if (result.isDenied) {
        Swal.fire('La cita no se cancelo', '', 'info')
      }
    })
  }
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