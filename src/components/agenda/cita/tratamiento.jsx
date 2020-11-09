import React, { useState } from 'react';
import { useForm } from "react-hook-form";

function Tratamiento(props) {
  const [odontologos, setOdontologos] = useState([]);
  const [formData, setFormData] = useState(props.formData || {
    tratamiento: '',
    odontologo: ''
  })

  const BuscarOdont = (trat) => {
    fetch(`http://localhost:8080/usuarios/odontologos/${trat}`, {
      method: 'GET',
    }).then(res => {
      return res.json()
    }).then(res => {
      if (res.mensaje === "OK") {
        setOdontologos(res.data);
      }
    }).catch(e => console.log(e));
  }

  /*Recorre el objeto devuelto por el metodo de BuscarOdont
  y entregar los valores al arreglo a presentar en el campo
  odontologo*/
  const createSelectItems = (data) => {
    let items = [];
    for (let i = 0; i < data.length; i++) {
      let nombre = data[i].firstName + " " + data[i].secondName + " " + data[i].firstLastName + " " + data[i].secondLastName;
      items.push({ value: data[i].nId, text: nombre });
    }
    return items;
  }

  const onTratamiento = (e) => {
    BuscarOdont(e.target.value);
    const newState = {
      ...formData,
      [e.target.name]: e.target.value
    }
    setFormData(newState)
    props.updateValues(newState)
  }

  const onOdontologo = (e) => {
    const newState = {
      ...formData,
      [e.target.name]: e.target.value
    }
    setFormData(newState)
    props.updateValues(newState)
  }

  return (
    <form>
      <div className="card">
        <h5 className="card-header">Asignación de Cita</h5>
        <div className="card-body">
          <div className="form-row">
            <SelectInput name="tratamiento" value={formData.tratamiento} onChange={onTratamiento} label="Tratamiento" options={[
              { value: "sc", text: "--Seleccione--" },
              { value: "gen", text: "General" },
              { value: "esp", text: "Especializado" }
            ]} required />
            <SelectInput name="odont" value={formData.odontologo} onChange={onOdontologo} label="Odontologo" options={
              [{ value: "sc", text: "--Seleccione--" },
              ...createSelectItems(odontologos)
              ]
            } />
          </div>
        </div>
      </div>
    </form>
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
export default Tratamiento;