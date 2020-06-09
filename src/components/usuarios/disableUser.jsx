import React, { useState, Fragment } from 'react';
import DiUserImg from '../images/disableUser.png'
import { useForm } from "react-hook-form";
import "./disableUser.scss";


const DisableUser = () => {

  const { register, errors, handleSubmit, setError, clearError } = useForm();

  const [entradas, setEntradas] = useState([])

  const onSubmit = (data, e) => {
    console.log(data);
    setEntradas([...entradas,
      data])
    e.target.reset();
  }

  return (
    <Fragment>
      <form className="disableUSer" onSubmit={handleSubmit(onSubmit)}>
        <div className="base-container">
          <div className="header">Inhabilitar usuario</div>
          <br />
          <div className="content">
          <div className="image">
              <img src={DiUserImg} />
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="tipId">Tipo de documento</label>
                <br />
                <select
                  className="form-control"
                  id="tipId"
                  name="tipId"
                >
                  <option value="sc">Seleccione</option>
                  <option value="cc">Cédula de ciudadanía</option>
                  <option value="ce">Cédula de extranjería</option>
                  <option value="di">Documento personal de Identificación</option>
                  <option value="ps">Pasaporte</option>
                  <option value="Re">Registro</option>
                  <option value="ti">Tarjeta de identidad</option>
                </select>
              </div>
              <br />
              <br />
              <br />
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
                <button type="submit" className="btn" id="submit" >
                  Inhabilitar
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