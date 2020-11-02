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
  const totalSteps = 3;

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
    let bandera = new Boolean(false);

    // Validar si la fecha escogida es mayor a la actual
    let fechActual = new Date();
    let fcalendario = new Date();
    let docOdontologo = formData.tratamiento.odont;
    fcalendario = formData.calendario.date;
    fechActual.setHours(0, 0, 0, 0); //Función para retirar 
    fcalendario.setHours(0, 0, 0, 0);
    console.log(fechActual);
    console.log(fcalendario);
    if (fcalendario < fechActual) {
      Swal.fire({
        icon: 'warning',
        text: 'La fecha seleccionada es inferior a la actual, por favor selecciona una fecha superior!'
      })
    } else {
      bandera = true;
    }
    // Validar si la fecha seleccionada es igual a la actual
    if (fcalendario.getTime() === fechActual.getTime()) {
      Swal.fire({
        icon: 'warning',
        text: 'La fecha seleccionada es igual a la actual, por favor selecciona una fecha superior!'
      })
    } else {
      bandera = true;
    }
    //Consutar Agenda
    if (bandera) {
      console.log(docOdontologo);
      fetch('http://localhost:8080/citas/consulCita', {
        method: 'POST',
        body: JSON.stringify(docOdontologo),
        headers: {
          'content-Type': 'application/json'
        }
      }).then(cita => cita.json()).then(cita => {
        if (cita.mensaje === 'CitaCreada') {
          //Continuar con el desarrollo
        }
      })
      // fetch('http://localhost:8080/citas/consulCita', {
      //   method: 'GET'
      // }).then(res => res.json())
      //   .then(res => {
      //     console.log(res.data);

      //   })
      //   .catch(e => console.log(e));
    }

  }

  const saveCi = () => {
    validaciones(formData);
    // setSaving(true);
    // fetch('http://localhost:8080/citas', {
    //   method: 'POST',
    //   body: JSON.stringify(formData),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // }).then(res => res.json())
    //   .then(res => {
    //     if (res.mensaje === "OK") {
    //       Swal.fire({
    //         icon: 'success',
    //         text: 'Cita Agendada con exito!'
    //       })
    //     }
    //   }).catch(e => {
    //     console.log(e);
    //     Swal.fire({
    //       icon: 'warning',
    //       text: 'Ocurrio un inconveniente al agendar tu cita!'
    //     })
    //   })
    //   .finally(() => {
    //     setSaving(false)
    //   })
    // console.log(formData);
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