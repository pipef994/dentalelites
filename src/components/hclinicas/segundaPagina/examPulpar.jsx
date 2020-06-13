import React, { useState } from 'react';

function ExamenPulpar(props) {
  const [formData, setFormData] = useState(props.formData || {
    camColor: '',
    dolor: '',
    movilidadExmPul: '',
    tumefaccion: '',
    fistula: '',
  })

  const fields = [
    {
      key: "camColor",
      label: "1. Cambio de Color"
    },
    {
      key: "dolor",
      label: "2. Dolor"
    },
    {
      key: "movilidadExmPul",
      label: "3. Mmovilidad"
    },
    {
      key: "tumefaccion",
      label: "4. Tumefacción"
    },
    {
      key: "fistula",
      label: "5. Fistula"
    },
  ]

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
        <h5 className="card-header">Examen Pulpar</h5>
        <div className="card-body">
          <div className="form-row">
            {fields.map(({ key, label }) => (
              <SelectInput key={key} name={key} value={formData[key]} onChange={onChange} label={label} />
            ))}
          </div>
        </div>
      </div>
    </form >
  )
}

function SelectInput(props) {
  return (
    <div className={`form-group ${!props.fullWidth ? 'col-md-6' : ''}`}>
      <label htmlFor={props.name}>{props.label}</label>
      <select name={props.name} id={props.name} className="form-control"
        value={props.value} onChange={props.onChange}>
        <option value="">-- Seleccione --</option>
        <option value="si">Sí</option>
        <option value="no">No</option>
      </select>
    </div>
  )
}

export default ExamenPulpar;
