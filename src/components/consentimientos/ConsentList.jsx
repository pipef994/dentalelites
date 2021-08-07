import React, {useState} from 'react'
import { Button, Table, Row, Container, Form } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

import ModalUpload  from './modalUploadConsent';



const ConsentList = () => {
    const [uploadModal, setUploadModal] = useState(false);

    const uploadModalAction = () => {
        setUploadModal(!uploadModal);
      };
    
      const closeModal = () => setUploadModal(!uploadModal);


    return (
        <div className="list">
            <Container>
                <h3><strong>Consentimientos</strong></h3>
                <Form>
                    <Row>
                        <Table striped bordered hover>

                            <thead>

                                <tr>
                                    <th>Fecha</th>
                                    <th>Consentimiento</th>
                                    <th>Odontologo</th>
                                    <th>Subir Archivo</th>
                                </tr>

                            </thead>

                            <tbody>

                                <tr key='key' className='text-center'>
                                    <td className="text-left">fecha</td>
                                    <td>consentimiento</td>
                                    <td>Odontologo</td>
                                    <td>
                                        <Button variant="warning" className="btn btn-warning" onClick={() => uploadModalAction()}><FontAwesomeIcon icon={faEdit}  /></Button>{' '}
                                    </td>
                                </tr>

                                {/* {data.map(data => (
            <tr key={data.id} className='text-center'>
              <td className="text-left">{data.descripcion}</td>
              <td>{data.precio_minimo === 0 ? '-' : data.precio_minimo}</td>
              <td>${data.precio_normal}</td>
              <td>
                <Button variant="warning" className="btn btn-warning" onClick={() => editModalAction(data)}><FontAwesomeIcon icon={faEdit} /></Button>{' '}
                <Button variant="danger" className="btn btn-danger" onClick={() => deleteModalAction(data)}><FontAwesomeIcon icon={faTrashAlt} /></Button>{' '}
              </td>
            </tr>
          ))} */}

                            </tbody>
                        </Table>
                    </Row>
                    <Row>
                    <ModalUpload isOpen={uploadModal} close={closeModal} />
                    </Row>
                </Form>
            </Container>
        </div>
    )
}

export default ConsentList;

