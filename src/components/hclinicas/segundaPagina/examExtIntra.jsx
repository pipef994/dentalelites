import React, { useState } from 'react';

function ExamenExtIntra(props) {
  const [formData, setFormData] = useState(props.formData || {
    atm: '',
    labios: '',
    lengua: '',
    paladar: '',
    pisBoca: '',
    carrillos: '',
    glanSali: '',
    maxilares: '',
    senMaxilares: '',
    musMasti: '',
    ganglios: '',
    frenillos: '',
    mucosas: '',
    encias: '',
    amigdalas: '',
  })

  const fields = [
    {
      key: "atm",
      label: "1. A.T.M"
    },
    {
      key: "labios",
      label: "2. Labios"
    },
    {
      key: "lengua",
      label: "3. Lengua"
    },
    {
      key: "paladar",
      label: "4. Paladar"
    },
    {
      key: "pisBoca",
      label: "5. Piso de Boca"
    },
    {
      key: "carrillos",
      label: "6. Carrillos"
    },
    {
      key: "glanSali",
      label: "7. Glandulas Salivares"
    },
    {
      key: "maxilares",
      label: "8. Maxilares"
    },
    {
      key: "senMaxilares",
      label: "9. Senos Maxilares"
    },
    {
      key: "musMasti",
      label: "10. Músculos Masticadores"
    },
    {
      key: "ganglios",
      label: "11. Ganglios"
    },
    {
      key: "frenillos",
      label: "12. Frenillos"
    },
    {
      key: "mucosas",
      label: "13. Mucosas"
    },
    {
      key: "encias",
      label: "14. Encias"
    },
    {
      key: "amigdalas",
      label: "15. Amigdalas"
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
        <h5 className="card-header">Examen Extraoral e Intraoral</h5>
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
        <option value="normal">Normal</option>
        <option value="anormal">Anormal</option>
      </select>
    </div>
  )
}

export default ExamenExtIntra;
