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

function HistoriaClinica(props) {
  const [currentStep, setCurrentStep] = useState(0)
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

  let tempFormData = formData

  const totalSteps = steps.length

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
    setCurrentStep(currentStep + 1)
    setFormData(tempFormData)
  }
  const previousStep = () => {
    setCurrentStep(currentStep - 1)
  }

  const renderButtons = () => {
    return (
      <div className="row my-3">
        <div className="col-12">
          <button type="button" disabled={currentStep === 0} className="btn btn-secondary" onClick={previousStep}>Atrás</button>
          {currentStep < totalSteps - 1 ?
            <button type="button" className="btn btn-primary mx-2" onClick={nextStep}>Siguiente</button>
            :
            <button type="button" className="btn btn-success mx-2">Guardar</button>
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