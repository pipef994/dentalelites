import React, { useState, Fragment, useRef } from 'react';
import "./evolucion.scss";
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
} from "reactstrap";
import CanvasDraw from "react-canvas-draw";


const Evolucion = (props) => {

  const firstCanvas = useRef(null);
  const secondCanvas = useRef(null);

  const data = [
    { fecha: '26/11/2020', tratamiento: "Naruto", firma: "" },
    { fecha: '27/11/2020', tratamiento: "Goku", firma: "" },
    { fecha: '28/11/2020', tratamiento: "Kenshin Himura", firma: "" }
  ];
  const [abrirModal, setAbrirModal] = useState(false);

  const [state, setState] = useState({
    data: data,
    form: {
      fecha: "",
      tratamiento: "",
      firma: "",
    },
  });

  const mostrarModalInsertar = () => {
    setAbrirModal(true);
  };

  const cerrarModalInsertar = () => {
    setAbrirModal(false);
  };

  const clearCanvas = () => {
    const undo = firstCanvas.current.undo();
    console.log(undo);
  }

  const insertar = () => {
    //Obtengo la firma dibujada
    const data = firstCanvas.current.getSaveData();
    console.log(data);
    secondCanvas.current.loadSaveData(data);

    var valorNuevo = { ...state.form };
    valorNuevo.fecha = state.data.length + 1;
    var lista = state.data;
    lista.push(valorNuevo);
    setState({ data: lista });
    setAbrirModal(false);
  }

  const handleChange = (e) => {
    setState({
      form: {
        ...state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  return (
    <div>
      <form className="evolucionUser">
        <div className="base-container">
          <div className="header">Evolución Odontológica</div>
          <br />
          <div className="form">
            <div className="form-group">
              <label htmlFor="tipId">Tipo de documento</label>
              <select
                className="form-control"
                id="tipId"
                name="tipId"
              >
                <option value="">--Seleccione--</option>
                <option value="cc">Cédula de ciudadanía</option>
                <option value="ce">Cédula de extranjería</option>
                <option value="ps">Pasaporte</option>
                <option value="ti">Tarjeta de identidad</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="nId">Número de Identificación</label>
              <input type="text" id="nId" name="nId"
                placeholder="N° Identificación" />
            </div>
            <div className="footer">
              <button type="submit" className="btn btn-success" id="consultar" name="consultar" >
                Consultar
                </button>
            </div>
          </div>
        </div>
      </form>
      <Container>
        <br />
        <Button color="success" onClick={() => mostrarModalInsertar()}>Crear</Button>
        <br />
        <br />
        <Table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Tratamiento odontológico ejecutado</th>
              <th>Firma Paciente</th>
            </tr>
          </thead>
          <tbody>
            {
              state.data.map((dato) => (
                <tr key={dato.fecha}>
                  <td>{dato.fecha}</td>
                  <td>{dato.tratamiento}</td>
                  {/* <td>{dato.firma}</td> */}
                  <td>
                    <CanvasDraw
                      hideGrid={true}
                      disabled={true}
                      style={{ border: '1px solid #000000', width: 300, height: 150 }}
                      ref={secondCanvas} />
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>

      {/* <Modal isOpen={state.modalInsertar}> */}
      <Modal isOpen={abrirModal}>
        <ModalHeader>
          <div><h3>Insertar Evolución</h3></div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>
              Fecha:
               </label>
            <input class="form-control" type="date" value="2011-08-19" id="fecha" name="fecha" onChange={() => handleChange()} />
          </FormGroup>

          <FormGroup>
            <label>
              Tratamiento:
               </label>
            <textarea class="form-control" id="exampleTextarea" rows="3" name="tratamiento" onChange={() => handleChange()}></textarea>
          </FormGroup>
          <FormGroup>
            <label>
              Firma:
               </label>
            <br />
            <CanvasDraw
              brushRadius={1}
              catenaryColor="red"
              hideGrid={true}
              style={{ border: '1px solid #000000', width: 300, height: 150 }}
              ref={firstCanvas}
            />
          </FormGroup>
          <FormGroup>
            <button type="button" class="btn btn-secondary" onClick={() => clearCanvas()}>Borrar Firma</button>
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button
            color="primary"
            onClick={() => insertar()}
          >
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
  )
}
export default Evolucion;