import React, { useRef, useState, useEffect } from 'react';
import SignatureCanvas from "react-signature-canvas";

function PlanTratamiento(props) {
  const [formData, setFormData] = useState(props.formData || {
    proPre: '',
    operatoria: '',
    endodoncia: '',
    cirugia: '',
    rehabilita: '',
    protesis: '',
    descPlan: '',
    valTrat: '',
    valPeso: ''
  })

  const onChange = (e) => {
    const newState = {
      ...formData,
      [e.target.name]: e.target.value
    }
    setFormData(newState)
    props.updateValues(newState)
  }
  const signatureRef = useRef({});
  const [imageData, setImageData] = useState("");
  const [error, setError] = useState(false);

  const saveSignature = (signature) => {
    setImageData(signature);
  }

  useEffect(() => {
    console.log(imageData)
  }, [imageData]);




  return (
    <form>
      <div className="card">
        <h5 className="card-header">Plan de tratamiento</h5>
        <div className="card-body">
          <div className="form-row">
            <InputCheck name="proPre" value={formData.proPre} onChange={onChange} label="Promoción y Prevención" />
            <InputCheck name="operatoria" value={formData.operatoria} onChange={onChange} label="Operatoria" />
            <InputCheck name="endodoncia" value={formData.endodoncia} onChange={onChange} label="Endodoncia" />
            <InputCheck name="cirugia" value={formData.cirugia} onChange={onChange} label="Cirugía" />
            <InputCheck name="rehabilita" value={formData.rehabilita} onChange={onChange} label="Rehabilitación" />
            <InputCheck name="protesis" value={formData.protesis} onChange={onChange} label="Prótesis" />
          </div>
          <div className="form-row">
            <div className="form-group col-12">
              <label htmlFor="descPlan">Descripción del plan</label>
              <textarea name="descPlan" id="descPlan" className="form-control"
                value={formData.descPlan} onChange={onChange} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-12">
              <label htmlFor="valTrat">Valor del tratamiento</label>
              <textarea name="valTrat" id="valTrat" className="form-control"
                value={formData.valTrat} onChange={onChange} />
            </div>
            <div className="form-row">
              <div className="form-group col-12">
                <label id="firma" htmlFor="descPlan2">Firma</label>
                <br />
                <SignatureCanvas
                  className="firma"
                  canvasProps={{
                    width: 500,
                    height: 200,
                    style: { "border": "1px solid #000000" }
                    // style: { "border": "outset; border-width: 4px" }
                  }}
                  minWidth={2}
                  maxWidth={3}
                  penColor="black"
                  ref={signatureRef}
                  onEnd={() => (
                    saveSignature(signatureRef.current.getTrimmedCanvas().toDataURL("image/jpg"))
                  )}
                  onBegin={() => { setError(false) }} />
                <pre>
                  {
                    error ? <div>La firma es obligatoria</div> : false
                  }
                </pre>
                <button onClick={() => {
                  signatureRef.current.clear();
                  saveSignature(null);
                }} class="btn btn-danger" > Borrar </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form >
  )
}

function InputCheck(props) {
  return (
    <div className={`form-group ${!props.fullWidth ? 'col-md-6' : ''}`}>
      <div className="form-check">
        <input
          type="checkbox"
          name={props.name}
          id={props.name}
          className="form-check-input"
          value={props.value}
          onChange={props.onChange}
        />
        <label className="form-check-label" htmlFor={props.name}>{props.label}</label>
      </div>
    </div>
  )
}

export default PlanTratamiento