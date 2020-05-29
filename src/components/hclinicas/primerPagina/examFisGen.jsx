import React, { useState } from 'react';

function ExamFisGen(props) {
  const [formData, setFormData] = useState(props.formData || {
    pulso: '',
    frecRsp: '',
    temp: '',
    pa: '',
    talla: '',
    peso: '',
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
        <h5 className="card-header">Examen Físico General</h5>
        <div className="card-body">
          <div className="form-row">
            <Input name="pulso" value={formData.pulso} onChange={onChange} label="Pulso" />
            <Input name="frecRsp" value={formData.frecRsp} onChange={onChange} label="Frecuencia Respiratoria" />
          </div>
          <div className="form-row">
            <Input name="temp" value={formData.temp} onChange={onChange} label="Temperatura" />
            <Input name="pa" value={formData.pa} onChange={onChange} label="P.A" />
          </div>
          <div className="form-row">
            <Input name="talla" value={formData.talla} onChange={onChange} label="Talla" />
            <Input name="peso" value={formData.peso} onChange={onChange} label="Peso" />
          </div>
          <div className="form-row">
            <div className="form-group col-12">
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

export default ExamFisGen;
