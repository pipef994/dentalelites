import React, { useState } from 'react';

function PlanTratamiento(props) {
  const [formData, setFormData] = useState(props.formData || {
    proPre: '',
    operatoria: '',
    endodoncia: '',
    cirugia: '',
    rehabilita: '',
    protesis: '',
    descPlan: '',
    valTrat: '',
    valPeso: ''
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
        <h5 className="card-header">Plan de tratamiento</h5>
        <div className="card-body">
          <div className="form-row">
            <InputCheck name="proPre" value={formData.proPre} onChange={onChange} label="Promoción y Prevención" />
            <InputCheck name="operatoria" value={formData.operatoria} onChange={onChange} label="Operatoria" />
            <InputCheck name="endodoncia" value={formData.endodoncia} onChange={onChange} label="Endodoncia" />
            <InputCheck name="cirugia" value={formData.cirugia} onChange={onChange} label="Cirugía" />
            <InputCheck name="rehabilita" value={formData.rehabilita} onChange={onChange} label="Rehabilitación" />
            <InputCheck name="protesis" value={formData.protesis} onChange={onChange} label="Prótesis" />
          </div>
          <div className="form-row">
            <div className="form-group col-12">
              <label htmlFor="descPlan">Descripción del plan</label>
              <textarea name="descPlan" id="descPlan" className="form-control"
                value={formData.descPlan} onChange={onChange}> </textarea>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-12">
              <label htmlFor="valTrat">Valor del tratamiento</label>
              <textarea name="valTrat" id="valTrat" className="form-control"
                value={formData.valTrat} onChange={onChange}> </textarea>
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

export default PlanTratamiento