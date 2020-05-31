import React, { useState, Fragment } from 'react';
import { useForm } from "react-hook-form";
import "./agenda.scss"
import Calendar from '../images/calendar.png'
import {Link} from "react-router-dom";


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
      <form className="agenda">
        <div className="base-container">
          <div className="header">Asignar Cita</div>
          <br />
          <div className="content">
            <div className="image">
              <img src={Calendar} />
            </div>
            <div className="form">
              <div className="form-group col-lg-6">
                <label htmlFor="tipServ">Tipo Servicio</label>
                <select id="tipServ" name="tipServ">
                  <option value="sc">Seleccione</option>
                  <option value="gn">General</option>
                  <option value="es">Especializado</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="odont">Odontologo</label>
                <input type="text" name="odont" id="odont" disabled />
              </div>
              <div className="footer">
                <button type="submit" className="btn" id="submit">
                  <Link to="./calendario.jsx">Siguiente</Link>
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