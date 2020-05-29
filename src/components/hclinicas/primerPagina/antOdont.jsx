import React, { useState } from 'react';

function AntOdont(props) {
  const [formData, setFormData] = useState(props.formData || {
    tratPrev: '',
    cepDent: '',
    seDental: '',
    enjuBucal: '',
    traDental: '',
    habitos: '',
    observacion: ''
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
        <h5 className="card-header">Antecedentes Odontologicos</h5>
        <div className="card-body">
          <div className="form-row">
            <YesNoSelectInput name="tratPrev" value={formData.tratPrev} onChange={onChange} label="Tratamientos Previos" />
            <YesNoSelectInput name="cepDent" value={formData.cepDent} onChange={onChange} label="Cepillo Dental" />
          </div>
          <div className="form-row">
            <YesNoSelectInput name="seDental" value={formData.seDental} onChange={onChange} label="Seda Dental" />
            <YesNoSelectInput name="enjuBucal" value={formData.enjuBucal} onChange={onChange} label="Enjuague Bucal" />
          </div>
          <div className="form-row">
            <YesNoSelectInput name="habitos" value={formData.paAlgSan} onChange={onChange} label="Habitos" />
            <div className="form-group col-md-6">
              <label htmlFor="observacion">Observación</label>
              <textarea name="observacion" id="observacion" className="form-control"
                value={formData.observacion} onChange={onChange}> </textarea>
            </div>
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

export default AntOdont;
