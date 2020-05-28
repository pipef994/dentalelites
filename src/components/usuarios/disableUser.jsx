import React, { useState, Fragment } from 'react';
import UserImg from '../images/disableUser.png'
import "./disableUser.scss";

const DisableUser = () => {

  return (
    <Fragment>
      <form className="disableUSer">
        <div className="base-container">
          <div className="header">Inhabilitar usuario</div>
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
                  <option value="wh"></option>
                  <option value="cc">Cédula de ciudadanía</option>
                  <option value="ce">Cédula de extranjería</option>
                  <option value="di">Documento personal de Identificación</option>
                  <option value="ps">Pasaporte</option>
                  <option value="Re">Registro</option>
                  <option value="ti">Tarjeta de identidad</option>
                </select>
              </div>
              <br/> 
              <br/> 
              <br/> 
              <div className="form-group">
                <label htmlFor="nId">Número de Identificación</label>
                <input type="text" id="nId" name="nId"
                  placeholder="N° Identificación" />
              </div>
              <br />
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