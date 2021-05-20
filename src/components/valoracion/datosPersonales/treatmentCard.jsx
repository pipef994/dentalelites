import React, { useState } from 'react';
import { Accordion, Card } from "react-bootstrap";


import CustomToggle from './customToggle';
import TreatmentSelection from './treatmentSelection';





const TreatmentCard = ({ baseUrl, data, handleTreatments }) => {
  const [treatments, setTreatments] = useState([]);
  const [treatmentSearchFlag, setTreatmentSearchFlag] = useState(false);
  const [formData, setFormData] = useState([])

  const searchTreatmentById = (id) => {
    if (treatmentSearchFlag) {
      return;
    }

    fetch(`${baseUrl}/precios/${id}`, { method: 'GET' })
      .then(res => res.json())
      .then(res => {
        if (res.mensaje === "OK") {
          setTreatments(res.data);
        }
      }).catch(e => console.log(e));
  }

  const handleSearchTreatment = (id) => {
    searchTreatmentById(id);
    setTreatmentSearchFlag(true);
    console.log(treatments);
  }

  const handleTreatmentForm = (data) => {
    let flag = false;

    const newFormData = formData.map( (formTreatment) => {
      if (formTreatment.descripcion === data.descripcion) {
        flag = true;
        return {
          ...formTreatment,
          cantidad: data.cantidad,
          valor_unitario: data.valor_unitario,
          valor_total: data.valor_total
        }
      }
   
        return formTreatment;
    } )

    if (flag) {
      setFormData(newFormData);
      handleTreatments(formData);
      return;
    }

    setFormData([ ...formData, data]);
    handleTreatments(formData);
}


  return (
    <>
      <Card.Header >
        <CustomToggle eventKey={data.id} title={data.nombre} baseUrl={baseUrl} handleSearchTreatment={handleSearchTreatment}></CustomToggle>
      </Card.Header>

      <Accordion.Collapse eventKey={data.id}>
        <Card.Body>
          {treatments.map(treatment => (
            <TreatmentSelection description={treatment.descripcion} minPrice={treatment.precio_minimo} normalPrice={treatment.precio_normal} 
            handleTreatmentForm={handleTreatmentForm} >
            </TreatmentSelection>
          ))}
        </Card.Body>
      </Accordion.Collapse>
    </>
  )
}

export default TreatmentCard;
