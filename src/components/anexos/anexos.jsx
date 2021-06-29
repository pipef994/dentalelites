import React, { useState, Fragment, useRef } from "react";
import "./anexos.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
  Input,
  FormText,
} from "reactstrap";
import CanvasDraw from "react-canvas-draw";
import Swal from "sweetalert2";

const Anexos = (props) => {
  const firstCanvas = useRef(null);
  const secondCanvas = useRef(null);
  const [evoData, setEvoData] = useState([]);

  const [idData, setidData] = useState({
    tipId: "",
    idPaciente: "",
  });

  const handleIdChange = (e) => {
    setidData({
      ...idData,
      [e.target.name]: e.target.value,
    });
  };

  const [abrirModal, setAbrirModal] = useState(false);

  const [state, setState] = useState({
    // data: data,
    form: {
      archivo: "",
    },
  });

  const mostrarModalInsertar = () => {
    setAbrirModal(true);
  };

  const cerrarModalInsertar = () => {
    setAbrirModal(false);
  };

  const clearCanvas = () => {
    const undo = firstCanvas.current.clear();
    console.log(undo);
  };

  const insertar = () => {
    //Obtengo la firma dibujada
    let fecha = new Date(state.form.fecha);
    fecha = fecha.toLocaleDateString();
    const data = firstCanvas.current.getSaveData();
    var valorNuevo = {
      ...state.form,
      firma: data,
      ...idData,
      fecha,
    };
    setAbrirModal(false);
    fetch("http://localhost:8080/Anexos", {
      method: "POST",
      body: JSON.stringify(valorNuevo),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.mensaje === "evoCreada") {
          consultarAnexos();
          setidData({
            tipId: "",
            idPaciente: "",
          });
        } else {
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleChange = (event) => {
    setState({
      ...state,
      form: {
        ...state.form,
        [event.target.name]: event.target.value,
      },
    });
  };

  const consultarAnexos = () => {
    let idPaciente = idData.idPaciente;
    idPaciente = idPaciente.toString();
    let tipId = idData.tipId;
    tipId = tipId.toString();

    fetch(`http://localhost:8080/Anexos/searchEvo/${tipId}/${idPaciente}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res.mensaje", res.mensaje);
        if (res.mensaje === "OK") {
          setEvoData(res.data);
        } else {
          Swal.fire({
            icon: "error",
            text: "El usuario no presenta evolución odontológica!",
          });
          setidData({
            tipId: "",
            idPaciente: "",
          });
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-12">
          <h1 className="my-3">Anexos</h1>
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
                    className="form-control mx-2"
                    id="tipId"
                    name="tipId"
                    value={idData.tipId}
                    onChange={handleIdChange}
                  >
                    <option value="">--Seleccione--</option>
                    <option value="cc">Cédula de ciudadanía</option>
                    <option value="ce">Cédula de extranjería</option>
                    <option value="ps">Pasaporte</option>
                    <option value="ti">Tarjeta de identidad</option>
                  </select>
                </div>
                <div className="form-group mb-2 ml-5">
                  <label htmlFor="idPaciente">
                    Identificación del paciente
                  </label>
                  <input
                    class="form-control mx-2"
                    type="text"
                    id="idPaciente"
                    name="idPaciente"
                    placeholder="Id del paciente"
                    value={idData.idPaciente}
                    onChange={handleIdChange}
                  />
                </div>
                <div className="form-group mb-2">
                  <button
                    type="button"
                    className="btn btn-info mx-2"
                    id="consultar"
                    name="consultar"
                    onClick={consultarAnexos}
                  >
                    Consultar
                  </button>
                  <button
                    type="button"
                    className="btn btn-success mx-2"
                    id="cargar"
                    name="cargar"
                    onClick={() => mostrarModalInsertar()}
                  >
                    Cargar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <br />
        <br />
        <br />
        {Boolean(evoData.length) && (
          <Table>
            <thead>
              <tr>
                <th>Archivo a cargar</th>
              </tr>
            </thead>
            <tbody>
              {evoData.map((dato) => (
                <tr key={dato.fecha}>
                  <td>{dato.fecha}</td>
                  <td>{dato.archivo}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Container>

      <Modal isOpen={abrirModal}>
        <ModalHeader>
          <div>
            <h3>Insertar Archivo</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <Input type="file" name="archivo" id="archivo" />
            <FormText color="muted">
              Por favor seleccione el archivo a cargar!
            </FormText>
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={() => insertar()}>
            Insertar
          </Button>
          <Button
            className="btn btn-danger"
            onClick={() => cerrarModalInsertar()}
          >
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default Anexos;
