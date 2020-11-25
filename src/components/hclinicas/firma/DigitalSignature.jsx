import React, { useRef, useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import SignatureCanvas from "react-signature-canvas";

function DigitalSignature(props) {
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
        <h5 className="card-header">Firmal Digital</h5>
        <div className="card-body">
          <SignatureCanvas
            canvasProps={{
              width: 500,
              height: 200,
              style: { "border": "1px solid #000000" }
            }}
            minWidth={2}
            maxWidth={3}
            penColor="green"
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
          }}> Borrar </button>
        </div>
      </div>
    </form>
  )
}

export default DigitalSignature;