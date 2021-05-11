import React from 'react';
import "./listaStyle.scss";
import {  
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
  Row,
  Col } from "reactstrap";

import SelectInput  from './selectInput';

export const modalCreate = ({generalTreatmentsSelect, isOpen, close, onTreatment, onChange, baseUrl, state}) => {

    console.log(generalTreatmentsSelect);

    const create = () => {
      var treatment = {
        ...state.form,
      };
  
      fetch(`${baseUrl}/precios`, {
        method: 'POST',
        body: JSON.stringify(treatment),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
        .then(close(!isOpen))
        .catch(e => {
          console.log(e)
        })
    }

    const createSelectItems = (data) => {
        let items = [];
        for (let i = 0; i < data.length; i++) {
          let nombre = data[i].nombre;
          items.push({ value: data[i].id, text: nombre });
        }
        return items;
      }

    return (
        <div>
            <Modal isOpen={isOpen}>
                <ModalHeader>
                    <div><h3>Crear Tratamiento</h3></div>
                </ModalHeader>

                <ModalBody>
                    <Row>
                        <Col>
                            <FormGroup>
                            <SelectInput name="tratamiento" value={generalTreatmentsSelect.idTratamiento} onChange={(event) => onTreatment(event)} 
                                        label="Tratamientos" 
                                        options={
                                            [{ value: "", text: "--Seleccione--" },
                                            ...createSelectItems(generalTreatmentsSelect)
                                            ]
                                            } />
                            </FormGroup>
                        </Col>
                    </Row>

                    <FormGroup>
                        <label>
                            Nombre
                        </label>
                        <input className="form-control" type="text" defaultValue="" id="descripcion" name="descripcion"  onChange={(event) => onChange(event)}/>
                    </FormGroup>

                    <Row>
                        <Col>
                            <FormGroup>
                                <label>
                                    Precio Normal
                                </label>
                                <input className="form-control" type="number" defaultValue="0" id="precio_normal" name="precio_normal" onChange={(event) => onChange(event)}/>
                            </FormGroup></Col>

                        <Col>
                            <FormGroup>
                                <label>
                                    Precio Minimo
                                </label>
                                <input className="form-control" type="number" defaultValue="0" id="precio_minimo" name="precio_minimo" onChange={(event) => onChange(event)}/>
                            </FormGroup>
                        </Col>
                    </Row>
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={() => create()}>Insertar</Button>
                    <Button className="btn btn-danger" onClick={() => close(!isOpen)}>Cancelar</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default modalCreate;
