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

export const modalEdit = ({generalTreatmentsSelect, isOpen, close, onTreatment, onChange, baseUrl, state}) => {

    console.log(state);


    const editar = () => {
        var treatment = {
          ...state.form,
        };
        
        close(!isOpen);
        fetch(`${baseUrl}/precios/${state.form.id}`, {
          method: 'PUT',
          body: JSON.stringify(treatment),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(res => { res.json() 
        }).catch(e => {
            console.log(e)
          })
      };

    const createSelectItems = (data) => {
        let items = [];
        for (let i = 0; i < data.length; i++) {
          let nombre = data[i].nombre;
          items.push({ value: data[i].id, text: nombre });
        }
        return items;
      }

    return (
        <Modal isOpen={isOpen}>
            <ModalHeader>
                <div><h3>Editar Tratamiento</h3></div>
            </ModalHeader>

            <ModalBody>
                <Row>
                    <Col>
                        <FormGroup>
                            <SelectInput name="tratamiento" value={state.form.idTratamiento} onChange={(event) => onTreatment(event)}
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
                    <input class="form-control" type="text" value={state.form.descripcion} id="descripcion" name="descripcion" onChange={(event) => onChange(event)} />
                </FormGroup>

                <Row>
                    <Col>
                        <FormGroup>
                            <label>
                                Precio Normal
              </label>
                            <input class="form-control" type="number" value={state.form.precio_normal} id="precio_normal" name="precio_normal" onChange={(event) => onChange(event)} />
                        </FormGroup></Col>

                    <Col>
                        <FormGroup>
                            <label>
                                Precio Minimo
              </label>
                            <input class="form-control" type="number" value={state.form.precio_minimo} id="precio_minimo" name="precio_minimo" onChange={(event) => onChange(event)} />
                        </FormGroup>
                    </Col>
                </Row>
            </ModalBody>

            <ModalFooter>
                <Button color="primary" onClick={() => editar(state.form)}>Insertar</Button>
                <Button className="btn btn-danger" onClick={() => close(!isOpen)}>Cancelar</Button>
            </ModalFooter>
        </Modal>
    )
}

export default modalEdit;