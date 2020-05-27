import React from 'react'
import "./login.scss"
import loginImg from "../images/login.png"
import { Link } from "react-router-dom";

const EMAIL_REGEX = new RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

class login extends React.Component {

  constructor(args) {
    super(args);
    this.state = {
      email: '',
      password: ''
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
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
      .then(res => console.log(res))
      .catch(e => console.log(e));
  }

  render() {
    return (
      <div className="login" onSubmit={this.handleSubmit}>
        <div className="base-container" >
          <div className="header">Ingreso</div>
          <br />
          <div className="content">
            <div className="image">
              <img src={loginImg} />
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" placeholder=" Ingrese el correo"
                  value={this.state.email} onChange={this.onChange.bind(this)} required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" id="password" placeholder="Ingrese la contraseña"
                  value={this.state.password} onChange={this.onChange.bind(this)} required />
              </div>
            </div>
          </div>
          <div className="footer">
            <button type="button" className="btn" onClick={this.join.bind(this)}>
              Ingresar
            </button>
            <button type="button" className="btn2">
              Cancelar
            </button>
          </div>
          <br />
          <div >
            {/* <a href="http://google.com" class="button2" target="_blank">Recordar Contraseña</a> */}
            {/* <a href="../recovery_user/recovery_user.jsx" className="button2" target="_blank">Recordar Contraseña</a> */}
            <Link to="./recuperar" className="button2" target="_blank" >Recuperar Contraseña</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default login



