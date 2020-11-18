import React, { useState, Fragment } from 'react';
import DiUserImg from '../../images/cancelCita.png'
import { useForm } from "react-hook-form";
import "./cancelacion.scss";
import Swal from 'sweetalert2';


const Cancelacion = (props) => {
  const [email, setEmail] = useState();
  const { register, errors, handleSubmit, setError, clearError } = useForm();
  const [entradas, setEntradas] = useState([])

  const state = {
    button: 1
  };

  const onSubmit = (data, e) => {
    console.log('cancelación cita', data);
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
      if (result.isConfirmed) {
        // Swal.fire('Saved!', '', 'success')
        validaUsuario(data);
      } else if (result.isDenied) {
        Swal.fire('La cita no se cancelo', '', 'info')
      }
    })
  }

  const validaUsuario = (data) => {
    // Validamos que el correo exista
    fetch('http://localhost:8080/usuarios/validarusuario', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(res => {
        if (res.mensaje === "OK") {
          cancelarCita(data);
        } else {
          Swal.fire('Correo no registrado', '', 'info')
        }
      })
      .catch(e => console.log(e));
  }

  const cancelarCita = (data) => {
    fetch(`http://localhost:8080/citas/cancelarCita/${data.email}`, {
      method: 'GET',
    }).then(res => res.json()).
      then(res => {
        if (res.mensaje === 'OK') {
          console.log('Cita Cancelada');
          Swal.fire({
            icon: 'success',
            text: 'Cita cancelada con exito!'
          })
        }
      })
  }

  return (
    <Fragment>
      <form className="disableUSer" onSubmit={handleSubmit(onSubmit)}>
        <div className="base-container">
          <div className="header">Cancelar Cita</div>
          <br />
          <div className="content">
            <div className="image">
              <img src={DiUserImg} />
            </div>
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
              <div className="form-group" >
                <label htmlFor="date">Fecha de cita</label>
              </div>
              <div className="footer">
                <button type="submit" className="btn" id="submit" name="submit">
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  )
}

export default Cancelacion;