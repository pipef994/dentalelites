import React, { useState } from 'react';

function ExamenRadio(props) {
  const [formData, setFormData] = useState(props.formData || {
    examRadio: '',
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
        <h5 className="card-header">Examen Radiográfico</h5>
        <div className="card-body">
          <div className="form-row">
            <div className="form-group col-12">
              <label htmlFor="examRadio">Examen Radiográfico</label>
              <textarea name="examRadio" id="examRadio" className="form-control"
                value={formData.examRadio} onChange={onChange} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-12">
              <label htmlFor="observacion">Observación</label>
              <textarea name="observacion" id="observacion" className="form-control"
                value={formData.observacion} onChange={onChange} />
            </div>
          </div>
        </div>
      </div>
    </form >
  )
}

export default ExamenRadio;
