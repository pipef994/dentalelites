import React, { useState, Fragment, createRef } from "react";
import "./evolucion.scss";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';


const Evolucion = () => {
  const [tipId, setPid] = useState();
  const [nId, setNid] = useState();
  const { register, errors, handleSubmit, setError, clearError } = useForm();



  return (
    <Fragment>
      <form className="evolucion">
        <div className="base-container">
          <div className="header">Evolución paciente</div>
          <br />
          <div className="content">
            <div className="form">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="tipId">Tipo de documento</label>
                  <select className="form-control" name="tipId"
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
                <div className="form-group col-md-6">
                  <label htmlFor="nId">N° Identificación</label>
                  <input
                    type="text"
                    id="nId"
                    name="nId"
                    value={nId}
                    onChange={e => setNid(e.target.value)}
                    onKeyPress={(e) => {
                      console.log(tipId);
                      let key = window.event ? e.which : e.keyCode;
                      if ((tipId === 'ti' || tipId === 'cc' || tipId === 'ce') && (key < 48 || key > 57)) {
                        e.preventDefault();
                      }
                    }}
                    className="form-control"
                    ref={register({
                      required: true, pattern: [0 - 9]
                    })}
                  />
                  {errors.nId && <p>*Campo Obligatorio</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  )

}

export default Evolucion;