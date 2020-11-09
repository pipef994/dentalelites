import React, { useState } from 'react';
import clsx from 'clsx';
import stepsCita from './cita';
import Swal from 'sweetalert2';

//Constantes para paso
const steps = [
  ...stepsCita
]

function CitaOdontologica(props) {
  const [currentStep, setCurrentStep] = useState(0)
  const [saving, setSaving] = useState(false)
  const [saveStatus, setSaveStatus] = useState("")
  const [formData, setFormData] = useState({
    tratamiento: {},
    calendario: {}
  })

  let tempFormData = formData;
  const totalSteps = 2;

  console.log(formData);
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
    let hour = formData.calendario.hour;
    let docOdontologo = formData.tratamiento.odont;
    var salida;
    fcalendario = formData.calendario.date;
    let day = fcalendario.getDate();
    console.log('Numero de dia', day);
    fechActual.setHours(0, 0, 0, 0); //Función para retirar 
    fcalendario.setHours(0, 0, 0, 0);


    if (fcalendario.getTime() <= fechActual.getTime()) {
      Swal.fire({
        icon: 'warning',
        text: 'La fecha seleccionada debe ser mayor a la actual!'
      })
    } else {
      flagConsulCita = true;
    }
    //Consutar Agenda
    if (flagConsulCita) {
      fetch(`http://localhost:8080/citas/consulCita/${docOdontologo}/${fcalendario}/${hour}`, {
        method: 'GET',
      }).then(cita => cita.json()).then(cita => {
        console.log("Tamaño cita", cita.data.length);
        if (cita.data.length === 0) {
          salida = false;
          return salida;
        } else {
          Swal.fire({
            icon: 'warning',
            text: 'Por favor seleccione otra hora o fecha diferente, ya que el odontologo se encuentra agendado.'
          })
        }
        setSaving(false);
      })
    }
  }

  const saveCi = () => {
    setSaving(true);
    setFormData(tempFormData);
    let valor = validaciones(tempFormData);
    if (valor !== false) {
      setSaving(true);
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
            fetch(`http://localhost:8080/citas/enviarCita/${email}`, {
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
      console.log(formData);
    }
  }

  const renderButtons = () => {
    return (
      <div className="row my-3">
        <div className="col-12">
          <button type="button" disabled={currentStep === 0} className="btn btn-secondary" onClick={previousStep}>Atrás</button>
          {currentStep < totalSteps - 1 ?
            <button type="button" className="btn btn-primary mx-2" onClick={nextStep}>Siguiente</button>
            :
            <button type="button" className="btn btn-success mx-2" onClick={saveCi} disabled={saving}>Asignar</button>
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
          <h1 className="my-3">Agendamiento de Cita</h1>
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