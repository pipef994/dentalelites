import React, { useState, Fragment } from 'react';
import recImg from "../images/recovery.png";
import "./recuperar.scss";
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'

const Recuperar = () => {
  const [email, setEmail] = useState();
  let history = useHistory();
  const { register, errors, handleSubmit } = useForm();

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
          fetch('http://localhost:8080/usuarios/enviarContrasena', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
            .then(res => {
              if (res.mensaje === "OK") {
                Swal.fire({
                  icon: 'success',
                  title: 'Envio de correo',
                  text: 'Se envio un correo con su contraseña de ingreso!'
                })
                setEmail(''); //Se resetea el campo
              }
            }
            )
        } else {
          console.log("No existe");
          Swal.fire({
            icon: 'warning',
            title: 'Uups...',
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
                  value={email}
                  onChange={e => setEmail(e.target.value)}
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