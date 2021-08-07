import React from 'react';
import "../valoracion/tratamientos/listaStyle.scss";
import {  
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
  Row,
  Col } from "reactstrap";

const ModalUploadConsent = ({isOpen, close}) => {
    console.log(isOpen)
    return (
        <Modal isOpen={isOpen}>
        <ModalHeader>
            <div><h3>Subir Consentimiento</h3></div>
        </ModalHeader>

        <ModalBody>
            <Row>
            </Row>
        </ModalBody>

        <ModalFooter>
            <Button color="primary">Insertar</Button>
            <Button className="btn btn-danger" onClick={() => close(!isOpen)}>Cancelar</Button>
        </ModalFooter>
    </Modal>
    )
}

export default ModalUploadConsent;
