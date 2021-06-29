import React, { useState } from 'react';
import Swal from 'sweetalert2';

import "../tratamientos/listaStyle.scss";

import {  
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter } from "reactstrap";


export const ModalBudget = ({ isOpen, close, baseUrl, searchPersonalData, getCollectionId}) => {
    
    const [id, setId] = useState(''); 

    const create = () => {
  
      fetch(`${baseUrl}/${id}`, {
        method: 'GET',
        body: JSON.stringify(),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
        .then((data) => {
            if (data.mensaje === 'OK') {
                searchPersonalData(data.data[0].datospersona);
                getCollectionId(data.data[0].id);

                Swal.fire({
                    icon: 'success',
                    text: 'Datos cargados correctamente'
                })
                } else {

                }
        })
        .then(close(!isOpen))
        .catch(e => {
          console.log(e)
          Swal.fire({
            icon: 'error',
            text: 'No se encontraron datos para el documento ingresado'
          });
        })
    }

    const set = (event) => {
        setId(event.target.value)
    };


    return (
        <div>
            <Modal isOpen={isOpen}>
                <ModalHeader>
                    <div><h3>Buscar Datos</h3></div>
                </ModalHeader>

                <ModalBody>

                    <FormGroup>
                        <label>
                            Identificación
                        </label>
                        <input className="form-control" type="text" defaultValue="" id="descripcion" name="descripcion" onChange={(event) => set(event)} />
                    </FormGroup>

                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={() => create()}>Buscar</Button>
                    <Button className="btn btn-danger" onClick={() => close(!isOpen)}>Cancelar</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default ModalBudget;
