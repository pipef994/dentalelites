import React, { useState, useEffect } from 'react';

const Anemesis = React.memo((props) => {
  const [formData, setFormData] = useState(props.formData || {
    motConsul: '',
    enfActual: ''
  })

  const onChange = (e) => {
    const newState = {
      ...formData,
      [e.target.name]: e.target.value
    }
    setFormData(newState)
    props.updateValues(formData)
  }

  return (
    <form>
      <div className="card">
        <h5 className="card-header">Anemesis</h5>
        <div className="card-body">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="motConsul">Motivo de consulta</label>
              <textarea name="motConsul" id="motConsul" className="form-control"
                value={formData.motConsul} onChange={onChange} />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="enfActual">Enfermedad Actual</label>
              <textarea name="enfActual" id="enfActual" className="form-control"
                value={formData.enfActual} onChange={onChange}></textarea>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
})
export default Anemesis;