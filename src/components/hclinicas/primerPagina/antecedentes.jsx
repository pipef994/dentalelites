import React, { useState } from 'react';


function Antecedentes(props) {
  const [formData, setFormData] = useState({
    traMedico: '',
    inMedicamentos: '',
    reMedicas: '',
    sanExCort: '',
    paAlgSan: '',
    enfRespi: '',
    sinusitis: '',
    irradia: '',
    diaBetis: '',
    fieReu: '',
    hepatitis: '',
    hipertension: '',
    cardiopatia: '',
    enfRenal: '',
    enfGas: '',
    orgSent: '',
    embarazo: '',
    observacion: '',
    antMedOdoFa: ''
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
        <h5 className="card-header">Antecendentes Médicos</h5>
        <div className="card-body">
          <div className="form-row">
            <YesNoSelectInput name="embarazo" value={formData.traMedico} onChange={onChange} label="Tratamiento Medico" />
            <YesNoSelectInput name="inMedicamentos" value={formData.inMedicamentos} onChange={onChange} label="Ingestión de Medicamentos" />
          </div>
          <div className="form-row">
            <SelectInput name="reMedicas" value={formData.reMedicas} onChange={onChange} label="Reacción Medicamentos" options={
              [
                { value: "", text: "Seleccione" },
                { value: "anest", text: "Anestesia" },
                { value: "anti", text: "Antibioticos" }
              ]
            } />
            <YesNoSelectInput name="sanExCort" value={formData.inMedicamentos} onChange={onChange} label="Sangra Excesivamente al cortarse?" />
          </div>
          <div className="form-row">
            <YesNoSelectInput name="paAlgSan" value={formData.paAlgSan} onChange={onChange} label="Padece de algun problema sanguineo" />
            <YesNoSelectInput name="enfRespi" value={formData.enfRespi} onChange={onChange} label="Enfermedades Respiratorias" />
          </div>
          <div className="form-row">
            <YesNoSelectInput name="sinusitis" value={formData.sinusitis} onChange={onChange} label="Sinusitis" />
            <YesNoSelectInput name="irradia" value={formData.irradia} onChange={onChange} label="Irradiaciones" />
          </div>
          <div className="form-row">
            <YesNoSelectInput name="diaBetis" value={formData.diaBetis} onChange={onChange} label="Diabetis" />
            <YesNoSelectInput name="fieReu" value={formData.fieReu} onChange={onChange} label="Fiebre Reumatica" />
          </div>
          <div className="form-row">
            <YesNoSelectInput name="hepatitis" value={formData.hepatitis} onChange={onChange} label="Hepatitis" />
            <YesNoSelectInput name="hipertension" value={formData.hipertension} onChange={onChange} label="Hipertensión" />
          </div>
          <div className="form-row">
            <YesNoSelectInput name="cardiopatia" value={formData.cardiopatia} onChange={onChange} label="Cardiopatia" />
            <YesNoSelectInput name="enfRenal" value={formData.enfRenal} onChange={onChange} label="Enfermedades Renales" />
          </div>
          <div className="form-row">
            <YesNoSelectInput name="enfGas" value={formData.enfGas} onChange={onChange} label="Enfermedades Gastrointestinales" />
            <YesNoSelectInput name="orgSent" value={formData.orgSent} onChange={onChange} label="Organos de los sentidos" />
          </div>
          <div className="form-row">
            <YesNoSelectInput name="embarazo" value={formData.embarazo} onChange={onChange} label="Embarazo" />
            <div className="form-group col-md-6">
              <label htmlFor="observacion">Observación</label>
              <textarea name="observacion" id="observacion" className="form-control"
                value={formData.observacion} onChange={onChange}> </textarea>
            </div>
          </div>
          <div className='form-group mt-4'>
            <label htmlFor="antMedOdoFa">Antecedentes Medicos y Odontologicos Familiares</label>
            <textarea name="antMedOdoFa" id="antMedOdoFa" className="form-control"
              value={formData.antMedOdoFa} onChange={onChange}> </textarea>
          </div>
        </div>
      </div>
    </form >
  )
}

function YesNoSelectInput(props) {
  return (
    <SelectInput {...props} options={
      [
        { value: "", text: "Seleccione" },
        { value: "si", text: "Si" },
        { value: "no", text: "No" }
      ]
    } />
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

export default Antecedentes