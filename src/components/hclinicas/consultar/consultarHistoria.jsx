import React, { useState } from "react";
import Swal from "sweetalert2";
import Historia from "../index";

const ConsultarHistoria = () => {

  const [idData, setidData] = useState({
    tipId: "",
    idPaciente: ""
  });

  const [dataHistoria, setdataHistoria] = useState(null);

  const handleIdChange = (e) => {
    setidData({
      ...idData,
      [e.target.name]: e.target.value
    });
  };

  const handleUserSearch = async () => {

    let idPaciente = idData.idPaciente;
    idPaciente = idPaciente.toString();
    let tipId = idData.tipId;
    tipId = tipId.toString();

    fetch(`http://localhost:8080/historia/clinica/consultarHc/${tipId}/${idPaciente}`, {
      method: "GET",
    }).then((res) => res.json())
      .then((data) => {
        if (data.mensaje === 'OK') {
          console.log('EncontroHistoria', data);
          setdataHistoria(data.data[0]);
        } else {
          //Sacar mensaje
        }
      }).catch((e) => console.log(e));
  };

  return (
    <div>
      {dataHistoria && (<Historia data={dataHistoria} uneditable></Historia>)}
      {!dataHistoria && (
        <div className="container">
          <div className="row my-3">
            <div className="col-12">
              <h1 className="my-3">Consultar Historia Clínica</h1>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-12">
              <div className="card">
                <h5 className="card-header">Datos del paciente</h5>
                <div className="card-body">
                  <form className="form-inline">
                    <div className="form-group mb-2">
                      <label htmlFor="tipId">Tipo de documento</label>
                      <select
                        className="form-control mx-2"
                        id="tipId"
                        name="tipId"
                        value={idData.tipId}
                        onChange={handleIdChange}
                      >
                        <option value="">--Seleccione--</option>
                        <option value="cc">Cédula de ciudadanía</option>
                        <option value="ce">Cédula de extranjería</option>
                        <option value="ps">Pasaporte</option>
                        <option value="ti">Tarjeta de identidad</option>
                      </select>
                    </div>
                    <div className="form-group mb-2 ml-5">
                      <label htmlFor="idPaciente">
                        Identificación del paciente
                      </label>
                      <input
                        class="form-control mx-2"
                        type="text"
                        id="idPaciente"
                        name="idPaciente"
                        placeholder="Id del paciente"
                        value={idData.idPaciente}
                        onChange={handleIdChange}
                      />
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary mb-2 ml-3"
                      // disabled={idData.isSearching}
                      onClick={handleUserSearch}
                    >
                      Consultar Historia
                  </button>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


export default ConsultarHistoria;
