import React, { useState } from 'react';
import { Form, FormGroup } from "react-bootstrap";


const TreatmentSelection = ({ minPrice, normalPrice, description, handleTreatmentForm, handleRemoveItem }) => {
    const [formData, setFormData] = useState({
        descripcion: {description}.description,
        cantidad: '',
        valor_unitario: '',
        valor_total: ''
    })
    const [activeCantidad, setActiveCantidad] = useState(false);

    const clearRadioBtns = (name) =>{
        console.log(name);

        const radioBtns = document.querySelectorAll("input[type='radio'][name='"+name+"']");

        radioBtns.forEach(radioBtn => {
            if (radioBtn.checked === true) {
                radioBtn.checked = false;
                setActiveCantidad(false)
                console.log(formData);

                handleRemoveItem(name);
            }
        });

    }


     

    const onChange = (event) => {
        let newState = {
            ...formData,
            [event.target.id]: event.target.value,
        }


        if (!(newState.cantidad === '') && !(newState.valor_unitario === '')) {
            const valor_total = newState.cantidad * newState.valor_unitario; 
            newState = {
                ...formData,
                [event.target.id]: event.target.value,
                valor_total
            }
        }
        console.log(newState);


        setActiveCantidad(false)
        if (newState.valor_unitario !== '') {
            setActiveCantidad(true)
        }


        setFormData(newState);
        handleTreatmentForm(newState);
    }

    return (
            <tr>
                <td>
                    <FormGroup>
                        <Form.Label >{description}</Form.Label>               
                    </FormGroup>
                </td>
                <td>
                    <FormGroup>
                    {minPrice == 0 ?
                        <p>N/A</p>
                        :
                        <Form.Check name={description} value={minPrice} label={minPrice} inline type="radio" id="valor_unitario" 
                                    onChange={(event) => onChange(event)} />
                    }
                    </FormGroup>
                </td>
                <td>
                    <FormGroup>
                        <Form.Check name={description} value={normalPrice} label={normalPrice} inline type="radio" id="valor_unitario"
                                    onChange={(event) => onChange(event)}/>
                    </FormGroup>
                </td>
                <td>
                    <FormGroup>
                        {!activeCantidad && <input className="form-control" disabled="true" type="number" id="cantidad" name="cantidad" onChange={(event) => onChange(event)} />   }
                        {activeCantidad && <input className="form-control" value={formData.cantidad}  type="number" defaultValue="0" id="cantidad" name="cantidad" onChange={(event) => onChange(event)} />   }

                        {activeCantidad && <button type="button" className="btn btn-warning" onClick={() => clearRadioBtns(description)}>Clear</button>}
                    </FormGroup>
                </td>     
            </tr>

    )
}

export default TreatmentSelection;

