import React, { useState, Component, Fragment } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Calendario(props) {

  const [formData, setFormData] = useState(props.formData || {
    date: new Date(),
    hour: ''
  })

  const onChange = (e) => {
    const newState = {
      ...formData,
      [e.target.name]: e.target.value
    }
    setFormData(newState)
    props.updateValues(newState)
  }

  const renderButtons = () => {

    const horas = ["09:00 AM",
      "09:30 AM",
      "10:00 AM",
      "10:30 AM",
      "11:00 AM",
      "11:30 AM",
      "12:00 AM",
      "12:30 AM",
      "01:00 PM",
      "01:30 PM",
      "02:00 PM",
      "02:30 PM",
      "03:00 PM",
      "03:30 PM",
      "04:00 PM",
      "04:30 PM",
      "05:00 PM",
      "05:30 PM",
      "06:00 PM",
      "06:30 PM"]

    return (
      <div className="container-fluid">
        <div className="row">
          {horas.map((hora) => {
            return (
              <div className="col-xs-4 col-sm-4 col-md-3 py-1 text-center" key={hora}>
                <button type="button" className="btn btn-outline-info" onChange={onChange} value={formData.hour} >{hora}</button>
              </div>
            )
          })}
        </div>
      </div>)
  }


  return (
    <div className="card">
      <h5 className="card-header">Fecha de Cita</h5>
      <div className="card-body">
        <div className="form-row">
          <Calendar className="mx-auto" onChange={onChange} value={formData.date} />
          <div className="horas col-md-8 py-4 col-sm-12">
            {
              renderButtons()
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calendario