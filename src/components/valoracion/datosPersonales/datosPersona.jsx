import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import { useForm } from 'react-hook-form'
import { idText } from 'typescript';
import * as Yup from 'yup'

import ModalBudget  from './modalBudget';



function DatosPersona(props) {
  const baseUrl = "http://localhost:8080/presupuestos"

  const [createModal, setCreateModal] = useState(true);
  const { register, errors, handleSubmit } = useForm({
    mode: 'onChange',
    validationSchema: Yup.object({
      first_lastname: Yup.string()
        .required('Campo Obligatorio'),
        second_lastname: Yup.string()
        .required('Campo Obligatorio'),
      name: Yup.string()
        .required('Campo Obligatorio'),
      direction: Yup.string()
        .required('Campo Obligatorio'),
        telephone: Yup.number('El telefono debe de ser un numero valido')
        .positive('El teléfono no puede contener valores negativos')
        .max(9999999, 'El numero no puede contener mas de 7 digitos'),
        cellphone: Yup.number('El celular debe de ser un numero valido')
        .positive('El celular no puede contener valores negativos')
        .required('Campo Obligatorio'),
        municipality: Yup.string()
        .required('Campo Obligatorio'),
        email: Yup.string()
        .email('El correo debe de ser uno valido')
        .required('Campo Obligatorio'),
        birthday: Yup.date()
        .required('Campo Obligatorio'),
        id: Yup.string()
        .required('Campo Obligatorio')

    })
  })

  const [formData, setFormData] = useState(props.formData || {
    first_lastname: '',
    second_lastname: '',
    name: '',
    type_id: '',
    id: '',
    direction: '',
    telephone: '',
    cellphone: '',
    municipality: '',
    email: '',
    rh: '',
    blood_group: '',
    type_bonding: '',
    birthday: '',
    age: '',
    civil_status: '',
    ocupation: '',
    reason: '',
    background: '',
    gender: ''
  });

  const [hasErrors, setHasErrors] = useState(false)



  const onChange = (e) => {
    let newState = {
      ...formData,
      [e.target.name]: e.target.value
    }

    if (e.target.name === 'birthday') {
      const age = calculateAge(e.target.value);
      
      newState = {
        ...formData,
        [e.target.name]: e.target.value,
        age
      }
    }

    let formErrors = false;
    if (Object.keys(errors).length !== 0) {
      formErrors = true;
    }
    setHasErrors(formErrors);

    setFormData(newState);
    props.updateValues(newState)
    props.updateHasErrors(formErrors)
  }

  const searchPersonalData = (data) => {
    const newState = {
      ...data,
    }

    setFormData(newState);
  }

  const getCollectionId = (id) => {
    props.updateId(id);
  }


  const calculateAge = date => {
    const birthDate = new Date(date); 
    const difference = Date.now() - birthDate.getTime();
    const age = new Date(difference);
  
    return Math.abs(age.getUTCFullYear() - 1970);
  }

  const onSubmit = (data) => {
    console.log(data)
  };

  const closeModal = () => setCreateModal(!createModal);


  return (
        <form onSubmit={handleSubmit(onSubmit)}>

        <ModalBudget  isOpen={createModal} 
                      close={closeModal} 
                      baseUrl={baseUrl}
                      searchPersonalData={(data) => searchPersonalData(data)}
                      getCollectionId={(id) => getCollectionId(id)}/>

          <div className="card">
            <h5 className="card-header">Datos de Identificación</h5>
            <div className="card-body">
              <div className="form-row">
                <SelectInput name="type_id" value={formData.type_id} onChange={onChange} label="Tipo Identificación" options={[
                  { value: "", text: "--Seleccione--" },
                  { value: "cc", text: "Cédula de ciudadanía" },
                  { value: "ce", text: "Cédula de extranjería" },
                  { value: "ps", text: "Pasaporte" },
                  { value: "ti", text: "Tarjeta de identidad" }
                ]} />

                <div className={`form-group col-md-6`}>
                    <label htmlFor="id">N° Identificación</label>
                    <input  className={`form-control ${errors.id && 'is-invalid'} `}
                            ref={register}
                            type="text"
                            name="id"
                            id="id"
                            value={formData.id}
                            onChange={onChange} 

                    />
                    {errors.id && <span className="invalid-feedback">{errors.id.message}</span>}
                  </div>

              </div>

              <div className="form-row">
                  <div className={`form-group col-md-6`}>
                    <label htmlFor="FlastName">Primer Apellido</label>
                    <input  className={`form-control ${errors.first_lastname && 'is-invalid'} `}
                            ref={register}
                            type="text"
                            name="first_lastname"
                            id="first_lastname"
                            value={formData.first_lastname}
                            onChange={onChange} 

                    />
                    {errors.first_lastname && <span className="invalid-feedback">{errors.first_lastname.message}</span>}
                  </div>

                  <div className={`form-group col-md-6`}>
                    <label htmlFor="SlastName">Segundo Apellido</label>
                    <input  className={`form-control ${errors.second_lastname && 'is-invalid'} `}
                            ref={register}
                            type="text"
                            name="second_lastname"
                            id="second_lastname"
                            value={formData.second_lastname}
                            onChange={onChange} 
                    />
                    {errors.second_lastname && <span className="invalid-feedback">{errors.second_lastname.message}</span>}
                  </div>
              </div>


              <div className="form-row">
                <div className={`form-group col-md-6`}>
                      <label htmlFor="SlastName">Nombre</label>
                      <input  className={`form-control ${errors.name && 'is-invalid'} `}
                              ref={register}
                              type="text"
                              name="name"
                              id="name"
                              value={formData.name}
                              onChange={onChange} 
                      />
                      {errors.name && <span className="invalid-feedback">{errors.name.message}</span>}
                </div>

                <div className={`form-group col-md-6`}>
                    <label htmlFor="SlastName">Dirección</label>
                    <input  className={`form-control ${errors.direction && 'is-invalid'} `}
                            ref={register}
                            type="text"
                            name="direction"
                            id="direction"
                            value={formData.direction}
                            onChange={onChange} 
                    />
                    {errors.direction && <span className="invalid-feedback">{errors.direction.message}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className={`form-group col-md-6`}>
                      <label htmlFor="SlastName">Teléfono</label>
                      <input  className={`form-control ${errors.telephone && 'is-invalid'} `}
                              ref={register}
                              type="number"
                              name="telephone"
                              id="telephone"
                              value={formData.telephone}
                              onChange={onChange} 
                      />
                      {errors.telephone && <span className="invalid-feedback">{errors.telephone.message}</span>}
                  </div>
                  <div className={`form-group col-md-6`}>
                      <label htmlFor="SlastName">Celular</label>
                      <input  className={`form-control ${errors.cellphone && 'is-invalid'} `}
                              ref={register}
                              type="number"
                              name="cellphone"
                              id="cellphone"
                              value={formData.cellphone}
                              onChange={onChange} 
                      />
                      {errors.cellphone && <span className="invalid-feedback">{errors.cellphone.message}</span>}
                  </div>
              </div>

              <div className="form-row">
                <div className={`form-group col-md-6`}>
                      <label htmlFor="SlastName">Municipio</label>
                      <input  className={`form-control ${errors.municipality && 'is-invalid'} `}
                              ref={register}
                              type="text"
                              name="municipality"
                              id="municipality"
                              value={formData.municipality}
                              onChange={onChange} 
                      />
                      {errors.municipality && <span className="invalid-feedback">{errors.municipality.message}</span>}
                  </div>
                  <div className={`form-group col-md-6`}>
                      <label htmlFor="SlastName">Correo Electronico</label>
                      <input  className={`form-control ${errors.email && 'is-invalid'} `}
                              ref={register}
                              type="text"
                              name="email"
                              id="email"
                              value={formData.email}
                              onChange={onChange} 
                      />
                      {errors.email && <span className="invalid-feedback">{errors.email.message}</span>}
                  </div>
              </div>

              <div className="form-row">
              <SelectInput name="blood_group" value={formData.blood_group} onChange={onChange} label="Grupo Sanguineo" options={[
                  { value: "", text: "" },
                  { value: "A", text: "A" },
                  { value: "B", text: "B" },
                  { value: "AB", text: "AB" },
                  { value: "O", text: "O" }
                ]} />
                
              <SelectInput name="rh" value={formData.rh} onChange={onChange} label="RH" options={[
                  { value: "", text: "" },
                  { value: "+", text: "+" },
                  { value: "-", text: "-" },
                ]} />

                <SelectInput name="type_bonding" value={formData.type_bonding} onChange={onChange} label="Tipo Vinculación EPS" options={[
                  { value: "", text: "" },
                  { value: "sub", text: "SUB" },
                  { value: "ccot", text: "C.COT" },
                  { value: "cben", text: "C.BEN" }
                ]} />
              </div>

              <div className="form-row">
                <div className={`form-group col-md-6`}>
                        <label htmlFor="SlastName">Fecha de Nacimiento</label>
                        <Form.Control className={`form-control ${errors.birthday && 'is-invalid'} `} 
                                      ref={register} 
                                      type="date" 
                                      name='birthday' 
                                      id='birthday'
                                      value={formData.birthday}
                                      onChange={onChange}/>
                        {errors.birthday && <span className="invalid-feedback">{errors.birthday.message}</span>}
                </div>
                  <div className={`form-group col-md-6`}>
                      <label htmlFor="SlastName">Edad</label>
                      <input  className={`form-control ${errors.age && 'is-invalid'} `}
                              ref={register}
                              type='text'
                              name='age'
                              id='age'
                              value={formData.age}
                              disabled 
                      />
                      {errors.age && <span className="invalid-feedback">{errors.age.message}</span>}
                  </div>
              </div>

              <div className="form-row">
                <SelectInput name="gender" value={formData.gender} onChange={onChange} label="Genero " options={[
                  { value: "", text: "" },
                  { value: "man", text: "Hombre" },
                  { value: "woman", text: "Mujer" },
                  { value: "notBinary", text: "No Binario" },
                  { value: "undefined", text: "No definidio" }
                ]} />
                <SelectInput name="civil_status" value={formData.civil_status} onChange={onChange} label="Estado Civil" options={[
                  { value: "", text: "" },
                  { value: "soltero", text: "Soltero" },
                  { value: "casado", text: "Casado" },
                  { value: "unionLibre", text: "Union libre" },
                  { value: "divorciado", text: "Divorciado" },
                  { value: "viudo", text: "Viudo" }
                ]} />
              </div>

              <div className='form-group mt-4'>
                <label htmlFor="reason">Motivo de consulta</label>
                <textarea name="reason" id="reason" className="form-control"
                  value={formData.reason} onChange={onChange} />
              </div>

              <div className='form-group mt-4'>
                <label htmlFor="background">Antecedentes</label>
                <textarea name="background" id="background" className="form-control"
                  value={formData.background} onChange={onChange} />
              </div>
            </div>
          </div>
        </form >
  )
}

function SelectInput(props) {
  return (
    <div className={`form-group ${!props.fullWidth ? 'col-md-6' : ''}`}>
      <label htmlFor={props.name}>{props.label}</label>
      <select name={props.name} id={props.name} className="form-control"
        value={props.value} onChange={props.onChange}>
        {props.options.map(option => (
          <option key={option.value} value={option.value}>{option.text}</option>
        ))}
      </select>
    </div>
  )
}

function Input(props) {
  return (
    <div className={`form-group ${!props.fullWidth ? 'col-md-6' : ''}`}>
      <label htmlFor={props.name}>{props.label}</label>
      <input className="form-control"
            type="text"
            name={props.name}
            id={props.name}
            value={props.value}
            onChange={props.onChange}
      />
    </div>
  )
}

export default DatosPersona;
