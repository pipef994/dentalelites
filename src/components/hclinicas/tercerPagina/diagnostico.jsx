import React, { useState } from 'react';

function Diagnostico(props) {
  const [formData, setFormData] = useState(props.formData || {
    diagPresu: '',
    diagDefini: '',
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
        <h5 className="card-header">Diagnóstico</h5>
        <div className="card-body">
          <div className="form-row">
            <div className="form-group col-12">
              <label htmlFor="diagPresu">Diagnóstico Presuntivo</label>
              <textarea name="diagPresu" id="diagPresu" className="form-control"
                value={formData.diagPresu} onChange={onChange}> </textarea>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-12">
              <label htmlFor="diagDefini">Diagnóstico Definitivo</label>
              <textarea name="diagDefini" id="diagDefini" className="form-control"
                value={formData.diagDefini} onChange={onChange}> </textarea>
            </div>
          </div>
        </div>
      </div>
    </form >
  )
}

export default Diagnostico