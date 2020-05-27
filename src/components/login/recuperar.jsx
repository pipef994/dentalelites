import React, { useState, Fragment } from 'react';
import recImg from "../images/recovery.png";
import "./recuperar.scss";
import clsx from 'clsx';

import { useForm } from "react-hook-form";

const Recuperar = () => {

  const { register, errors, handleSubmit, setError, clearError  } = useForm();

  const [entradas, setEntradas] = useState([])

  const onSubmit = (data, e) => {
    console.log(data);
    setEntradas([...entradas,
    data])
    e.target.reset();
  }

  return (
    <Fragment>
      <form className='login' onSubmit={handleSubmit(onSubmit)}>
        <div className="base-container">
          <div className="header">Recuperar Contraseña</div>
          <br />
          <div className="content">
            <div className="image">
              <img src={recImg} />
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email"
                  name="email"
                  placeholder=" Ingrese el correo"
                  className="form-control"
                  ref={register({
                    required: { value: true, message: 'Campo obligatorio' }
                  })} />
                { errors.email &&
                  <span className="text-danger text-small d-block mb-2">
                    {errors.email.message}
                  </span>
                }
              </div>
              <div className="footer">
                <button type="submit"
                  className="btn"
                  id="submit">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  )
}




export default Recuperar;