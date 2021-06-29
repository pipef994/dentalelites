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

  const [formHasErrors, setFormHasErrors] = useState({
    datospersona: false,
    tratamiento: false,
  })

  const [colectionId, setColectionId] = useState({
    datospersona: '',
    tratamiento: '',
  })


  let tempFormData = formData;
  let tempFormHasErrors = formHasErrors;
  let tempColectionId = colectionId;


  const totalSteps = 2;


  const changeFormData = (dataId) => {
    const data = (data) => {
      tempFormData = {
        ...tempFormData,
        [dataId]: { ...data }
      }
    }

    return data;
  }

  const changeHasErrors = (dataId) => {
    const data = (errors) => {
      tempFormHasErrors = {
        ...tempFormHasErrors,
        [dataId]: errors,
      }
      console.log(errors)
    }
    console.log(tempFormHasErrors)

    return data;
  }

  const changeId = (dataId) => {
    const data = (id) => {
      tempColectionId = {
        ...tempColectionId,
        [dataId]: id,
      }
    }


    console.log(tempColectionId);
    return data;
  }


  const hasAllProperties = (obj) =>  {
    var props = [  'first_lastname',
                    'second_lastname',
                    'name',
                    'direction',
                    'telephone',
                    'cellphone',
                    'municipality',
                    'email',
                    'birthday',
                    'id']

    for (let i = 0; i < props.length; i++) {
        if (!obj.hasOwnProperty(props[i]))
            return false;
    }
    return true;
  }

  const Step = ({ Component, dataId }) => {
    return (
      <div className="row my-3">
        <div className="col-12">
          <Component formData={formData[dataId]}  updateValues={changeFormData(dataId)} updateHasErrors={changeHasErrors(dataId)} updateId={changeId(dataId)}/>
        </div>
      </div>
    )
  }

  const nextStep = () => {
    console.log(tempFormData.datospersona);

    if (!hasAllProperties(tempFormData.datospersona)) {
      Swal.fire({
        icon: 'warning',
        text: 'Se deben completar los campos requeridos antes de continuar!'
      })
      return
    }

    if (Object.keys(tempFormData.datospersona).length === 0) {
      Swal.fire({
        icon: 'warning',
        text: 'Se debe llenar el formulario!'
      })
      return
    }

    if (tempFormHasErrors.datospersona) {
      Swal.fire({
        icon: 'warning',
        text: 'Se deben corregir y/o completar los campos requeridos antes de continuar!'
      })
      return
    }

    setCurrentStep(currentStep + 1);
    setFormData(tempFormData);
    setFormHasErrors(tempFormHasErrors);
    setColectionId(tempColectionId);
  }

  const previousStep = () => {
    setCurrentStep(currentStep - 1)
  }

  const orquestador = () => {
    if (Object.keys(tempFormData.tratamiento).length === 0) {
      Swal.fire({
        icon: 'warning',
        text: 'Se debe seleccionar al menos un tratamiento!'
      })
      return
    }

    if (tempFormHasErrors.tratamiento) {
      Swal.fire({
        icon: 'warning',
        text: 'Se deben corregir y/o completar los campos requeridos antes de continuar!'
      })
      return
    }

    setSaving(true);
    setFormData(tempFormData);

    if (tempColectionId.datospersona) {
      deleteBudget(formData);
    }
    
    save(formData);
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
          }).then(() => {
          });
          sendEmail(formData);
        }
      }).catch(e => {
        console.log(e);
        Swal.fire({
          icon: 'warning',
          text: 'Ocurrio un inconveniente al crear crear el presupuesto!'
        })
      })
      .finally(() => {
        setSaving(false)
      })
  }

  const deleteBudget = () => {
    fetch(`http://localhost:8080/presupuestos/${tempColectionId.datospersona}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
      if (res.mensaje === "OK") {   
        res.json()
      }
    }).catch(e => {
        console.log(e);
        Swal.fire({
          icon: 'warning',
          text: 'Ocurrio un inconveniente al crear crear el presupuesto!'
        })
    })
};

  const sendEmail = (formData) => {
    var email = window.localStorage.getItem("email"); //Se toma el correo de memoria

    fetch(`http://localhost:8080/presupuestos/send/${email}`, {
      method: 'POST',
      body: JSON.stringify(tempFormData),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()).
      then(res => {
        if (res.mensaje === 'OK') {
          console.log('Correo enviado');
        }
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