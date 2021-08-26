import React, { useState, useEffect } from 'react'
import { Button, Table, Row, Container, Form } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'

import ModalUpload from './modalUploadConsent';



const ConsentList = () => {
    const [uploadModal, setUploadModal] = useState(false);
    const [fileChange, setFileChange] = useState(false);
    const [data, setData] = useState([]);
    const [selectData, setSelectData] = useState([]);

    
    const selectFile = () => {
        setFileChange(true);
    };

    const uploadModalAction = (consentInfo) => {
        setFileChange(false);
        setSelectData(consentInfo)
        setUploadModal(!uploadModal);
    };

    const closeModal = () => {
        setFileChange(false);
        setUploadModal(!uploadModal);
    };
    
    const updateData = (consentinfo) => {
        updateGeneralData(data, consentinfo.id)
    }

    const updateGeneralData= ( data, id ) => {
        let objIndex = data.findIndex((obj => obj.id == id));
        data[objIndex].ready = true;
        setData(data);
     }

    useEffect(() => {
        fetch(`http://localhost:8080/consentimiento/ConsentInfo`, { method: 'GET' })
            .then(res => res.json())
            .then(res => {
                setData(res.data);
                console.log(res.data);
            })
            .catch(e => console.log(e));
    }, [])


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
                                {data.filter(data => !data.ready).map(data => (

                                    <tr key={data.id} className='text-center'>
                                        <td className="text-left">{data.date}</td>
                                        <td>{data.consent.split('_').join(' ')}</td>
                                        <td>{data.dentist}</td>
                                        <td>
                                            <Button variant="warning" className="btn btn-warning" onClick={() => uploadModalAction(data)}><FontAwesomeIcon icon={faUpload} /></Button>{' '}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Row>
                    <Row>
                        <ModalUpload isOpen={uploadModal} close={closeModal} selectFile={selectFile} file={fileChange} data={selectData} updateData={updateData}/>
                    </Row>
                </Form>
            </Container>
        </div>
    )
}

export default ConsentList;

