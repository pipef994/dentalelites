import React, { useState } from 'react';

function tratamiento(props) {
  const [formData, setFormData] = useState(props.formData || {
    tratamiento: ''
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
        <h5 className="card-header">Asignación de Cita</h5>
        <div className="card-body">
          <Input name="tipeServ" value={formData.tratamiento} onChange={onChange} label="Tipo Servicio"></Input>
          <select id="tipServ" name="tipServ">
            <option value="sc">Seleccione</option>
            <option value="gn">General</option>
            <option value="es">Especializado</option>
          </select>
        </div>
      </div>
    </form>
  )
}

export default tratamiento;