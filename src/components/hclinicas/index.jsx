import React, { useState } from 'react';
import clsx from 'clsx';
import stepsPrimeraPagina from './primerPagina'
import stepsSegundaPagina from './segundaPagina'
import stepsTercerPagina from './tercerPagina'

const steps = [
  ...stepsPrimeraPagina,
  ...stepsSegundaPagina,
  ...stepsTercerPagina,
]

const alerts = {
  "success": {
    type: "success",
    text: "Historia Clínica almacenada con éxito"
  },
  "error": {
    type: "danger",
    text: "Ocurrió un error al almacenar la Historia Clínica"
  }
}

function HistoriaClinica(props) {
  const [currentStep, setCurrentStep] = useState(0)
  const [showAlert, setShowAlert] = useState(false)
  const [saving, setSaving] = useState(false)
  const [saveStatus, setSaveStatus] = useState("")
  const [formData, setFormData] = useState({
    datosIdentificacion: {},
    anemesis: {},
    antecedentes: {},
    antOdont: {},
    examFisGen: {},
    examExtIntra: {},
    examDental: {},
    examPeriodontal: {},
    examPulpar: {},
    examRadio: {},
    ayudasDiagnosticas: {},
    diagnostico: {},
    planTratamiento: {},
  })

  let tempFormData = formData;
  const totalSteps = steps.length;

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

  const cleanAlert = () => {
    setShowAlert(false)
    setSaveStatus("")
  }

  const triggerAlert = ({ type, text }) => {
    return (
      <div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
        {text}
        <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={cleanAlert}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )
  }

  const nextStep = () => {
    setCurrentStep(currentStep + 1)
    setFormData(tempFormData)
  }
  const previousStep = () => {
    setCurrentStep(currentStep - 1)
  }

  const saveHC = () => {
    setSaving(true)
    fetch('http://localhost:8080/historia/clinica', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(res => {
        if (res.mensaje === "OK") {
          setShowAlert(true)
          setSaveStatus("success")
        } else {
          setShowAlert(true)
          setSaveStatus("error")
        }
      })
      .catch(e => {
        console.log(e)
        setShowAlert(true)
        setSaveStatus("error")
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
            <button type="button" className="btn btn-success mx-2" onClick={saveHC} disabled={saving}>Guardar</button>
          }
        </div>
      </div>
    )
  }

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
          {showAlert && triggerAlert({ ...alerts[saveStatus] })}
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h1 className="my-3">Historia Clínica</h1>
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

export default HistoriaClinica;