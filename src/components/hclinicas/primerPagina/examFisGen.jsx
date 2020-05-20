import React from 'react';

class examFisGen extends React.Component {

  constructor(args) {
    super(args)
    this.state = {
      pulso: '',
      frecRsp: '',
      temp: '',
      pa: '',
      talla: '',
      peso:'',
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
        <div className='form-group'>
          <h2>Examen Físico General</h2>
          <label htmlFor="pulso">Pulso</label>
          <input type="text" id="pulso" name="pulso" class="form-control"
            value={this.state.pulso} onChange={this.onChange.bind(this)} />
          <br />
          <label htmlFor="frecRsp">Frecuencia Respiratoria</label>
          <input type="text" id="frecRsp" name="frecRsp" class="form-control"
            value={this.state.frecRsp} onChange={this.onChange.bind(this)} />
          <br />
          <label htmlFor="temp">Frecuencia Respiratoria</label>
          <input type="text" id="temp" name="temp" class="form-control"
            value={this.state.temp} onChange={this.onChange.bind(this)} />
          <br />
          <label htmlFor="pa">P.A</label>
          <input type="text" id="pa" name="pa" class="form-control"
            value={this.state.pa} onChange={this.onChange.bind(this)} />
          <br />
          <label htmlFor="talla">Talla</label>
          <input type="text" id="talla" name="talla" class="form-control"
            value={this.state.talla} onChange={this.onChange.bind(this)} />
          <br />
          <label htmlFor="peso">Peso</label>
          <input type="text" id="peso" name="peso" class="form-control"
            value={this.state.peso} onChange={this.onChange.bind(this)} />
          <br />
           <label htmlFor="observacion">Observaciones</label>
            <textarea type="text" id="peso" name="peso" class="form-control"
            value={this.state.peso} onChange={this.onChange.bind(this)}></textarea>
        </div>
      </form>
    )
  }
}