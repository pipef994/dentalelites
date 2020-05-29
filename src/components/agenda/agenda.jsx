import React, { useState, Fragment } from 'react';
import DiUserImg from '../images/disableUser.png'
import { useForm } from "react-hook-form";
import "./disableUser.scss";

const Agenda = () => {

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
    <form className="Agenda">
      <div className="base-container">
        <div className="header">Crear usuario</div>
        <br />
        <div className="content">
          <div className="image">
            {/* <img src={UserImg} /> */}
          </div>
          <div className="form">
            <div className="form-group">
            <label htmlFor="tipServ">Tipo Servicio</label>
            <select id="tipServ" name="tipServ"
              value={this.state.tipServ}
              onChange={this.onChange.bind(this)} >
              <option value="wh"></option>
              <option value="gn">General</option>
              <option value="es">Especializado</option>
            </select>
            </div>
            <div className="form-group">
            <label htmlFor="odont">Odontologo</label>
          <input type="text" name="odont" id="odont" />
            </div>
            <div className="footer">
              <button type="submit" className="btn" id="submit" >
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

export default Agenda;