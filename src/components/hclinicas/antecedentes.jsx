import React from 'react';


class antecedentes extends React.Component {

  constructor(args) {
    super(args)
    this.state = {
      traMedico: '',
      inMedicamentos: '',
      reMedicas: '',
      sanExCort: '',
      paAlgSan: '',
      enfRespi: '',
      sinusitis: '',
      irradia: '',
      diaBetis: '',
      fieReu: '',
      hepatitis: '',
      hipertension: '',
      cardiopatia: '',
      enfRenal: '',
      enfGas: '',
      orgSent: '',
      embarazo: '',
      observacion: '',
      antMedOdoFa: ''
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form>
        <h2>Antecendentes Medicos</h2>
        <br />
        <div className='form-group'>
          <label htmlFor="traMedico">Tratamiento Medico</label>
          <select name="traMedico" id="traMedico" className="form-control"
            value={this.state.traMedico} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
          <label htmlFor="inMedicamentos">Ingestión de Medeicamentos</label>
          <select name="inMedicamentos" id="inMedicamentos" className="form-control"
            value={this.state.inMedicamentos} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
          <label htmlFor="reMedicas">Reacción Medicamentos</label>
          <select name="reMedicas" id="reMedicas" className="form-control"
            value={this.state.reMedicas} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="anest">Anestesia</option>
            <option value="anti">Antibioticos</option>
          </select>
          <br />
          <label htmlFor="sanExCort">Sangra Excesivamente al cortarse?</label>
          <select name="reMedicas" id="reMedicas" className="form-control"
            value={this.state.reMedicas} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
          <label htmlFor="paAlgSan">Padece de algun problema sanguineo </label>
          <select name="paAlgSan" id="paAlgSan" className="form-control"
            value={this.state.paAlgSan} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
          <label htmlFor="enfRespi">Enfermedades Respiratorias</label>
          <select name="enfRespi" id="enfRespi" className="form-control"
            value={this.state.enfRespi} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
          <label htmlFor="sinusitis">Sinusitis</label>
          <select name="sinusitis" id="sinusitis" className="form-control"
            value={this.state.sinusitis} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
          <label htmlFor="irradia">Irradiaciones</label>
          <select name="irradia" id="irradia" className="form-control"
            value={this.state.irradia} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
          <label htmlFor="diaBetis">Diabetis</label>
          <select name="diaBetis" id="diaBetis" className="form-control"
            value={this.state.diaBetis} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
          <label htmlFor="fieReu">Fiebre Reumatica</label>
          <select name="fieReu" id="fieReu" className="form-control"
            value={this.state.fieReu} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
          <label htmlFor="hepatitis">Hepatitis</label>
          <select name="hepatitis" id="hepatitis" className="form-control"
            value={this.state.hepatitis} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
          <label htmlFor="hipertension">Hipertensión</label>
          <select name="hipertension" id="hipertension" className="form-control"
            value={this.state.hipertension} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
          <label htmlFor="cardiopatia">Cardiopatia</label>
          <select name="cardiopatia" id="cardiopatia" className="form-control"
            value={this.state.cardiopatia} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
          <label htmlFor="enfRenal">Enfermedades Renales</label>
          <select name="enfRenal" id="enfRenal" className="form-control"
            value={this.state.enfRenal} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
          <label htmlFor="enfGas">Enfermedades Gastrointestinales</label>
          <select name="enfGas" id="enfGas" className="form-control"
            value={this.state.enfGas} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
          <label htmlFor="orgSent">Organos de los sentidos</label>
          <select name="orgSent" id="orgSent" className="form-control"
            value={this.state.orgSent} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
          <label htmlFor="embarazo">Embarazo</label>
          <select name="embarazo" id="embarazo" className="form-control"
            value={this.state.embarazo} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor="observacion">Observación</label>
          <textarea name="observacion" id="observacion" class="form-control"
            value={this.state.observacion} onChange={this.onChange.bind(this)}> </textarea>
        </div>
        <div className='form-group'>
          <h2>Antecedentes Medicos y Odontologicos Familiares</h2>
          <br/>
          <textarea name="antMedOdoFa" id="antMedOdoFa" class="form-control"
            value={this.state.antMedOdoFa} onChange={this.onChange.bind(this)}> </textarea>
        </div>
      </form>
    )
  }



}