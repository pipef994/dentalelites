import React, { useState, Fragment } from 'react';
import recImg from "../images/recovery.png";
import "./recuperar.scss";
import clsx from 'clsx';

import { useForm } from "react-hook-form";
import { Redirect, Link } from 'react-router-dom';

const Recuperar = () => {

  const { register, errors, handleSubmit, setError, clearError } = useForm();

  const [entradas, setEntradas] = useState([])

  const onSubmit = (data, e) => {
    console.log(data);
    setEntradas([...entradas,
      data])
    e.target.reset();
  }

  // //Se consulta si el correo ingresado existe
  // let url = `http://localhost:8080/usuarios/consultarUsuarios`

  //   const api = new XMLHttpRequest();
  //   api.open('GET', url, true);
  //   api.send();

  //   api.onreadystatechange = function(){
  //     if (this.status == 200 && this.readyState == 4) {
  //       let datos = JSON.parse(this.responseText);
  //       console.log(datos.email);
  //       let resultado = document.querySelector('#resusltado');
  //       resultado.innerHTML = '';
  //     }
  //  

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
                    required: { value: true, message: 'Campo obligatorio' }
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
                  {/* <Redirect to="./recuperar" className="button2" target="_blank"> Recuperar Contraseña</Redirect> */}
                  <button className="btn_back" id="back">
                    <Link to="./login">Volver</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  )
}




export default Recuperar;