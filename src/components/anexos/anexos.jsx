import React, { useState, Fragment, useRef } from "react";
import "./anexos.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
  Input,
  FormText,
} from "reactstrap";
import CanvasDraw from "react-canvas-draw";
import Swal from "sweetalert2";


const Anexos = (props) => {
  const firstCanvas = useRef(null);
  const secondCanvas = useRef(null);
  const [evoData, setEvoData] = useState([]);


  return (
    <Fragment>
    <div className="container">

        <div className="row">
            <div className="col-12">
                <h1 className="my-3">Asignación de consentimiento</h1>
            </div>
        </div>
        <form>
            <div className="card">
                <h5 className="card-header">Asignación de consentimiento</h5>
                <div className="card-body">
                    <div className="form-row">
                        {/* <SearchBar placeholder="Ingresa el nombre del usuario" 
                                  data={users} 
                                  handleUserAsigned={(data) => handleUserAsigned(data)} 
                                  required/> */}


                    
                        <button type="submit" className="btn" id="submit" >
                            Asignar
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</Fragment>
  );
};
export default Anexos;
