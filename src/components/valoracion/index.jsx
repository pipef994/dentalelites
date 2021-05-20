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
  const [formData, setFormData] = useState({
    datospersona: {},
    tratamiento: {},
  })

  let tempFormData = formData;
  const totalSteps = 2;

  const changeFormData = (dataId) => {
    const data = (data) => {
      tempFormData = {
        ...tempFormData,
        [dataId]: { ...data }
      }
    }

    console.log(dataId);

    return data;
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

  const orquestador = () => {
    setSaving(true);
    setFormData(tempFormData);
    save(formData)
    setSaving(false);
  }

  const save = (formData) => {

    fetch('http://localhost:8080/presupuestos', {
      method: 'POST',
      body: JSON.stringify(tempFormData),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(res => {
        if (res.mensaje === "OK") {
          Swal.fire({
            icon: 'success',
            text: 'Presupuesto creado con exito, a su correo llegara el presupuesto!'
          });
        }
      }).catch(e => {
        console.log(e);
        Swal.fire({
          icon: 'warning',
          text: 'Ocurrio un inconveniente al agendar crear el presupuesto!'
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