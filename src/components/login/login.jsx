import React, { useState } from 'react'
import "./login.scss"
import loginImg from "../images/login.png"
import { Link, Redirect } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

class login extends React.Component {

  constructor(args) {
    super(args);
    this.state = {
      email: '',
      password: '',
      show: false
    }
  }

  handleModal() {
    this.setState({ show: !this.state.show })
  }

  limpiarFormulario() {
    this.state.email = "";
    this.state.password = "";
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onKeyPress = (e) => {
    if (e.which === 13) {
      this.join(e);
    }
  }

  join(e) {
    const data = {
      email: this.state.email,
      password: this.state.password
    }

    fetch('http://localhost:8080/usuarios/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(res => {
        switch (res.mensaje) {
          case "OK":
            console.log(res.mensaje);
            localStorage.setItem("email", res.data.email);
            localStorage.setItem("Perfil", res.data.tUser);
            this.props.updateLogin(res.data.email);
            this.props.history.push({
              pathname: '/'
            })
            Swal.fire({
              icon: 'success',
              title: 'Bienvenido al portal de Dental Elite!!',
              showConfirmButton: false,
              timer: 1500
            })
            break;
          case "Inactivo":
            Swal.fire(
              {
                icon: 'warning',
                title: 'Usuario Inactivo',
                showConfirmButton: false,
                timer: 1500
              })
            break;
          default:
            console.log(res.mensaje);
            this.handleModal(true)
            this.limpiarFormulario()
            break;
        }
      }).catch(e => console.log(e));
  }


  render() {
    return (
      <form id="login" className="login" onSubmit={this.handleSubmit}>
        <div className="base-container" >
          <div className="header">Ingreso</div>
          <br />
          <div className="content">
            <div className="image">
              <img src={loginImg} />
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="email">Correo</label>
                <input type="email" name="email" id="email" placeholder=" Ingrese el correo"
                  value={this.state.email} onChange={this.onChange.bind(this)} required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" id="password" placeholder="Ingrese la contraseña"
                  value={this.state.password} onChange={this.onChange.bind(this)} onKeyPress={this.onKeyPress}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                  title="Debe contener al menos un número y una letra mayúscula y minúscula, y al menos 6 caracteres"
                  required />
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="form-row">
              <button type="button" className="btn" onClick={this.join.bind(this)}>
                Ingresar
            </button>
              {/*               <button type="button" className="btn2">
                Cancelar
            </button> */}
            </div>
          </div>
          <br />
          <div >
            <Link to="./recuperar" className="button2">Recuperar Contraseña</Link>
          </div>
        </div>

        <Modal show={this.state.show}>

          <Modal.Body>Usuario o contraseña invalido</Modal.Body>
          {/* <Modal.Footer> */}
          <Button variant="danger" onClick={() => { this.handleModal() }}>
            Cerrar
          </Button>
          {/* </Modal.Footer> */}
        </Modal>
      </form>
    );
  }
}


export default login



