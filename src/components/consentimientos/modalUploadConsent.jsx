import React, { useState } from 'react'
import Swal from 'sweetalert2';
import "../valoracion/tratamientos/listaStyle.scss";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Label,
    Input,
    FormText,
    FormGroup,
    ModalFooter,
} from "reactstrap";

const ModalUploadConsent = ({ isOpen, close, selectFile, file, data, updateData }) => {
    const baseUrl = "http://localhost:8080/consentimiento"

    const uploadFile = () => {
        Swal.fire({
            icon: 'success',
            text: 'Archivo subido con exito'
          }).then(() => {
          });


          editar();
        var consentinfo = {
            ...data,
            ready: true
          };
        updateData(consentinfo);

        close(!isOpen);
    };

    const editar = () => {
        var consentinfo = {
          consent: data.consent,
          date: data.date,
          dentist: data.dentist,
          userId: data.userId,
          ready: true
        };


        close(!isOpen);
        fetch(`${baseUrl}/ConsentInfo/${data.id}`, {
          method: 'PUT',
          body: JSON.stringify(consentinfo),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(res => { res.json() 
        }).catch(e => {
            console.log(e)
          })
      };




    return (
        <Modal isOpen={isOpen}>
            <ModalHeader>
                <div><h3>Subir Consentimiento</h3></div>
            </ModalHeader>

            <ModalBody>
                <FormGroup>
                    <Label for="file">Consentimiento</Label>
                    <Input type="file" name="file" id="file" accept=".pdf" onChange={() => selectFile()}/>
                    <FormText color="muted">
                        Seleccionar el archivo del consentimiento informado firmado.
                    </FormText>
                </FormGroup>
            </ModalBody>

            <ModalFooter>
                {!file && <Button color="primary" onClick={uploadFile} disabled="true">Subir</Button>   }
                {file && <Button color="primary" onClick={uploadFile}>Subir</Button>   }
                
                <Button className="btn btn-danger" onClick={() => close(!isOpen)}>Cancelar</Button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalUploadConsent;
