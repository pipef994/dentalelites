import React, { useState } from 'react';

function Cancelacion(props) {
  const [formData, setFormData] = useState(props.formData || {
    tip: '',
    nId: ''
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
        <h5 className="card-header">Cancelación de Cita</h5>
        <div className="card-body">
          <div className="form-row">
            <SelectInput name="tip" value={formData.tip} onChange={onChange} label="Identificiacion" options={[
              { value: "sc", text: "Seleccione" },
              { value: "cc", text: "Cédula de ciudadanía" },
              { value: "ce", text: "Cédula de extranjería" },
              { value: "di", text: "Documento personal de Identificación" },
              { value: "ps", text: "Pasaporte" },
              { value: "Re", text: "Registro" },
              { value: "ti", text: "Tarjeta de identidad" }
            ]} />
            <Input name="nId" value={formData.nId} onChange={onChange} label="N° Identificación" />
          </div>
          <button color="success">Cancelar</button>
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

export default Cancelacion;