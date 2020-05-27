import React, { useState, Fragment, Component } from "react";
import "./usuarios.scss";
import { render } from "@testing-library/react";
import clsx from 'clsx';
import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/styles';
// import { makeStyles } from '@material-ui/core/styles'



const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });

  return valid;
};

const Styles = theme =>({
  juanito: {
    fontSize: '15px',
    padding: '5px 20px',
    border: 0,
    borderRadius: 3,
    backgroundColor: '#09ca9aef',
    color: '#fff',
    transition: 'all 250ms ease -in -out',
    cursor: 'pointer',
  }
})

class usuarios extends React.Component {
  constructor(args) {
    super(args);
    this.state = {
      tipId: "",
      nId: null,
      firstName: null,
      secondName: null,
      firstLastName: null,
      secondLastName: null,
      tUser: "",
      formErrors: {
        nId: "",
        firstName: "",
        secondName: "",
        firstLastName: "",
        secondLastName: "",
      },
    };
    
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Tipo Id: ${this.state.tipId}
        num Id: ${this.state.nId}
        Primer Nombre: ${this.state.firstName}
        Segundo Nombre: ${this.state.secondName}
        Primer Apellido: ${this.state.firstLastName}
        Segundo Apellido: ${this.state.secondLastName}
        Tipo Usuario: ${this.state.tUser}
        
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "nId":
        formErrors.nId =
          value.length < 8 && value.length > 0 ? "Minimo 8 Caracteres" : "";
        break;
      case "firstName":
        formErrors.firstName =
          value.length < 8 && value.length > 0 ? "Minimo 8 Caracteres" : "";
        break;
      case "secondName":
        formErrors.secondName =
          value.length < 3 && value.length > 0 ? "Minimo 8 Caracteres" : "";
        break;
      case "firstLastName":
        formErrors.firstLastName =
          value.length < 3 && value.length > 0 ? "Minimo 8 Caracteres" : "";
        break;
      case "secondLastName":
        formErrors.secondLastName =
          value.length < 3 && value.length > 0 ? "Minimo 8 Caracteres" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    // const classes = Styles();
    const { classes } = this.props;
    const { formErrors } = this.state;
    return (
      <form onSubmit={this.handleSubmit} noValidate>
        <div className="col-xs-12 col-md-8 mx-auto text-center">
          <div className="col-sm-5">
            <label htmlFor="tipId">Tipo de documento</label>
            <br />
            <select
              // className={clsx('form-control', { "error":formErrors.nId.length > 0 })}
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
          <br />
          <div className="form-group col-sm-3">
            <label htmlFor="nId">N° Identificación</label>
            <input
              type="text"
              id="nId"
              name="nId"
              className={clsx('form-control', { "error": formErrors.nId.length > 0 })}
              placeholder="Identificación"
              noValidate
              onChange={this.handleChange}
            />
            {formErrors.nId.length > 0 && (
              <span className="errorMessage">{formErrors.nId}</span>
            )}
          </div>

          <div className="form-group col-sm-5">
            <label htmlFor="firstName">Primer Nombre</label>
            <input
              type="text"
              className={clsx('form-control', { "error": formErrors.firstName.length > 0 })}
              id="firstName"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            {formErrors.firstName.length > 0 && (
              <span className="errorMessage">{formErrors.firstName}</span>
            )}
          </div>
          <div className="form-group col-sm-5">
            <label htmlFor="secondName">Segundo Nombre</label>
            <input
              type="text"
              className={clsx('form-control', { "error": formErrors.secondName.length > 0 })}
              id="secondName"
              name="secondName"
              value={this.state.secondName}
              onChange={this.handleChange}
            />
            {formErrors.secondName.length > 0 && (
              <span className="errorMessage">{formErrors.secondName}</span>
            )}
          </div>
          <div className="form-group col-sm-5">
            <label htmlFor="firstLastName">Primer Apellido</label>
            <input
              type="text"
              className={clsx('form-control', { "error": formErrors.firstLastName.length > 0 })}
              id="firstLastName"
              name="firstLastName"
              value={this.state.firstLastName}
              onChange={this.handleChange}
              required
            />
            {formErrors.firstLastName.length > 0 && (
              <span className="errorMessage">{formErrors.firstLastName}</span>
            )}
          </div>

          <div className="form-group col-sm-5">
            <label htmlFor="secondLastName">Segundo Apellido</label>
            <input
              type="text"
              className={clsx('form-control', { "error": formErrors.secondLastName.length > 0 })}
              id="secondLastName"
              name="secondLastName"
              value={this.state.secondLastName}
              onChange={this.handleChange}
            />
            {formErrors.secondLastName.length > 0 && (
              <span className="errorMessage">{formErrors.secondLastName}</span>
            )}
          </div>
          <div className="form-group col-sm-5">
            <label htmlFor="tUser">Tipo de Usuario</label>
            <select
              id="tUser"
              name="tUser"
              className="form-control"
              onChange={this.handleChange}
            >
              <option value=""></option>
              <option value="admin">Administrador</option>
              <option value="odont">Odontólogo</option>
              <option value="aux">Auxiliar</option>
              <option value="clien">Cliente</option>
            </select>
          </div>
          <div className="form-group col-sm-5">
            <label htmlFor="email">Correo</label>
            <input type="email" id="email" name="email"/>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-2">
                <Button
                  // onClick={this.save.bind(this)}
                  // type="button"
                  className={classes.juanito}
                  variant="contained" color="primary" align="center">
                  Crear{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default withStyles(Styles) (usuarios);
