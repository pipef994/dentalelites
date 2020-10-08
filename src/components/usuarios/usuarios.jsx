import React, { useState, Fragment, createRef } from "react";
import UserImg from "../images/User.png";
import "./usuarios.scss";
import { useForm } from "react-hook-form";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Swal from 'sweetalert2';

const Usuarios = (props) => {

  const [tipId, setPid] = useState();
  const [nId, setNid] = useState();
  const [firstName, setFirstName] = useState();
  const [secondName, setSecondName] = useState();
  const [firstLastName, setFirstLastName] = useState();
  const [secondLastName, setSecondLastName] = useState();
  const [email, setEmail] = useState();
  const [tUser, setTuser] = useState();
  const [password, setPassword] = useState();
  const [rPassword, setRpassword] = useState();
  const { register, errors, handleSubmit, setError, clearError } = useForm();
  const [saving, setSaving] = useState(false)
  const [entradas, setEntradas] = useState([]);

  const {
    buttonLabel,
    className
  } = props;

  const limpiarVariables = () => {
    setPid('--Seleccione--');
    setNid('');
    setFirstName('');
    setSecondName('');
    setFirstLastName('');
    setSecondLastName('');
    setEmail('');
    setTuser('');
    setPassword('');
    setRpassword('');
    setPid('--Seleccione--');
  }

  const onSubmit = (data, e) => {
    setEntradas([...entradas, data]);
    var tip = data.tipId;
    var lvText;
    var lvFlag; //Bandera para guardar
    //var texto = document.querySelector('#nId');
    if (data !== null) {
      const patron = /^([0-9])*$/;
      if ((data.tipId === 'ti' || data.tipId === 'cc') && data.nId.length > 10 && patron.test(data.nId)) {
        if (tip === 'ti') {
          lvText = 'La tarjeta de identidad no deben superar los 10 digitos';
        } else {
          lvText = 'La cédula de ciudadanía no deben superar los 10 digitos';
        }
        Swal.fire(
          {
            icon: 'warning',
            title: 'Uups...',
            text: lvText
          })
      }

      if (data.tipId === 'ps' && data.nId.length > 8) {
        Swal.fire({
          icon: 'warning',
          title: 'Uups...',
          text: 'Para el pasaporte no se deben superar los 8 digitos'
        })
      }


      if (data.password !== data.rPassword) {
        Swal.fire({
          icon: 'warning',
          title: 'Uups...',
          text: 'Las contraseñas ingresadas son diferentes!'
        })
      }


      if (lvFlag != 'X') {
        saveUser(data);
      }
    }
  };

  const saveUser = (data) => {
    var flagSave = '';

    if (data !== null) {
      console.log(data)
      fetch('http://localhost:8080/usuarios/usuariodocumento', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        console.log(res);
        res.json()
        if (res.mensaje === "UsuarioYacreado") {
          Swal.fire({
            icon: 'warning',
            text: 'La cédula ya se encuentra registrada'
          })
          flagSave = 'X';
        }
      }).catch(e => {
        console.log(e);
        console.log("object");
      })
        .finally(() => {
          setSaving(false)
        })

      fetch('http://localhost:8080/usuarios/validarusuario', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        res.json()
        if (res.mensaje === "OK") {
          Swal.fire({
            icon: 'warning',
            text: 'El correo diligenciado ya se encuentra creado!'
          })
          flagSave = 'X';
        }
      }).catch(e => {
        console.log(e);
        console.log("Ocurrió un error al crear el usuario");
      })
        .finally(() => {
          setSaving(false)
        })

      if (flagSave == null) {
        fetch('http://localhost:8080/usuarios', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
          .then(res => {
            if (res.mensaje === "OK") {
              Swal.fire({
                icon: 'success',
                text: 'Usuario creado Exitosamente!'
              })
              limpiarVariables();
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
    }
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
                <div className="form-group col-md-6">
                  <label htmlFor="firstName">Primer Nombre</label>
                  <input type="text" id="firstName" name="firstName" className="form-control"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    ref={register({ required: true, pattern: /^[A-Za-z]+$/i })} />
                  {errors.firstName && <p>*Campo Obligatorio</p>}
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="secondName">Segundo Nombre</label>
                  <input type="text" id="secondName" name="secondName"
                    value={secondName}
                    onChange={e => setSecondName(e.target.value)}
                    className="form-control" ref={register({ maxLength: 20 })} />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="firstLastName">Primer Apellido</label>
                  <input type="text" id="firstLastName" name="firstLastName"
                    value={firstLastName}
                    onChange={e => setFirstLastName(e.target.value)}
                    className="form-control" ref={register({ required: true, maxLength: 20 })} />
                  {errors.firstLastName && <p>*Campo Obligatorio</p>}
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="secondLastName">Segundo Apellido</label>
                  <input type="text" id="secondLastName" name="secondLastName"
                    value={secondLastName}
                    onChange={e => setSecondLastName(e.target.value)}
                    className="form-control" ref={register({ maxLength: 20 })} />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
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
                  <select className="form-control" id="tUser" name="tUser"
                    value={tUser}
                    onChange={e => setTuser(e.target.value)}
                    ref={register({
                      required: true
                    })}>
                    <option value="">--Seleccione--</option>
                    <option value="admin">Administrador</option>
                    <option value="odont">Odontólogo</option>
                    <option value="aux">Auxiliar</option>
                    <option value="clien">Cliente</option>
                  </select>
                  {errors.tUser && <p>*Campo Obligatorio</p>}
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="password">Contraseña</label>
                  <input type="password" id="password" name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="form-control" ref={register({ required: true })}
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                    title="Debe contener al menos un número y una letra mayúscula y minúscula, y al menos 6 caracteres" />
                  {errors.password && <p>*Campo Obligatorio</p>}
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="rPassword">Repetir Contraseña</label>
                  <input type="Password" id="rPassword" name="rPassword"
                    value={rPassword}
                    onChange={e => setRpassword(e.target.value)}
                    className="form-control" ref={register({ required: true })}
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                    title="Debe contener al menos un número y una letra mayúscula y minúscula, y al menos 6 caracteres" />
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
      </form>
    </Fragment>
  );
};

export default Usuarios;
