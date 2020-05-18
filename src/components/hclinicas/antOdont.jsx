import React from 'react';

class antOdont extends React.Component {

  constructor(args) {
    super(args)
    this.state = {
      tratPrev: '',
      cepDent: '',
      seDental: '',
      enjuBucal: '',
      traDental: '',
      habitos: '',
      observacion:''
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
        <div className="form-group">
          <h2>Antecedentes Odontologicos</h2>
          <label htmlFor="tratPrev">Tratamientos Previos</label>
          <select name="tratPrev" id="tratPrev" className="form-control"
            value={this.state.tratPrev} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
          <label htmlFor="cepDent">Cepillo Dental</label>
          <select name="cepDent" id="cepDent" className="form-control"
            value={this.state.cepDent} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
          <label htmlFor="seDental">Seda Dental</label>
          <select name="seDental" id="seDental" className="form-control"
            value={this.state.seDental} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <br />
          <label htmlFor="enjuBucal">Enjuague Bucal</label>
          <select name="enjuBucal" id="enjuBucal" className="form-control"
            value={this.state.enjuBucal} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          <label htmlFor="habitos">Habitos</label>
          <select name="habitos" id="habitos" className="form-control"
            value={this.state.habitos} onChange={this.onChange.bind(this)}>
            <option value=""></option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
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