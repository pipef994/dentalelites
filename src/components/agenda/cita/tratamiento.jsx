import React, { useState } from 'react';

function Tratamiento(props) {
  const [formData, setFormData] = useState(props.formData || {
    tratamiento: '',
    odontologo: ''
  })

  const onChange = (e) => {
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
            <SelectInput name="tratamiento" value={formData.tratamiento} onChange={onChange} label="Tratamiento" options={[
              { value: "sc", text: "--Seleccione--" },
              { value: "gn", text: "General" },
              { value: "es", text: "Especializado" }
            ]} />
            <Input name="odont" value={formData.odontologo} onChange={onChange} label="Odontologo" disabled />
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

function Input(props) {
  return (
    <div className={`form-group ${!props.fullWidth ? 'col-md-6' : ''}`}>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type="text"
        name={props.name}
        id={props.name}
        className="form-control"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  )
}



export default Tratamiento;