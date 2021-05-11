import React from 'react';
import "./listaStyle.scss";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Row} from "reactstrap";


export const modalDelete = ({ isOpen, close, baseUrl, state }) => {

    console.log(state);


    const eliminar = () => {
        close(!isOpen);
        fetch(`${baseUrl}/precios/${state.form.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            res.json()
        }).catch(e => {
            console.log(e)
        })
    };



    return (
        <Modal isOpen={isOpen}>
            <ModalHeader>
                <div><h3>Eliminar Tratamiento</h3></div>
            </ModalHeader>

            <ModalBody>
                <Row>
                    ¿Estás seguro que deseas eliminar el tratamiento <b>{state.form.descripcion}</b>?
                </Row>
            </ModalBody>

            <ModalFooter>
                <Button color="primary" onClick={() => eliminar()}>Sí</Button>
                <Button className="btn btn-danger" onClick={() => close(!isOpen)}>No</Button>
            </ModalFooter>
        </Modal>
    )
}

export default modalDelete;