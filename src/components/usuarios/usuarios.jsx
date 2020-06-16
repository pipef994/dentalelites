import React, { useState, Fragment, createRef } from "react";
import UserImg from "../images/User.png";
import "./usuarios.scss";
import { useForm } from "react-hook-form";

const Usuarios = () => {
  const { register, errors, handleSubmit, setError, clearError } = useForm();
  const [saving, setSaving] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [saveStatus, setSaveStatus] = useState("")
  const [entradas, setEntradas] = useState([]);

  const onSubmit = (data, e) => {
    console.log(data);
    setEntradas([...entradas, data]);

    // fetch("http://localhost:8080/usuarios", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((res) => console.log(res))
    //   .catch((e) => console.log(e));

    e.target.reset();
  };

  const saveUser = (data) => {
    setSaving(true)
    fetch('http://localhost:8080/usuarios', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(res => {
        if (res.mensaje === "OK") {
          setShowAlert(true)
          setSaveStatus("success")
        } else {
          setShowAlert(true)
          setSaveStatus("error")
        }
      })
      .catch(e => {
        console.log(e)
        setShowAlert(true)
        setSaveStatus("error")
      })
      .finally(() => {
        setSaving(false)
      })
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
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="tipId">Tipo de documento</label>
                  <select className="form-control" id="tipId" name="tipId">
                    <option value="sc">Seleccione</option>
                    <option value="cc">Cédula de ciudadanía</option>
                    <option value="ce">Cédula de extranjería</option>
                    <option value="di">
                      Documento personal de Identificación
                  </option>
                    <option value="ps">Pasaporte</option>
                    <option value="Re">Registro</option>
                    <option value="ti">Tarjeta de identidad</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="nId">N° Identificación</label>
                  <input
                    type="text"
                    id="nId"
                    name="nId"
                    className="form-control"
                  />

                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="firstName">Primer Nombre</label>
                  <input type="text" id="firstName" name="firstName" className="form-control" />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="secondName">Segundo Nombre</label>
                  <input type="text" id="secondName" name="secondName" className="form-control" />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="firstLastName">Primer Apellido</label>
                  <input type="text" id="firstLastName" name="firstLastName" className="form-control" />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="secondLastName">Segundo Apellido</label>
                  <input type="text" id="secondLastName" name="secondLastName" className="form-control" />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    ref={register({
                      required: "*Campo Obligatorio",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                      }
                    })}
                  />
                  {errors.email && <p>*Campo Obligatorio</p>}
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="tUser">Tipo de Usuario</label>
                  <select className="form-control" id="tUser" name="tUser" ref={register({
                    required: true
                  })}>
                    <option value="sc">Seleccione</option>
                    <option value="admin">Administrador</option>
                    <option value="odont">Odontólogo</option>
                    <option value="aux">Auxiliar</option>
                    <option value="clien">Cliente</option>
                  </select>
                </div>
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
  );
};

export default Usuarios;
