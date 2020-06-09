import React, { useState, Fragment, createRef } from 'react';
import UserImg from '../images/User.png'
import "./usuarios.scss";
import { useForm } from "react-hook-form";

const Usuarios = () => {
  const { register, errors, handleSubmit, setError, clearError } = useForm();

  const [entradas, setEntradas] = useState([])

  const onSubmit = (data, e) => {
    console.log(data);
    setEntradas([...entradas,
      data])

    fetch('http://localhost:8080/usuarios', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(res => console.log(res))
      .catch(e => console.log(e));

    e.target.reset();
  }

  return (
    <Fragment>
      <form className="usuarios" onSubmit={handleSubmit(onSubmit)}>
        <div className="base-container">
          <div className="header">Crear usuario</div>
          <br />
          <div className="content">
            <div className="image">
              <img src={UserImg} />
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
              <div className="form-group">
                <label htmlFor="nId">N° Identificación</label>
                <input
                  type="text"
                  id="nId"
                  name="nId"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="firstName">Primer Nombre</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="secondName">Segundo Nombre</label>
                <input
                  type="text"
                  id="secondName"
                  name="secondName"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="firstLastName">Primer Apellido</label>
                <input
                  type="text"
                  id="firstLastName"
                  name="firstLastName"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="secondLastName">Segundo Apellido</label>
                <input
                  type="text"
                  id="secondLastName"
                  name="secondLastName"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="tUser">Tipo de Usuario</label>
                <select
                  className="form-control"
                  id="tUser"
                  name="tUser"
                >
                  <option value=""></option>
                  <option value="admin">Administrador</option>
                  <option value="odont">Odontólogo</option>
                  <option value="aux">Auxiliar</option>
                  <option value="clien">Cliente</option>
                </select>
              </div>
              <div className="footer">
                <button type="submit" className="btn" id="submit">
                  Crear
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  )
}

export default Usuarios;