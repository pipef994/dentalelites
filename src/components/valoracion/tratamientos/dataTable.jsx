import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Button, Table } from "reactstrap";

import ModalEdit from './modalEdit';
import ModalDelete from './modalDelete';



const DataTable = ({ data, loading, generalTreatmentsSelect, onTreatment, baseUrl }) => {


  const [state, setState] = useState({
    form: {
      idTratamiento: "",
      descripcion: "",
      precio_normal: 0,
      precio_minimo: 0
    },
  });

  /*Edit Modal*/
  const [editModal, setEditModal] = useState(false);


  const editModalAction = (data) => {
    setEditModal(!editModal);
    setState({ form: data })
  };

  const closeEditModal = () => setEditModal(!editModal)
  /*Edit Modal*/


  /*Delete Modal*/
  const [deleteModal, setDeleteModal] = useState(false);

  const deleteModalAction = (data) => {
    setDeleteModal(!deleteModal);
    setState({ form: data })
  };

  const closeDeleteModal = () => setDeleteModal(!deleteModal)

  /*Delete Modal*/



  const handleChange = (event) => {
    setState({
      ...state,
      form: {
        ...state.form,
        [event.target.name]: event.target.value,
      },
    });
  };




  if (loading) {
    return <h2>Cargando...</h2>
  }



  return (
    <Table striped bordered hover>

      <thead>

        <tr>
          <th>Nombre</th>
          <th>Precio Minimo</th>
          <th>Precio Normal</th>
          <th>Gestión</th>
        </tr>
        
      </thead>

      <tbody>

        {data.map(data => (
          <tr key={data.id} className='text-center'>
            <td className="text-left">{data.descripcion}</td>
            <td>{data.precio_minimo === 0 ? '-' : data.precio_minimo}</td>
            <td>${data.precio_normal}</td>
            <td>
              <Button variant="warning" className="btn btn-warning" onClick={() => editModalAction(data)}><FontAwesomeIcon icon={faEdit} /></Button>{' '}
              <Button variant="danger" className="btn btn-danger" onClick={() => deleteModalAction(data)}><FontAwesomeIcon icon={faTrashAlt} /></Button>{' '}
            </td>
          </tr>
        ))}
        
      </tbody>

      <ModalEdit generalTreatmentsSelect={generalTreatmentsSelect}
        isOpen={editModal}
        close={closeEditModal}
        onChange={(event) => handleChange(event)}
        onTreatment={(event) => onTreatment(event)}
        baseUrl={baseUrl}
        state={state} />

      <ModalDelete
        isOpen={deleteModal}
        close={closeDeleteModal}
        onChange={(event) => handleChange(event)}
        baseUrl={baseUrl}
        state={state} />

    </Table>
  )
}

export default DataTable;
