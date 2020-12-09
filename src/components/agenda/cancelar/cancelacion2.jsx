import React, { useState } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import CancelCita from '../../images/cancelCita.png'
import { useForm } from "react-hook-form";
import {
  Button,
} from "reactstrap";
import "./cancelacion2.scss";
import Swal from 'sweetalert2';
import moment from 'moment';

const Cancelacion = (props) => {
  const { register, errors, handleSubmit } = useForm();
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
          <Button color="danger" onClick={() => eliminar(cita)}> Eliminar</Button>
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
        console.log('res.mensaje', res.mensaje);
        if (res.mensaje === 'OK') {
          tratarDatos(res.data);
        } else {
          Swal.fire({
            icon: 'error',
            text: 'El usuario no tiene citas proximas!'
          })
        }
      }).catch(
        e => console.log(e)
      );
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
        console.log('dato', dato);
        let hourSel = dato.hour.substr(0, 5);
        hourSel = moment(hourSel, 'HH:mm').subtract(2, 'hour').format("HH:mm");
        let resTime = moment().format('HH:mm');
        let dateSel = dato.date.substr(0, 10);
        dateSel = moment(dateSel, 'YYYY-MM-DD').format('YYYY-MM-DD');
        console.log(dateSel);
        let dateAct = moment(new Date()).format('YYYY-MM-DD');
        console.log(dateAct);

        if (resTime > hourSel && dateAct === dateSel) {
          Swal.fire({
            icon: 'warning',
            text: 'Señor usuario las citas se pueden cancelar hasta dos horas antes de la programación.'
          })
        } else {

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

        }
        setCitas(registros);
      } else if (result.isDenied) {
        Swal.fire('La cita no se cancelo', '', 'info')
      }
    })
  }
  return (
    // <div className="card">
    //   <div className="card-body">
    <div className="overflow-auto">
      <form className="listUser" onSubmit={handleSubmit(consultarCitas)}>
        <div className="base-container">
          <div className="header">Cancelar Cita</div>
          <br />
          <div className="image">
            <img src={CancelCita} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Correo</label>
              <input type="email" id="email" name="email"
                placeholder="Ingrese el correo"
                className="form-control"
                ref={register({
                  required: { value: true, message: 'Campo obligatorio' }
                })} />
              {errors.email &&
                <span className="text-danger text-small d-block mb-2">
                  {errors.email.message}
                </span>
              }
            </div>
            <div className="footer mx-5">
              <button type="submit" className="btn" id="submit" name="submit">
                Consultar
            </button>
            </div>
            <br />
            <br />
            {Boolean(citas.length) && (
              <ReactBootStrap.Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Fecha cita</th>
                    <th>Hora Cita</th>
                    <th>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {citas.map(renderUser)}
                </tbody>
              </ReactBootStrap.Table>
            )}
          </div>
        </div>
      </form>
    </div>
    // </div>
    // </div>
  )
}


export default Cancelacion;