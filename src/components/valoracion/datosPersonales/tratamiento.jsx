import React, { useState, useEffect } from 'react';
import { Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import TreatmentCard from './treatmentCard';




function Tratamiento(props) {
  const baseUrl = "http://localhost:8080/valoracion/tratamientos"

  const [generalTreatments, setGeneralTreatments] = useState([]);
  const [treatments, setTreatments] = useState([]);
  const [treatmentSearchFlag, setTreatmentSearchFlag] = useState(false);
  const [formData, setFormData] = useState(props.formData || {})



  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    fetch(`${baseUrl}`, { method: 'GET' })
      .then(res => res.json())
      .then(res => {
        setGeneralTreatments(res.data); // Con esto tengo la información
        setLoading(false);
      })
      .catch(e => console.log(e));
  }, [])

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


  const handleTreatments = (data) => {
    const newState = {
      ...formData,
      ...data
    }

    setFormData(newState)
    props.updateValues(newState)
  }

  return (
    <form>
      <Accordion defaultActiveKey="0">
        {generalTreatments.map(data => (
            <Card>
              <TreatmentCard baseUrl={baseUrl} data={data} handleTreatments={handleTreatments}></TreatmentCard>
            </Card>
          ))}
      </Accordion>
    </form>
  )
}
export default Tratamiento;