import React, { useState } from 'react';

function AyudasDiagnosticas(props) {
  const [formData, setFormData] = useState(props.formData || {
    peripical: '',
    panorama: '',
    bitewing: '',
    oclusal: '',
    modelos: '',
    otros: '',
    observaciones: ''
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
        <h5 className="card-header">Ayudas Diagnósticas</h5>
        <div className="card-body">
          <div className="form-row">
            <InputCheck name="peripical" value={formData.peripical} onChange={onChange} label="Peripical" />
            <InputCheck name="panorama" value={formData.panorama} onChange={onChange} label="Panorama" />
          </div>
          <div className="form-row">
            <InputCheck name="bitewing" value={formData.bitewing} onChange={onChange} label="Bitewing" />
            <InputCheck name="oclusal" value={formData.oclusal} onChange={onChange} label="Oclusal" />
          </div>
          <div className="form-row">
            <InputCheck name="modelos" value={formData.modelos} onChange={onChange} label="Modelos" />
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
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

function InputCheck(props) {
  return (
    <div className={`form-group ${!props.fullWidth ? 'col-md-6' : ''}`}>
      <div className="form-check">
        <input
          type="checkbox"
          name={props.name}
          id={props.name}
          className="form-check-input"
          value={props.value}
          onChange={props.onChange}
        />
        <label className="form-check-label" htmlFor={props.name}>{props.label}</label>
      </div>
    </div>
  )
}

export default AyudasDiagnosticas;
