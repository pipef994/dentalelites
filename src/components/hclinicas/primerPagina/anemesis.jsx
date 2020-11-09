import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";

const Anemesis = React.memo((props) => {
  const { register, errors, handleSubmit, setError, clearError } = useForm();
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
        <h5 className="card-header">Anamnesis</h5>
        <div className="card-body">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="motConsul">Motivo de consulta</label>
              <textarea name="motConsul" id="motConsul" className="form-control"
                value={formData.motConsul} onChange={onChange} ref={register({ required: true })} />
              {errors.motConsul && <p>*Campo Obligatorio</p>}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="enfActual">Enfermedad Actual</label>
              <textarea name="enfActual" id="enfActual" className="form-control"
                value={formData.enfActual} onChange={onChange} ref={register({ required: true })} />
              {errors.enfActual && <p>*Campo Obligatorio</p>}
            </div>
          </div>
        </div>
      </div>
    </form>
  )
})
export default Anemesis;