import React, { useState, Fragment, createRef } from "react";
import UserImg from "../images/User.png";
import "./usuarios.scss";
import { useForm } from "react-hook-form";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Usuarios = (props) => {
  const [modal, setModal] = useState(false);
  const { register, errors, handleSubmit, setError, clearError } = useForm();
  const [saving, setSaving] = useState(false)
  const [entradas, setEntradas] = useState([]);

  const {
    buttonLabel,
    className
  } = props;


  const onSubmit = (data, e) => {
    setEntradas([...entradas, data]);
    if (data !== null) {
      if (data.password === data.rPassword) {
        saveUser(data);
      } else {
        toggle();
      }
    }
  };

  const saveUser = (data) => {
    setSaving(true)
    console.log(data);
    fetch('http://localhost:8080/usuarios', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(res => {
        if (res.mensaje === "OK") {
          console.log("Usuario creado con éxito");
        } else {
          console.log("Ocurrió un error al crear el usuario");
        }
      })
      .catch(e => {
        console.log(e)
        console.log("Ocurrió un error al crear el usuario");
      })
      .finally(() => {
        setSaving(false)
      })
  }

  const toggle = () => {

    setModal(!modal);
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
                  <select className="form-control" name="tipId" ref={register({ required: true })}>
                    <option value="">Seleccione</option>
                    <option value="cc">Cédula de ciudadanía</option>
                    <option value="ce">Cédula de extranjería</option>
                    <option value="di">
                      Documento personal de Identificación
                  </option>
                    <option value="ps">Pasaporte</option>
                    <option value="Re">Registro</option>
                    <option value="ti">Tarjeta de identidad</option>
                  </select>
                  {errors.tipId && <p>*Campo Obligatorio</p>}
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="nId">N° Identificación</label>
                  <input
                    type="number"
                    id="nId"
                    name="nId"
                    className="form-control"
                    ref={register({
                      required: true, pattern: [0 - 9]
                    })}
                  />
                  {errors.nId && <p>*Campo Obligatorio</p>}
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="firstName">Primer Nombre</label>
                  <input type="text" id="firstName" name="firstName" className="form-control" ref={register({ required: true, pattern: /^[A-Za-z]+$/i })} />
                  {errors.firstName && <p>*Campo Obligatorio</p>}
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="secondName">Segundo Nombre</label>
                  <input type="text" id="secondName" name="secondName" className="form-control" ref={register({ maxLength: 20 })} />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="firstLastName">Primer Apellido</label>
                  <input type="text" id="firstLastName" name="firstLastName" className="form-control" ref={register({ required: true, maxLength: 20 })} />
                  {errors.firstLastName && <p>*Campo Obligatorio</p>}
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="secondLastName">Segundo Apellido</label>
                  <input type="text" id="secondLastName" name="secondLastName" className="form-control" ref={register({ maxLength: 20 })} />
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
                    <option value="">Seleccione</option>
                    <option value="admin">Administrador</option>
                    <option value="odont">Odontólogo</option>
                    <option value="aux">Auxiliar</option>
                    <option value="clien">Cliente</option>
                  </select>
                  {errors.tUser && <p>*Campo Obligatorio</p>}
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="password">Contraseña</label>
                  <input type="password" id="password" name="password" className="form-control" ref={register({ required: true })} />
                  {errors.password && <p>*Campo Obligatorio</p>}
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="rPassword">Repetir Contraseña</label>
                  <input type="Password" id="rPassword" name="rPassword" className="form-control" ref={register({ required: true })} />
                  {errors.rPassword && <p>*Campo Obligatorio</p>}
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
        <Modal isOpen={modal} toggle={toggle} className={className} id="ModalPassword">
          <ModalBody>
            Las contraseñas ingresadas son diferentes!
        </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>Cerrar</Button>
          </ModalFooter>
        </Modal>
      </form>
    </Fragment>
  );
};

export default Usuarios;
