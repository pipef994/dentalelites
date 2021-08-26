import React, { useState, Fragment, useEffect } from "react";
import "../usuarios/usuarios.scss";
import SearchBar  from "./SearchBar";



const Consentimiento = (props) => {
    const [users, setUsers] = useState([]);
    // const [formData, setFormData] = useState(props.formData || {
    //   user: '',
    //   odontologo: window.localStorage.getItem("email"), //Se toma el correo de memoria
    // })

    const [consentAssigned, setConsentAssigned] = useState()

    const [userAsignedData, setUserAsigneData] = useState({
        name: '',
        email: '',
        id: '',
        consent: ''
      })

    useEffect(() => {
        fetch(`http://localhost:8080/historia/clinica/consultarPersonalData`, { method: 'GET' })
          .then(res => res.json())
          .then(res => {
            setUsers(res.data);
            console.log(res.data);
          })
          .catch(e => console.log(e));
      }, [])

    const handleUserAsigned = (data) => {
      const newState = {
        ...data,
      }

      console.log(newState)
      setUserAsigneData(newState);
    }

    const handleConsent = (e) => {
      setConsentAssigned(e.target.value);


    }

    const assignConsent = () => {
      setConsentInfo();


      var user = {
        ...userAsignedData,
        consent: consentAssigned,
      };
      

      console.log(user);

      fetch(`http://localhost:8080/consentimiento/Sent`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
        .catch(e => {
        window.alert(e);
          console.log(e)
        })
    }

    const setConsentInfo = () => {
      const fecha = new Date();

      var consentInfo = {
        id: userAsignedData.id,
        date: fecha.toLocaleDateString(),
        consent: consentAssigned,
        dentist: 'Jorge Alexander Atehortua',
        ready: false
      };

      fetch(`http://localhost:8080/consentimiento/ConsentInfo`, { 
        method: 'POST',
        body: JSON.stringify(consentInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => console.log(res.json))
      .catch(e => console.log(e));
    }

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
                                <SearchBar placeholder="Ingresa el nombre del usuario" 
                                          data={users} 
                                          handleUserAsigned={(data) => handleUserAsigned(data)} 
                                          required/>


                                
                                <SelectInput name="consentimiento" value={consentAssigned} onChange={handleConsent} label="Consentimiento" options={
                                    [{ value: "", text: "--Seleccione--" },
                                    { value: "Aclaramiento_Dental", text: "Aclaramiento Dental" },
                                    { value: "Publicacion_Foto_Video", text: "Publicacion Foto Video" },
                                    { value: "Anestesia", text: "Anestesia" },
                                    { value: "Ortodedia_Maxilar", text: "Ortodedia Maxilar" },
                                    { value: "Exdoncia_Simple", text: "Exdoncia Simple" },
                                    { value: "Cementacion_Final", text: "Cementacion Final" },
                                    { value: "Periodoncia", text: "Periodoncia" },
                                    { value: "Cosmetica", text: "Cosmetica" },
                                    { value: "Protesis_Parciales_Totales", text: "Protesis Parciales y Totales" },
                                    ]
                                } />
                                <button type="submit" className="btn" id="submit" onClick={() => assignConsent()}>
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

function SelectInput(props) {
    return (
      <div className={`form-group ${!props.fullWidth ? 'col-md-6' : ''}`}>
        <label htmlFor={props.name}>{props.label}</label>
        <select name={props.name} id={props.name} className="form-control"
          value={props.value} onChange={props.onChange}>
          {props.options.map(option => (
            <option key={option.value} value={option.value}>{option.text}</option>
          ))}
        </select>
      </div>
    )
  }
export default Consentimiento;
