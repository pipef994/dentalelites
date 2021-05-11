import React, { useState, useEffect } from 'react';
import "./listaStyle.scss";
import { Button, Row, Container, Form} from "reactstrap";

import DataTable  from './dataTable';
import Pagination  from './pagination';
import ModalCreate  from './modalCreate';


var NumberFormat = require('react-number-format');

const Lista = (props) => {
  const baseUrl = "http://localhost:8080/valoracion/tratamientos"

  const [treatments, setTreatments] = useState([]);
  const [generalTreatments, setGeneralTreatments] = useState([]);

  /*Form */
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


  /*Pagination*/
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(5);
  

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentTreatments = treatments.slice(indexOfFirstData, indexOfLastData);

  const paginate = (pageNumber) => setCurrentPage(pageNumber)


  /*Modal*/
  const [createModal, setCreateModal] = useState(false);

  const createModalAction = () => {
    setCreateModal(!createModal);
  };

  const closeModal = () => setCreateModal(!createModal);
/*Modal*/



  const handleChange = (event) => {
    setState({
      ...state,
      form: {
        ...state.form,
        [event.target.name]: event.target.value,
      },
    });
  };

  const onTreatment = (event) => {
    const newState = {
      ...formData,
      [event.target.name]: event.target.value
    }
    setFormData(newState)
  }



  useEffect(() => {
    setLoading(true);
    fetch(`${baseUrl}/precios`, { method: 'GET' })
    .then(res => res.json())
    .then(res => {
      setTreatments(res.data);
      searchGeneralTreatment();
      setLoading(false);
    }).catch(e => console.log(e));
  }, [])

  const searchGeneralTreatment = () => {
    fetch(`${baseUrl}`, { method: 'GET' })
    .then(res => res.json())
    .then(res => {
      if (res.mensaje === "OK") {
        setGeneralTreatments(res.data);
      }
    }).catch(e => console.log(e));
  }



  return (

    <div className="list">
      <Container>
        <h3><strong>Tratamientos en el sistema</strong></h3>
          <Form>
            <Row>
              <div>
                <Button  variant="success" className="btn btn-success" onClick={() => createModalAction()}>Crear +</Button>{' '}
              </div>
            </Row>

            <Row>
              <DataTable  data={currentTreatments} 
                          loading={loading}
                          generalTreatmentsSelect={generalTreatments}
                          onChange={(event) => handleChange(event)}
                          onTreatment={(event) => onTreatment(event)}
                          baseUrl={baseUrl}
                          state={state} />
            </Row>

            <Row>
              <Pagination dataPerPage={dataPerPage} totalData={treatments.length} paginate={paginate} />
            </Row>

            <Row>
              <ModalCreate  generalTreatmentsSelect={generalTreatments}
                            isOpen={createModal} 
                            close={closeModal} 
                            onChange={(event) => handleChange(event)}
                            onTreatment={(event) => onTreatment(event)}
                            baseUrl={baseUrl}
                            state={state}/>
            </Row>
          </Form>
      </Container>
    </div>
  )
}


export default Lista;