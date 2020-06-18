import React, { useState } from 'react';
import { useForm } from "react-hook-form";


function Antecedentes(props) {
  const { register, errors, handleSubmit, setError, clearError } = useForm();
  const [formData, setFormData] = useState(props.formData || {
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
            <YesNoSelectInput name="embarazo" value={formData.traMedico} onChange={onChange} label="Tratamiento Medico" ref={register({ required: true })} />
            {errors.embarazo && <p>*Campo Obligatorio</p>}
            <YesNoSelectInput name="inMedicamentos" value={formData.inMedicamentos} onChange={onChange} label="Ingestión de Medicamentos" ref={register({ required: true })} />
            {errors.inMedicamentos && <p>*Campo Obligatorio</p>}
          </div>
          <div className="form-row">
            <SelectInput name="reMedicas" value={formData.reMedicas} onChange={onChange} label="Reacción Medicamentos" options={
              [
                { value: "", text: "Seleccione" },
                { value: "anest", text: "Anestesia" },
                { value: "anti", text: "Antibioticos" }
              ]
            } ref={register({ required: true })} />
            {errors.reMedicas && <p>*Campo Obligatorio</p>}
            <YesNoSelectInput name="sanExCort" value={formData.inMedicamentos} onChange={onChange} label="Sangra Excesivamente al cortarse?" ref={register({ required: true })} />
            {errors.sanExCort && <p>*Campo Obligatorio</p>}
          </div>
          <div className="form-row">
            <YesNoSelectInput name="paAlgSan" value={formData.paAlgSan} onChange={onChange} label="Padece de algun problema sanguineo" ref={register({ required: true })} />
            {errors.paAlgSan && <p>*Campo Obligatorio</p>}
            <YesNoSelectInput name="enfRespi" value={formData.enfRespi} onChange={onChange} label="Enfermedades Respiratorias" ref={register({ required: true })} />
            {errors.enfRespi && <p>*Campo Obligatorio</p>}
          </div>
          <div className="form-row">
            <YesNoSelectInput name="sinusitis" value={formData.sinusitis} onChange={onChange} label="Sinusitis" ref={register({ required: true })} />
            {errors.sinusitis && <p>*Campo Obligatorio</p>}
            <YesNoSelectInput name="irradia" value={formData.irradia} onChange={onChange} label="Irradiaciones" ref={register({ required: true })} />
            {errors.irradia && <p>*Campo Obligatorio</p>}
          </div>
          <div className="form-row">
            <YesNoSelectInput name="diaBetis" value={formData.diaBetis} onChange={onChange} label="Diabetis" ref={register({ required: true })} />
            {errors.diaBetis && <p>*Campo Obligatorio</p>}
            <YesNoSelectInput name="fieReu" value={formData.fieReu} onChange={onChange} label="Fiebre Reumatica" ref={register({ required: true })} />
            {errors.fieReu && <p>*Campo Obligatorio</p>}
          </div>
          <div className="form-row">
            <YesNoSelectInput name="hepatitis" value={formData.hepatitis} onChange={onChange} label="Hepatitis" ref={register({ required: true })} />
            {errors.hepatitis && <p>*Campo Obligatorio</p>}
            <YesNoSelectInput name="hipertension" value={formData.hipertension} onChange={onChange} label="Hipertensión" ref={register({ required: true })} />
            {errors.hipertension && <p>*Campo Obligatorio</p>}
          </div>
          <div className="form-row">
            <YesNoSelectInput name="cardiopatia" value={formData.cardiopatia} onChange={onChange} label="Cardiopatia" ref={register({ required: true })} />
            {errors.cardiopatia && <p>*Campo Obligatorio</p>}
            <YesNoSelectInput name="enfRenal" value={formData.enfRenal} onChange={onChange} label="Enfermedades Renales" ref={register({ required: true })} />
            {errors.enfRenal && <p>*Campo Obligatorio</p>}
          </div>
          <div className="form-row">
            <YesNoSelectInput name="enfGas" value={formData.enfGas} onChange={onChange} label="Enfermedades Gastrointestinales" ref={register({ required: true })} />
            {errors.enfGas && <p>*Campo Obligatorio</p>}
            <YesNoSelectInput name="orgSent" value={formData.orgSent} onChange={onChange} label="Organos de los sentidos" ref={register({ required: true })} />
            {errors.orgSent && <p>*Campo Obligatorio</p>}
          </div>
          <div className="form-row">
            <YesNoSelectInput name="embarazo" value={formData.embarazo} onChange={onChange} label="Embarazo" ref={register({ required: true })} />
            <div className="form-group col-md-6">
              <label htmlFor="observacion">Observación</label>
              <textarea name="observacion" id="observacion" className="form-control"
                value={formData.observacion} onChange={onChange} ref={register({ required: true })} />
              {errors.observacion && <p>*Campo Obligatorio</p>}
            </div>
          </div>
          <div className='form-group mt-4'>
            <label htmlFor="antMedOdoFa">Antecedentes Medicos y Odontologicos Familiares</label>
            <textarea name="antMedOdoFa" id="antMedOdoFa" className="form-control"
              value={formData.antMedOdoFa} onChange={onChange} ref={register({ required: true })} />
            {errors.antMedOdoFa && <p>*Campo Obligatorio</p>}
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