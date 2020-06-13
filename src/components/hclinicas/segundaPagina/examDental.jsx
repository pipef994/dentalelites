import React, { useState } from 'react';

function ExamenDental(props) {
  const [formData, setFormData] = useState(props.formData || {
    supernumeraios: '',
    agenesia: '',
    incluidos: '',
    abrasion: '',
    erosion: '',
    atriccion: '',
    abfracción: '',
    manCamColor: '',
    malposicion: '',
    maloclusion: '',
    trauma: '',
    habitos: '',
    apreDental: '',
    onicofagia: '',
    muerdObjDien: '',
    fumador: '',
  })

  const fields = [
    {
      key: "supernumeraios",
      label: "1. Supernumeraios"
    },
    {
      key: "agenesia",
      label: "2. Agenesia"
    },
    {
      key: "incluidos",
      label: "3. Incluidos"
    },
    {
      key: "abrasion",
      label: "4. Abrasión"
    },
    {
      key: "erosion",
      label: "5. Errosión"
    },
    {
      key: "atriccion",
      label: "6. Atricción"
    },
    {
      key: "abfracción",
      label: "7. Abfracción"
    },
    {
      key: "manCamColor",
      label: "8. Manchas - Cambios de color"
    },
    {
      key: "malposicion",
      label: "9. Malposición"
    },
    {
      key: "maloclusion",
      label: "10. Maloclusión"
    },
    {
      key: "trauma",
      label: "11. Trauma"
    },
    {
      key: "habitos",
      label: "12. Hábitos"
    },
    {
      key: "apreDental",
      label: "12.1. Apretamiento Dental"
    },
    {
      key: "onicofagia",
      label: "12.2. Onicofagia"
    },
    {
      key: "muerdObjDien",
      label: "12.3. Muerde objectos con dientes"
    },
    {
      key: "fumador",
      label: "12.4. Fumador"
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
        <h5 className="card-header">Examen Dental</h5>
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

export default ExamenDental;
