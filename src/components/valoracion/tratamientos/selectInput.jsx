import React from 'react'

export const selectInput = (props) => {
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

export default selectInput;
