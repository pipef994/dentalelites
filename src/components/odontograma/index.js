import React, { Component, Fragment } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

import config from "./config.json";
import Store from "./Store/Store";
import Tooth from "./Tooth";
import Toolbar from "./Toolbar";

import "./odontograma.scss";

const types = [
  {
    id: "adult",
    lable: "Adulto",
  },
  {
    id: "kid",
    lable: "Infantil",
  },
];

const toothFaceStatuses = config.toothFaceStatuses;

const toolbarOptions = config.toolbarOptions;

class App extends Component {
  constructor(props) {
    super(props);

    this.defaultDentalArch = { ...Store.dentalArch };

    this.state = {
      ...Store,
      dentalArchType: "adult",
      currentStatus: toothFaceStatuses.find((stat) => stat.name === "normal"),
      isSaving: false,
      tipId: "",
      idPaciente: "",
      isSearching: false,
      userInfo: null,
    };
    // console.log("toothFaceStatuses", toothFaceStatuses);
  }

  handleChange = (event, value) => {
    this.setState({ dentalArchType: event.target.value });
  };

  handleStatusSelectorChange = (status) => {
    const selectedStatus = toothFaceStatuses.find(
      (stat) => stat.name === status
    );
    this.setState({ currentStatus: selectedStatus });
  };

  //Toogle - Adicionar o remover un diente
  toggleTooth = (data) => {
    if (data.status) {
      data.status = false;
      this.setState({ data });
    } else {
      data.status = true;
      this.setState({ data });
    }
  };

  setFace = (face, index, data) => {
    const action = this.state.currentStatus.name;
    if (action === data.faces[index].status) {
      data.faces[index].status = "normal";
    } else {
      data.faces[index].status = action;
    }
    this.setState({ data });
  };

  saveData = () => {
    const dentalArchData = this.state.dentalArch[this.state.dentalArchType];
    const dataObject = {
      id: this.state.userInfo.id,
      timestamp: new Date(),
      idPaciente: this.state.idPaciente,
      tipId: this.state.tipId,
      dentalArchType: this.state.dentalArchType,
      dentalArch: dentalArchData,
    };

    const method = dataObject.id ? "PUT" : "POST";

    fetch("http://localhost:8080/odontograma", {
      method,
      body: JSON.stringify(dataObject),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.mensaje === "OdontogramaCreado") {
          Swal.fire({
            icon: "success",
            text: "Odontograma almacenado",
          });
        } else {
          Swal.fire({
            icon: "error",
            text:
              "Ocurrió un error al almacenar el odontograma, por favor vuelva a intentarlo",
          });
        }
      })
      .catch((e) => console.log(e))
      .finally(() => {
        this.setState({
          isSaving: false,
        });
      });

