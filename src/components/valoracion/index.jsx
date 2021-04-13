import React, { useState } from 'react';
import clsx from 'clsx';
import stepsDatos from './datosPersonales';
import Swal from 'sweetalert2';
import moment from 'moment';
import 'moment/locale/es';
import _ from "lodash";
moment.locale('es');

//Constantes para paso
const steps = [
  ...stepsDatos
]

function CitaOdontologica(props) {
  const [currentStep, setCurrentStep] = useState(0)
  const [saving, setSaving] = useState(false)
  const [saveStatus, setSaveStatus] = useState("")
  // const [nextPass, setnextPass] = useState(false)
  const [formData, setFormData] = useState({
    datospersona: {},
    tratamiento: {},
    // calendario: {}
  })

  let tempFormData = formData;
  // tempFormData.tratamiento.user = window.localStorage.getItem("email"); //Se toma el correo de memoria
  // console.log('Formularios', tempFormData);
  const totalSteps = 2;

  const changeFormData = (dataId) => {
    return (data) => {
      tempFormData = {
        ...tempFormData,
        [dataId]: { ...data }
      }
    }
  }

  const Step = ({ Component, dataId }) => {
    return (
      <div className="row my-3">
        <div className="col-12">
          <Component formData={formData[dataId]} updateValues={changeFormData(dataId)} />
        </div>
      </div>
    )
  }

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
    setFormData(tempFormData);
  }
  const previousStep = () => {
    setCurrentStep(currentStep - 1)
  }

  const validaciones = (formData) => {

    let flagConsulCita = new Boolean(false);
    let fechActual = new Date();
    let fcalendario = new Date();
    let horaCita = formData.calendario.hour;
    let docOdontologo = formData.tratamiento.odont;

    fcalendario = formData.calendario.date;
    fechActual.setHours(0, 0, 0, 0);
    fcalendario.setHours(0, 0, 0, 0);

    let aux = moment(fcalendario).weekday();
    console.log("dia de la semana", aux);

    if (aux === 6) {
      Swal.fire({
        icon: 'warning',
        text: 'Por favor selecciona otra fecha!, los domingos no son días habiles.'
      })
      flagConsulCita = false;
    } else {
      if (fcalendario.getTime() <= fechActual.getTime()) {
        Swal.fire({
          icon: 'warning',
          text: 'La fecha seleccionada debe ser mayor a la actual!'
        })
        flagConsulCita = false;
      } else {
        flagConsulCita = true;
      }
    }

    if (flagConsulCita) {
      console.log('Entro');
      fcalendario = fcalendario.toISOString();
      console.log(fcalendario);
      fetch(`http://localhost:8080/citas/consulCita/${docOdontologo}/${fcalendario}/${horaCita}`, {
        method: 'GET',
      }).then(res => {
        return res.json()
      }).then(res => {
        if (res.mensaje === "OK") {
          Swal.fire({
            icon: 'warning',
            text: '¡La fecha o hora seleccionada ya se encuentra agendada por favor selecciona otra!'
          })
        } else {
          saveCi(formData);
        }
      }).catch(e => console.log(e));
    }
  }

  const orquestador = () => {
    setSaving(true);
    setFormData(tempFormData);
    validaciones(tempFormData);
    setSaving(false);
  }

  const saveCi = (formData) => {

    fetch('http://localhost:8080/citas', {
      method: 'POST',
      body: JSON.stringify(tempFormData),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(res => {
        if (res.mensaje === "OK") {
          var email = window.localStorage.getItem("email"); //Se toma el correo de memoria
          Swal.fire({
            icon: 'success',
            text: 'Cita Agendada con exito, a su correo llegara la notificación del agendamiento de la cita!'
          });

          let fdate = moment(tempFormData.calendario.date).format("MMMM DD YYYY");
          let hour = tempFormData.calendario.hour;
          fetch(`http://localhost:8080/citas/enviarCita/${email}/${fdate}/${hour}`, {
            method: 'GET',
          }).then(res => res.json()).
            then(res => {
              if (res.mensaje === 'OK') {
                console.log('Correo enviado');
              }
            })
        }
      }).catch(e => {
        console.log(e);
        Swal.fire({
          icon: 'warning',
          text: 'Ocurrio un inconveniente al agendar tu cita!'
        })
      })
      .finally(() => {
        setSaving(false)
      })
  }

  const renderButtons = () => {
    return (
      <div className="row my-3">
        <div className="col-12">
          <button type="button" disabled={currentStep === 0} className="btn btn-secondary" onClick={previousStep}>Atrás</button>
          {currentStep < totalSteps - 1 ?
            <button type="button" className="btn btn-primary mx-2" onClick={nextStep}>Siguiente</button>
            :
            <button type="button" className="btn btn-success mx-2" onClick={orquestador} disabled={saving}>Asignar</button>
          }
        </div>
      </div>
    )
  }

  //Se valida el progreso
  const progress = Number((currentStep + 1) / totalSteps * 100)

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-12">
          <div className="progress">
            <div className={clsx("progress-bar progress-bar-striped", {
              'bg-success': currentStep === totalSteps - 1
            })}
              role="progressbar"
              style={{ "width": progress + "%" }}
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h1 className="my-3">Valoración</h1>
        </div>
      </div>
      {renderButtons()}
      {steps.map((step, i) => (
        i === currentStep ? <Step key={step.dataId} Component={step.component} dataId={step.dataId} /> : null
      ))}
      {renderButtons()}
    </div>
  )
}

export default CitaOdontologica;