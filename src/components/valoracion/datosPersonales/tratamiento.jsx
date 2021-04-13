import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function Tratamiento(props) {
  // const [odontologos, setOdontologos] = useState([]);
  // const [formData, setFormData] = useState(props.formData || {
  //   tratamiento: '',
  //   odontologo: '',
  //   usuario: window.localStorage.getItem("email"), //Se toma el correo de memoria
  // })

  // const BuscarOdont = (trat) => {
  //   fetch(`http://localhost:8080/usuarios/odontologos/${trat}`, {
  //     method: 'GET',
  //   }).then(res => {
  //     return res.json()
  //   }).then(res => {
  //     if (res.mensaje === "OK") {
  //       setOdontologos(res.data);
  //     }
  //   }).catch(e => console.log(e));
  // }

  // /*Recorre el objeto devuelto por el metodo de BuscarOdont
  // y entregar los valores al arreglo a presentar en el campo
  // odontologo*/
  // const createSelectItems = (data) => {
  //   let items = [];
  //   for (let i = 0; i < data.length; i++) {
  //     let nombre = data[i].firstName + " " + data[i].secondName + " " + data[i].firstLastName + " " + data[i].secondLastName;
  //     items.push({ value: data[i].nId, text: nombre });
  //   }
  //   return items;
  // }

  // const onTratamiento = (e) => {
  //   BuscarOdont(e.target.value);
  //   const newState = {
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   }
  //   setFormData(newState)
  //   props.updateValues(newState)
  // }

  // const onOdontologo = (e) => {
  //   const newState = {
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   }
  //   setFormData(newState)
  //   props.updateValues(newState)
  // }

  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Odontologia General
      </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Valoración sin costo</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            Click me!
      </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
    // <form>
    //   <div className="card">
    //     <h5 className="card-header">Asignación de Cita</h5>
    //     <div className="card-body">
    //       <div className="form-row">
    //         <SelectInput name="tratamiento" value={formData.tratamiento} onChange={onTratamiento} label="Tratamiento" options={[
    //           { value: "", text: "--Seleccione--" },
    //           { value: "gen", text: "General" },
    //           { value: "esp", text: "Especializado" }
    //         ]} required />
    //         <SelectInput name="odont" value={formData.odontologo} onChange={onOdontologo} label="Odontólogo" options={
    //           [{ value: "", text: "--Seleccione--" },
    //           ...createSelectItems(odontologos)
    //           ]
    //         } />
    //       </div>
    //     </div>
    //   </div>
    // </form>
  )
}

// function SelectInput(props) {
//   return (
//     <div className={`form-group ${!props.fullWidth ? 'col-md-6' : ''}`}>
//       <label htmlFor={props.name}>{props.label}</label>
//       <select name={props.name} id={props.name} className="form-control"
//         value={props.value} onChange={props.onChange}>
//         {props.options.map(option => (
//           <option key={option.value} value={option.value}>{option.text}</option>
//         ))}
//       </select>
//     </div>
//   )
// }
export default Tratamiento;