import React, { useState } from 'react';
import { Form, Col, FormGroup } from "react-bootstrap";


const TreatmentSelection = ({ minPrice, normalPrice, description, handleTreatmentForm }) => {
    const [formData, setFormData] = useState({
        descripcion: {description}.description,
        cantidad: '',
        valor_unitario: '',
        valor_total: ''
    })

     

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

        setFormData(newState);
        handleTreatmentForm(formData);
    }

    return (
        <FormGroup>
            <Form.Row>
                <Col>
                    <FormGroup>
                        <Form.Label >{description}</Form.Label>               
                    </FormGroup>
                </Col>

                <Col>
                    <FormGroup>
                    {minPrice == 0 ?
                        <Form.Check disabled name={description} value={minPrice} label={minPrice} inline type="radio" id="valor_unitario" 
                        onChange={(event) => onChange(event)} />
                        :
                        <Form.Check name={description} value={minPrice} label={minPrice} inline type="radio" id="valor_unitario" 
                                    onChange={(event) => onChange(event)} />
                    }
                    </FormGroup>
                </Col>

                <Col>
                    <FormGroup>
                        <Form.Check name={description} value={normalPrice} label={normalPrice} inline type="radio" id="valor_unitario"
                                    onChange={(event) => onChange(event)}/>
                    </FormGroup>
                </Col>

                <Col>
                    <FormGroup>
                        <input className="form-control" type="number" defaultValue="0" id="cantidad" name="cantidad" onChange={(event) => onChange(event)} />
                    </FormGroup>
                </Col>
            </Form.Row>
        </FormGroup>
    )
}

export default TreatmentSelection;