    console.log("Data sent to the server", dataObject);
  };

  handleIdChange = (e) => {
    this.setState({
      idPaciente: e.target.value,
    });
  };

  handleTipId = (e) => {
    this.setState({
      tipId: e.target.value,
    });
  };

  resetForm = () => {
    this.setState({
      idPaciente: "",
      tipId: "",
      userInfo: null,
      dentalArch: this.defaultDentalArch,
      isSearching: false,
    });
  };

  handleUserSearch = async () => {
    this.setState({
      isSearching: true,
    });
    let idPaciente = this.state.idPaciente;
    idPaciente = idPaciente.toString();
    let tipId = this.state.tipId;
    tipId = tipId.toString();
    fetch("http://localhost:8080/usuarios/usuariodocumento", {
      method: "POST",
      body: JSON.stringify({
        // tipId: "cc",
        tipId: tipId,
        nId: idPaciente,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.mensaje === "UsuarioYacreado") {
          fetch(
            `http://localhost:8080/odontograma/odontogramaPaciente/${this.state.idPaciente}`,
            {
              method: "GET",
            }
          )
            .then((res) => res.json())
            .then((res) => {
              if (res.mensaje === "OK") {
                console.log("res.data", res.data);
                let aux = res.data[0];
                this.setState({
                  userInfo: {
                    ...aux,
                  },
                  dentalArch: {
                    ...this.defaultDentalArch,
                    [aux.dentalArchType]: aux.dentalArch,
                  },
                  dentalArchType: aux.dentalArchType,
                });
              } else {
                this.setState({
                  userInfo: {
                    idPaciente: this.state.idPaciente,
                  },
                  dentalArch: this.defaultDentalArch,
                });
              }
              this.setState({
                isSearching: false,
              });
            })
            .catch((e) => {
              console.log(e);
              this.setState({
                isSearching: false,
                dentalArch: this.defaultDentalArch,
              });
              Swal.fire(
                "Error consultando la información del paciente",
                "",
                "error"
              );
            });
        } else {
          const errorMsg =
            "El paciente no existe, por favor verifique la identificación";
          this.setState({
            isSearching: false,
            dentalArch: this.defaultDentalArch,
            error: errorMsg,
          });
          Swal.fire(errorMsg, "", "info");
        }
      })
      .catch((e) => console.log(e));
  };

  render() {
    const { dentalArchType } = this.state;

    return (
      <div className="container">
        <div className="row my-3">
          <div className="col-12">
            <h1 className="my-3">Odontograma</h1>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-12">
            <div className="card">
              <h5 className="card-header">Datos del paciente</h5>
              <div className="card-body">
                <form className="form-inline">
                  <div className="form-group mb-2">
                    <label htmlFor="tipId">Tipo de documento</label>
                    <select
                      className="form-control"
                      id="tipId"
                      name="tipId"
                      value={this.state.tipId}
                      onChange={this.handleTipId}
                    >
                      <option value="">--Seleccione--</option>
                      <option value="cc">Cédula de ciudadanía</option>
                      <option value="ce">Cédula de extranjería</option>
                      <option value="ps">Pasaporte</option>
                      <option value="ti">Tarjeta de identidad</option>
                    </select>
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="idPaciente">
                      Identificación del paciente
                    </label>
                    <input
                      class="form-control mx-2"
                      type="text"
                      id="idPaciente"
                      name="idPaciente"
                      placeholder="Id del paciente"
                      value={this.state.idPaciente}
                      onChange={this.handleIdChange}
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary mb-2"
                    disabled={this.state.isSearching}
                    onClick={this.handleUserSearch}
                  >
                    Consultar odontograma
                  </button>
                  {this.state.userInfo && (
                    <button
                      type="button"
                      className="btn btn-outline-danger ml-2 mb-2"
                      onClick={this.resetForm}
                    >
                      Nuevo odontograma
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
        {this.state.userInfo && this.state.userInfo.idPaciente && (
          <Fragment>
            <div className="row my-3">
              <div className="col-12">
                <div className="card">
                  <h5 className="card-header">Datos de arco dental</h5>
                  <div className="card-body">
                    <div className="dentalArchSelector">
                      {types.map((type) => (
                        <div
                          key={type.id}
                          className="form-check form-check-inline"
                        >
                          <input
                            type="radio"
                            id={type.id}
                            name="type"
                            className="form-check-input"
                            value={type.id}
                            checked={this.state.dentalArchType === type.id}
                            onChange={this.handleChange}
                          />
                          <label className="form-check-label" htmlFor={type.id}>
                            {type.lable}
                          </label>
                        </div>
                      ))}
                    </div>
                    <div className="dentalArch">
                      {this.state.dentalArch[dentalArchType].map(
                        (item, index) => {
                          return (
                            <Tooth
                              key={item.id}
                              index={index}
                              data={item}
                              toggleTooth={this.toggleTooth}
                              statusConfig={toothFaceStatuses}
                              setFace={this.setFace}
                            />
                          );
                        }
                      )}
                    </div>
                    <Toolbar
                      options={toolbarOptions}
                      statuses={toothFaceStatuses}
                      handleAction={this.handleStatusSelectorChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-12">
                <button
                  type="button"
                  className="btn btn-success mx-2"
                  onClick={this.saveData}
                  disabled={this.state.isSaving}
                >
                  Guardar
                </button>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

export default App;
