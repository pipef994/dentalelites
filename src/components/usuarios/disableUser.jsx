import React, { useState, Fragment } from 'react';
import DiUserImg from '../images/disableUser.png'
import { useForm } from "react-hook-form";
import "./disableUser.scss";
import Swal from 'sweetalert2';


const DisableUser = (props) => {
  const [tipId, setPid] = useState();
  const [nId, setNid] = useState();
  const { register, errors, handleSubmit, setError, clearError } = useForm();
  const [entradas, setEntradas] = useState([])

  const state = {
    button: 1
  };

  const onSubmit = (data, e) => {
    setEntradas([...entradas,
      data])
    // e.target.reset();
    e.preventDefault();
    if (state.button === 1) {
      console.log('Objeto', data);
      fetch('http://localhost:8080/usuarios/usuariodocumento', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
        .then(data => {
          if (data.mensaje === "UsuarioYacreado") {
            fetch('http://localhost:8080/usuarios/inhabilitar', {
              method: 'POST',
              body: JSON.stringify(data.data),
              headers: {
                'Content-Type': 'application/json'
              }
            }).then(data => data.json()).then(data => {
              if (data.mensaje === 'OK') {
                Swal.fire({
                  icon: 'success',
                  text: 'Usuario inhabilitado'
                })
              }
            })
          } else {
            Swal.fire({
              icon: 'error',
              text: 'La cédula no se encuentra registrada'
            })
          }
        }).catch(e => console.log(e));
    } else {

      fetch('http://localhost:8080/usuarios/usuariodocumento', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
        .then(data => {
          if (data.mensaje === "UsuarioYacreado") {
            console.log(data);
            fetch('http://localhost:8080/usuarios/habilitar', {
              method: 'POST',
              body: JSON.stringify(data.data),
              headers: {
                'Content-Type': 'application/json'
              }
            }).then(data => data.json()).then(data => {
              if (data.mensaje === 'OK') {
                Swal.fire({
                  icon: 'success',
                  text: 'Usuario Habilitado'
                })
              }
            })
          } else {
            Swal.fire({
              icon: 'error',
              text: 'La cédula no se encuentra registrada'
            })
          }
        }).catch(e => console.log(e));
    }

  }
  return (
    <Fragment>
      <form className="disableUSer" onSubmit={handleSubmit(onSubmit)}>
        <div className="base-container">
          <div className="header">Deshabilitar Usuario</div>
          <br />
          <div className="content">
            <div className="image">
              <img src={DiUserImg} />
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="tipId">Tipo de documento</label>
                <select
                  className="form-control"
                  id="tipId"
                  name="tipId"
                  value={tipId}
                  onChange={e => setPid(e.target.value)}
                  ref={register({ required: true })}
                >
                  <option value="">--Seleccione--</option>
                  <option value="cc">Cédula de ciudadanía</option>
                  <option value="ce">Cédula de extranjería</option>
                  <option value="ps">Pasaporte</option>
                  <option value="ti">Tarjeta de identidad</option>
                </select>
                {errors.tipId && <p>*Campo Obligatorio</p>}
              </div>
              <div className="form-group">
                <label htmlFor="nId">Número de Identificación</label>
                <input type="text" id="nId" name="nId"
                  placeholder="N° Identificación"
                  ref={register({
                    required: { value: true, message: 'Campo obligatorio' }
                  })} />
                {errors.nId &&
                  <span className="text-danger text-small d-block mb-2">
                    {errors.nId.message}
                  </span>
                }
              </div>
              <div className="footer">
                <button type="submit" className="btn" id="submit" name="submit" onClick={() => (state.button = 1)}>
                  Inhabilitar
                </button>
                <button type="submit" className="btn2" id="enable" name="enable" onClick={() => (state.button = 2)}>
                  Habilitar
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  )
}

export default DisableUser;