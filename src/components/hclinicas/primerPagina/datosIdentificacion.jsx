import React, { useState } from 'react';

function DatosIdentificacion(props) {
  const [formData, setFormData] = useState(props.formData || {
    FlastName: '',
    SlastName: '',
    name: '',
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
    sex: '',
    estC: '',
    Ocupacion: '',
    nResponsible: '',
    relationship: '',
    tellp: '',
    nAccompanying: '',
    tAccompanying: ''
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
            <Input name="FlastName" value={formData.FlastName} onChange={onChange} label="Primer Apellido" />
            <Input name="SlastName" value={formData.SlastName} onChange={onChange} label="Segundo Apellido" />
          </div>
          <div className="form-row">
            <Input name="name" value={formData.name} onChange={onChange} label="Nombre" />
            <Input name="nIdent" value={formData.nIdent} onChange={onChange} label="N° Identificación" />
          </div>
          <div className="form-row">
            <Input fullWidth name="direction" value={formData.direction} onChange={onChange} label="Direccón" />
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
            <SelectInput name="sex" value={formData.sex} onChange={onChange} label="Sexo" options={[
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
          <div className="form-row">
            <Input name="Ocupacion" value={formData.Ocupacion} onChange={onChange} label="Ocupación" />
            <Input name="nResponsible" value={formData.nResponsible} onChange={onChange} label="Nombre de Responsable" />
          </div>
          <div className="form-row">
            <Input name="relationship" value={formData.relationship} onChange={onChange} label="Parentesco" />
            <Input name="tellp" value={formData.tellp} onChange={onChange} label="Telefono de Responsable" />
          </div>
          <div className="form-row">
            <Input name="nAccompanying" value={formData.nAccompanying} onChange={onChange} label="Nombre del Acompañante" />
            <Input name="tAccompanying" value={formData.tAccompanying} onChange={onChange} label="Telefono del Acompañante" />
          </div>
          <div className='form-group mt-4'>
            <label htmlFor="antMedOdoFa">Antecedentes Medicos y Odontologicos Familiares</label>
            <textarea name="antMedOdoFa" id="antMedOdoFa" className="form-control"
              value={formData.antMedOdoFa} onChange={onChange}> </textarea>
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

export default DatosIdentificacion
