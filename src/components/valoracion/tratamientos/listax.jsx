import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPlusSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Table  } from 'react-bootstrap';
import "./listaStyle.scss";
import * as ReactBootStrap from "react-bootstrap";
import {  
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
  Row,
  Col } from "reactstrap";

var NumberFormat = require('react-number-format');

const Lista = (props) => {
  const baseUrl = "http://localhost:8080/valoracion/tratamientos"
  const [abrirModal, setAbrirModal] = useState(false);
  const [abrirModalEditar, setAbrirModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);



  const [tratamientos, setTratamientos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(5);

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = tratamientos.slice(indexOfFirstData, indexOfLastData);


  const [formData, setFormData] = useState(props.formData || {
    tratamiento: '',
    usuario: window.localStorage.getItem("email"), //Se toma el correo de memoria
  });

  const [state, setState] = useState({
    form: {
      idTratamiento: "",
      descripcion: "",
      precio_normal: 0,
      precio_minimo: 0
    },
  });

  useEffect(() => {
    setLoading(true);
    fetch(`${baseUrl}/precios`, { method: 'GET' })
      .then(res => res.json())
      .then(res => {
        setUsuarios(res.data); // Con esto tengo la información

        setLoading(false); 
      })
      .catch(e => console.log(e));
  }, [])



  const BuscarTratamiento = () => {
    fetch(`${baseUrl}`, { method: 'GET' })
    .then(res => res.json())
    .then(res => {
      if (res.mensaje === "OK") {
        setTratamientos(res.data);
      }
    }).catch(e => console.log(e));
  }

  console.log(usuarios);

  const insertar = () => {
    var valorNuevo = {
      ...state.form,
    };

    setAbrirModal(false);
    setAbrirModalEditar(false);
    fetch(`${baseUrl}/precios`, {
      method: 'POST',
      body: JSON.stringify(valorNuevo),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .catch(e => {
        console.log(e)
      })
  }

  

  const handleChange = event => {
    setState({
      ...state,
      form: {
        ...state.form,
        [event.target.name]: event.target.value,
      },
    });
  };

  const createSelectItems = (data) => {
    let items = [];
    for (let i = 0; i < data.length; i++) {
      let nombre = data[i].nombre;
      items.push({ value: data[i].id, text: nombre });
    }
    return items;
  }

  const onTratamiento = (e) => {
    const newState = {
      ...formData,
      [e.target.name]: e.target.value
    }
    setFormData(newState)
    // props.updateValues(newState)
  }

  const mostrarModalInsertar = () => {
    setAbrirModal(true);
    BuscarTratamiento();
  };

  const cerrarModalInsertar = () => {
    setAbrirModal(false);
  };

  const mostrarModalEditar = (data) => {
    setAbrirModalEditar(true);
    setState({form: data})
    BuscarTratamiento();
  };

  const cerrarModalEditar = () => {
    setAbrirModalEditar(false);
  };

  const actionsModalEliminar = () => {
    setModalEliminar(!modalEliminar);
  };

  const seleccionarTratamientio = (tratamiento) => {
    setTratamientos(tratamiento);
    actionsModalEliminar()
  }

  const editar = (data) => {
    var valorNuevo = {
      ...state.form,
    };

    setAbrirModal(false);
    setAbrirModalEditar(false);
    fetch(`${baseUrl}/precios/${state.form.id}`, {
      method: 'PUT',
      body: JSON.stringify(valorNuevo),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      const json = res.json();
      let data = tratamientos;
      data.map( element => {
        if (element.idTratamiento === state.form.idTratamiento) {
          element.idTratamiento = state.form.idTratamiento;
          element.descripcion = state.form.descripcion;
          element.precio_normal = state.form.precio_normal;
          element.precio_minimo = state.form.precio_minimo
        }
        setTratamientos(data);
        cerrarModalEditar();
      })
    })
      .catch(e => {
        console.log(e)
      })
  };

  const eliminar = () => {
    var valorNuevo = {
      ...state.form,
    };

    fetch(`${baseUrl}/precios/${state.form.id}`, {
      method: 'DELETE',
      body: JSON.stringify(valorNuevo),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      setTratamientos(tratamientos.filter(element => element.id == tratamientos.id));
      actionsModalEliminar();
    })
      .catch(e => {
        console.log(e)
      })
  }



  const renderUser = (currentData, index) => {
    return (
      <tr key={index} className='text-center'>
        <td className="text-left">{currentData.descripcion}</td>
        <td>{currentData.precio_minimo === 0 ? '-' : currentData.precio_minimo }</td>
        <td>${currentData.precio_normal}</td>
        <td>
          <Button variant="warning" className="btn btn-warning" onClick={() => mostrarModalEditar(currentData)}><FontAwesomeIcon icon={faEdit} /></Button>{' '}
          <Button variant="danger" className="btn btn-danger" onClick={() => seleccionarTratamientio(currentData)}><FontAwesomeIcon icon={faTrashAlt} /></Button> {' '}
        </td>
      </tr>
    )
  }

  return (
    <div className="list">
      <div className="base-container">
        <h5><strong>Tratamientos en el sistema</strong></h5>
        <div className="form">
          <div className="form-row">
            <div className="btn-create">
              <Button variant="success" className="btn btn-success btn-create" onClick={() => mostrarModalInsertar()}>Crear +</Button>{' '}
            </div>
            <ReactBootStrap.Table striped bordered hover>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Precio Minimo</th>
                  <th>Precio Normal</th>
                  <th>Prueba</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map(renderUser)}
              </tbody>
            </ReactBootStrap.Table>
          </div>
        </div>
      </div>

      <Modal isOpen={abrirModal}>
        <ModalHeader>
          <div><h3>Insertar Tratamiento</h3></div>
        </ModalHeader>

        <ModalBody>
          <Row>
            <Col>
              <FormGroup>        
              <SelectInput name="tratamiento" value={formData.idTratamiento} onChange={onTratamiento} 
              label="Tratamientos" 
              options={
                  [{ value: "", text: "--Seleccione--" },
                  ...createSelectItems(tratamientos)
                  ]
                } />
              </FormGroup>
            </Col>
          </Row>

          <FormGroup>
            <label>
              Nombre
            </label>
            <input class="form-control" type="text" defaultValue="" id="descripcion" name="descripcion" onChange={handleChange} />
          </FormGroup>

        <Row>
          <Col>          
            <FormGroup>
              <label>
                Precio Normal
              </label>
              <input class="form-control" type="number" defaultValue="0" id="precio_normal" name="precio_normal" onChange={handleChange} />
            </FormGroup></Col>

            <Col>         
            <FormGroup>
              <label>
                Precio Minimo
              </label>
              <input class="form-control" type="number" defaultValue="0" id="precio_minimo" name="precio_minimo" onChange={handleChange} />
            </FormGroup>
          </Col>
        </Row>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={() => insertar()}>Insertar</Button>
          <Button className="btn btn-danger" onClick={() => cerrarModalInsertar()}>Cancelar</Button>
        </ModalFooter>
      </Modal>


    {/* Modal Editar Tratemientos */}
      <Modal isOpen={abrirModalEditar}>
        <ModalHeader>
          <div><h3>Editar Tratamiento</h3></div>
        </ModalHeader>

        <ModalBody>
          <Row>
            <Col>
              <FormGroup>        
              <SelectInput name="tratamiento" value={state.form.idTratamiento} onChange={onTratamiento} 
              label="Tratamientos" 
              options={
                  [{ value: "", text: "--Seleccione--" },
                  ...createSelectItems(tratamientos)
                  ]
                } />
              </FormGroup>
            </Col>
          </Row>

          <FormGroup>
            <label>
              Nombre
            </label>
            <input class="form-control" type="text" value={state.form.descripcion} id="descripcion" name="descripcion" onChange={handleChange} />
          </FormGroup>

        <Row>
          <Col>          
            <FormGroup>
              <label>
                Precio Normal
              </label>
              <input class="form-control" type="number" value={state.form.precio_normal} id="precio_normal" name="precio_normal" onChange={handleChange} />
            </FormGroup></Col>

            <Col>         
            <FormGroup>
              <label>
                Precio Minimo
              </label>
              <input class="form-control" type="number" value={state.form.precio_minimo} id="precio_minimo" name="precio_minimo" onChange={handleChange} />
            </FormGroup>
          </Col>
        </Row>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={() => editar(state.form)}>Insertar</Button>
          <Button className="btn btn-danger" onClick={() => cerrarModalEditar()}>Cancelar</Button>
        </ModalFooter>
      </Modal>

      <Modal
      visible={modalEliminar}
      onCancel={actionsModalEliminar}
      centered
      footer={[
        <Button onClick={actionsModalEliminar}>No</Button>,
        <Button type="primary" danger >Sí</Button>,
      ]}
      >
      Estás seguro que deseas eliminar el tratamiento <b>TRATAMIENTO</b>?
      </Modal>

    </div>
  )
}

function SelectInput(props) {
  return (
    <div className={`form-group ${!props.fullWidth ? 'col-md-6' : ''}`}>
      <label htmlFor={props.name}>{props.label}</label>
      <select name={props.name} id={props.name} className="form-control"
        value={props.value} onChange={props.onChange}>
        {props.options.map(option => (
          <option key={option.value} value={option.value}>{option.text}</option>
        ))}
      </select>
    </div>
  )
}
export default Lista;