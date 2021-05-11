import React, { useState } from 'react';
import { useForm } from "react-hook-form";

function DatosPersona(props) {
  const { register, errors, handleSubmit, setError, clearError } = useForm();
  const [formData, setFormData] = useState(props.formData || {
    FlastName: '',
    SlastName: '',
    name: '',
    tipId: '',
    nIdent: '',
    direction: '',
    tell: '',
    cell: '',
    muni: '',
    email: '',
    rh: '',
    tvinculacion: '',
    grammar: '',
    age: '',
    gender: '',
    estC: '',
    Ocupacion: '',
    nResponsible: '',
    relationship: '',
    tellp: '',
    nAccompanying: '',
    tAccompanying: '',
    motConsulta: '',
    antecedentes: ''
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
        <h5 className="card-header">Datos de Identificación</h5>
        <div className="card-body">
          <div className="form-row">
            <SelectInput name="tipId" value={formData.tipId} onChange={onChange} label="Tipo Identificación" options={[
              { value: "", text: "--Seleccione--" },
              { value: "cc", text: "Cédula de ciudadanía" },
              { value: "ce", text: "Cédula de extranjería" },
              { value: "ps", text: "Pasaporte" },
              { value: "ti", text: "Tarjeta de identidad" }
            ]} />
            <Input name="nIdent" value={formData.nIdent} onChange={onChange} label="N° Identificación" />
          </div>
          <div className="form-row">
            <Input name="FlastName" value={formData.FlastName} onChange={onChange} label="Primer Apellido" />
            {errors.FlastName && <p>*Campo Obligatorio</p>}
            <Input name="SlastName" value={formData.SlastName} onChange={onChange} label="Segundo Apellido" />
          </div>
          <div className="form-row">
            <Input name="name" value={formData.name} onChange={onChange} label="Nombre" />
            <Input name="direction" value={formData.direction} onChange={onChange} label="Dirección" />
          </div>
          <div className="form-row">
            <Input name="tell" value={formData.tell} onChange={onChange} label="Telefono" />
            <Input name="cell" value={formData.cell} onChange={onChange} label="Celular" />
          </div>
          <div className="form-row">
            <Input name="muni" value={formData.muni} onChange={onChange} label="Municipio" />
            <Input name="email" value={formData.email} onChange={onChange} label="Correo Electronico" />
          </div>
          <div className="form-row">
            <Input name="rh" value={formData.rh} onChange={onChange} label="RH" />
            <SelectInput name="tvinculacion" value={formData.tvinculacion} onChange={onChange} label="Tipo Vinculación EPS" options={[
              { value: "wh", text: "" },
              { value: "sub", text: "SUB" },
              { value: "ccot", text: "C.COT" },
              { value: "cben", text: "C.BEN" }
            ]} />
          </div>
          <div className="form-row">
            <Input name="grammar" value={formData.grammar} onChange={onChange} label="Fecha Nacimiento" />
            <Input name="age" value={formData.age} onChange={onChange} label="Edad" />
          </div>
          <div className="form-row">
            <SelectInput name="sex" value={formData.gender} onChange={onChange} label="Genero " options={[
              { value: "wh", text: "" },
              { value: "man", text: "Hombre" },
              { value: "woman", text: "Mujer" }
            ]} />
            <SelectInput name="estC" value={formData.estC} onChange={onChange} label="Estado Civil" options={[
              { value: "soltero", text: "Soltero" },
              { value: "casado", text: "Casado" },
              { value: "unionLibre", text: "Union libre" },
              { value: "divorciado", text: "Divorciado" },
              { value: "viudo", text: "Viudo" }
            ]} />
          </div>
          <div className='form-group mt-4'>
            <label htmlFor="motConsulta">Motivo de consulta</label>
            <textarea name="motConsulta" id="motConsulta" className="form-control"
              value={formData.motConsulta} onChange={onChange} />
          </div>
          <div className='form-group mt-4'>
            <label htmlFor="antecedentes">Antecedentes</label>
            <textarea name="antecedentes" id="antecedentes" className="form-control"
              value={formData.antMedOdoFa} onChange={onChange} />
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
      <input
        type="text"
        name={props.name}
        id={props.name}
        className="form-control"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  )
}

export default DatosPersona;
