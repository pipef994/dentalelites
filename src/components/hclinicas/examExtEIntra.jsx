import React from 'react';

class examExtEIntra extends React.Component {

  constructor(args) {
    super(args)
    this.state = {
      atm: '',
      labios: '',
      lengua: '',
      paladar: '',
      pisBoca: '',
      carrillos: '',
      glanSali: '',
      maxilares: '',
      senMaxilares: '',
      musMasti: '',
      ganglios: '',
      frenillos: '',
      mucosas: '',
      encias: '',
      amigdalas: '',

      supernumeraios: '',
      agenesia: '',
      incluidos: '',
      abrasion: '',
      erosion: '',
      atriccion: '',
      abfracción: '',
      manCamColor: '',
      malposicion: '',
      maloclusion: '',
      trauma: '',
      habitos: '',
      apreDental: '',
      onicofagia: '',
      muerdObjDien: '',
      fumador: '',

      plBlanca: '',
      bolsas: '',
      movilidad: '',
      sangrado: '',
      calculos: '',
      recGin: '',

      camColor: '',
      dolor: '',
      movilidadExmPul: '',
      tumefaccion: '',
      fistula: '',

      examRadio: '',
      observacion: ''

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
        <h2>Examen Extraoral e Intraoral</h2>
        <div className="form-group">
          <label htmlFor="atm">1. A.T.M</label>
          <select name="atm" id="atm" className="form-control"
            value={this.state.atm} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="nm">Normal</option>
            <option value="am">Anormal</option>
          </select>
          <br />
          <label htmlFor="labios">2. Labios</label>
          <select name="labios" id="labios" className="form-control"
            value={this.state.labios} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="nm">Normal</option>
            <option value="am">Anormal</option>
          </select>
          <br />
          <label htmlFor="lengua">3. Lengua</label>
          <select name="lengua" id="lengua" className="form-control"
            value={this.state.lengua} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="nm">Normal</option>
            <option value="am">Anormal</option>
          </select>
          <br />
          <label htmlFor="paladar">4. Paladar</label>
          <select name="paladar" id="paladar" className="form-control"
            value={this.state.paladar} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="nm">Normal</option>
            <option value="am">Anormal</option>
          </select>
          <br />
          <label htmlFor="pisBoca">5. Piso de Boca</label>
          <select name="pisBoca" id="pisBoca" className="form-control"
            value={this.state.pisBoca} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="nm">Normal</option>
            <option value="am">Anormal</option>
          </select>
          <br />
          <label htmlFor="carrillos">6. Carrillos</label>
          <select name="carrillos" id="carrillos" className="form-control"
            value={this.state.carrillos} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="nm">Normal</option>
            <option value="am">Anormal</option>
          </select>
          <br />
          <label htmlFor="glanSali">7. Glandulas Salivares</label>
          <select name="glanSali" id="glanSali" className="form-control"
            value={this.state.glanSali} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="nm">Normal</option>
            <option value="am">Anormal</option>
          </select>
          <br />
          <label htmlFor="maxilares">8. Maxilares</label>
          <select name="maxilares" id="maxilares" className="form-control"
            value={this.state.maxilares} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="nm">Normal</option>
            <option value="am">Anormal</option>
          </select>
          <br />
          <label htmlFor="senMaxilares">9. Senos Maxilares</label>
          <select name="senMaxilares" id="senMaxilares" className="form-control"
            value={this.state.senMaxilares} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="nm">Normal</option>
            <option value="am">Anormal</option>
          </select>
          <br />
          <label htmlFor="musMasti">10. Músculos Masticadores</label>
          <select name="musMasti" id="musMasti" className="form-control"
            value={this.state.musMasti} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="nm">Normal</option>
            <option value="am">Anormal</option>
          </select>
          <br />
          <label htmlFor="ganglios">11. Ganglios</label>
          <select name="ganglios" id="ganglios" className="form-control"
            value={this.state.ganglios} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="nm">Normal</option>
            <option value="am">Anormal</option>
          </select>
          <br />
          <label htmlFor="frenillos">12. Frenillos</label>
          <select name="frenillos" id="frenillos" className="form-control"
            value={this.state.frenillos} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="nm">Normal</option>
            <option value="am">Anormal</option>
          </select>
          <br />
          <label htmlFor="mucosas">13. Mucosas</label>
          <select name="mucosas" id="mucosas" className="form-control"
            value={this.state.mucosas} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="nm">Normal</option>
            <option value="am">Anormal</option>
          </select>
          <br />
          <label htmlFor="encias">14. Encias</label>
          <select name="encias" id="encias" className="form-control"
            value={this.state.encias} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="nm">Normal</option>
            <option value="am">Anormal</option>
          </select>
          <br />
          <label htmlFor="amigdalas">15. Amigdalas</label>
          <select name="amigdalas" id="amigdalas" className="form-control"
            value={this.state.amigdalas} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="nm">Normal</option>
            <option value="am">Anormal</option>
          </select>
          <br />
        </div>
        <hr />
        <div className="form-group">
          <h3>Examen Dental</h3>
          <br />
          <label htmlFor="supernumeraios">1. Supernumeraios</label>
          <select name="supernumeraios" id="supernumeraios" className="form-control"
            value={this.state.supernumeraios} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
          <label htmlFor="agenesia">2. Agenesia</label>
          <select name="agenesia" id="agenesia" className="form-control"
            value={this.state.agenesia} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
          <label htmlFor="incluidos">3. Incluidos</label>
          <select name="incluidos" id="incluidos" className="form-control"
            value={this.state.incluidos} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
          <label htmlFor="abrasion">4. Abrasión</label>
          <select name="abrasion" id="abrasion" className="form-control"
            value={this.state.abrasion} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
          <label htmlFor="erosion">5. Erosión</label>
          <select name="erosion" id="erosion" className="form-control"
            value={this.state.erosion} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
          <label htmlFor="atriccion">6. Atricción</label>
          <select name="atriccion" id="atriccion" className="form-control"
            value={this.state.atriccion} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
          <label htmlFor="abfraccion">7. Abfracción</label>
          <select name="abfraccion" id="abfraccion" className="form-control"
            value={this.state.abfraccion} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
          <label htmlFor="manCamColor">8. Manchas - Cambios de color</label>
          <select name="manCamColor" id="manCamColor" className="form-control"
            value={this.state.manCamColor} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
          <label htmlFor="malposicion">9. Malposición</label>
          <select name="malposicion" id="malposicion" className="form-control"
            value={this.state.malposicion} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
          <label htmlFor="maloclusion">10. Maloclusion</label>
          <select name="maloclusion" id="maloclusion" className="form-control"
            value={this.state.maloclusion} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
          <label htmlFor="trauma">11. Trauma</label>
          <select name="trauma" id="trauma" className="form-control"
            value={this.state.trauma} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
          <label htmlFor="habitos">12. Habitos</label>
          <select name="habitos" id="habitos" className="form-control"
            value={this.state.habitos} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
          <label htmlFor="apreDental">12.1 Apretamiento Dental</label>
          <select name="apreDental" id="apreDental" className="form-control"
            value={this.state.apreDental} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
          <label htmlFor="onicofagia">12.2 Onicofagia</label>
          <select name="onicofagia" id="onicofagia" className="form-control"
            value={this.state.onicofagia} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
          <label htmlFor="muerdObjDien">12.3 Muerde Objetos con Dientes</label>
          <select name="muerdObjDien" id="muerdObjDien" className="form-control"
            value={this.state.muerdObjDien} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
          <label htmlFor="fumador">12.4 Fumador</label>
          <select name="fumador" id="fumador" className="form-control"
            value={this.state.fumador} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
        </div>
        <hr />
        <div className="form-group">
          <h3>Examen Periodontal</h3>
          <label htmlFor="plBlanca">1. Placa Blanca</label>
          <select name="plBlanca" id="plBlanca" className="form-control"
            value={this.state.plBlanca} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
          <label htmlFor="bolsas">2. Bolsas</label>
          <select name="bolsas" id="bolsas" className="form-control"
            value={this.state.bolsas} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
          <label htmlFor="movilidad">3. Movilidad</label>
          <select name="movilidad" id="movilidad" className="form-control"
            value={this.state.movilidad} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
          <label htmlFor="sangrado">4. Sangrado</label>
          <select name="sangrado" id="sangrado" className="form-control"
            value={this.state.sangrado} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
          <label htmlFor="calculos">5. Calculos</label>
          <select name="calculos" id="calculos" className="form-control"
            value={this.state.calculos} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
          <label htmlFor="recGin">6. Recesión Gingival</label>
          <select name="recGin" id="recGin" className="form-control"
            value={this.state.recGin} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
        </div>
        <div className="form-group">
          <h3>Examen Pulpar</h3>
          <br />
          <label htmlFor="camColor">1. Cambio de Color</label>
          <select name="camColor" id="camColor" className="form-control"
            value={this.state.camColor} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
          <label htmlFor="dolor">2. Dolor </label>
          <select name="dolor" id="dolor" className="form-control"
            value={this.state.dolor} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
          <label htmlFor="movilidadExmPul">3. Movilidad </label>
          <select name="movilidadExmPul" id="movilidadExmPul" className="form-control"
            value={this.state.movilidadExmPul} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
          <label htmlFor="tumefaccion">4. Tumefacción </label>
          <select name="tumefaccion" id="tumefaccion" className="form-control"
            value={this.state.tumefaccion} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
          <label htmlFor="fistula">5. Fistula </label>
          <select name="fistula" id="fistula" className="form-control"
            value={this.state.fistula} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
        </div>
        <div className="form-group">
          <label htmlFor="examRadio">Examen Radiografico</label>
          <textarea name="examRadio" id="examRadio" class="form-control"
            value={this.state.examRadio} onChange={this.onChange.bind(this)}> </textarea>
        </div>
        <div className="form-group">
          <label htmlFor="observacion">Observaciones</label>
          <textarea name="observacion" id="observacion" class="form-control"
            value={this.state.observacion} onChange={this.onChange.bind(this)}> </textarea>
        </div>
      </form>
    )
  }
}