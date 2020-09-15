import React, { useState, Fragment } from 'react';
import recImg from "../images/recovery.png";
import "./recuperar.scss";
import clsx from 'clsx';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import Swal from 'sweetalert2'

const Recuperar = () => {
  let history = useHistory();
  const { register, errors, handleSubmit, setError, clearError } = useForm();
  //const [entradas, setEntradas] = useState([])

  const onSubmit = (data, e) => {
    console.log(data);

    fetch('http://localhost:8080/usuarios/validarusuario', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(res => {
        if (res.mensaje === "OK") {
          console.log("Existe");

        } else {
          console.log("No existe");
          Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Usuario no registrado!'
          })
        }
      })
      .catch(e => console.log(e));
  }

  return (
    <Fragment>
      <form className='recuperar' onSubmit={handleSubmit(onSubmit)}>
        <div className="base-container">
          <div className="header">Recuperar Contraseña</div>
          <br />
          <div className="content">
            <div className="image">
              <img src={recImg} />
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="email">Correo</label>
                <input type="email"
                  name="email"
                  placeholder=" Ingrese el correo"
                  className="form-control"
                  ref={register({
                    required: { value: true, message: '*Campo obligatorio' }
                  })} />
                {errors.email &&
                  <span className="text-danger text-small d-block mb-2">
                    {errors.email.message}
                  </span>
                }
              </div>
              <div className="footer">
                <div className="form-row">
                  <button type="submit" className="btn" id="submit" >
                    Enviar
                  </button>
                  <button className="btn_back" id="back" onClick={() => history.goBack()} >
                    Volver
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form >
    </Fragment >
  )
}




export default Recuperar;