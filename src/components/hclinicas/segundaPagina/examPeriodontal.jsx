import React, { useState } from 'react';

function ExamenPeriodontal(props) {
  const [formData, setFormData] = useState(props.formData || {
    plBlanca: '',
    bolsas: '',
    movilidad: '',
    sangrado: '',
    calculos: '',
    recGin: '',
  })

  const fields = [
    {
      key: "plBlanca",
      label: "1. Placa Blanca"
    },
    {
      key: "bolsas",
      label: "2. Bolsas"
    },
    {
      key: "movilidad",
      label: "3. Movilidad"
    },
    {
      key: "sangrado",
      label: "4. Sangrado"
    },
    {
      key: "calculos",
      label: "5. Cálculos"
    },
    {
      key: "recGin",
      label: "6. Recesión Gingival"
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
        <h5 className="card-header">Examen Periodontal</h5>
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

export default ExamenPeriodontal;
