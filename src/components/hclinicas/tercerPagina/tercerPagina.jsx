import React from 'react';

class diagPresuntivo extends React.Component {

  constructor(args) {
    super(args)
    this.state = {
      diagPresu: '',
      diagDefini: '',

      proPre: '',
      operatoria: '',
      descPlan: '',
      valTrat: '',
      valPeso:''
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
        <div className="form-group paralelos">
          <label htmlFor="diagPresu">Diagnóstico Presuntivo</label>
          <textarea name="diagPresu" id="diagPresu" class="form-control"
            value={this.state.diagPresu} onChange={this.onChange.bind(this)}> </textarea>
          <label htmlFor="diagDefini">Diagnóstico Definitivo</label>
          <textarea name="diagDefini" id="diagDefini" class="form-control"
            value={this.state.diagDefini} onChange={this.onChange.bind(this)}> </textarea>
        </div>
        <hr />
        <div className="form-group">
          <h2>Plan de Tratamiento</h2>
          <div className="form-check form-check-inline">
            <input type="checkbox" class="form-check-input" id="proPre" name="proPre" />
            <label class="form-check-label" htmlFor="proPre">Promoción y Prevención</label>
          </div>
          <div className="form-check form-check-inline">
            <input type="checkbox" class="form-check-input" id="operatoria" name="operatoria" />
            <label class="form-check-label" htmlFor="operatoria">Operatoria</label>
          </div>
          <div className="form-check form-check-inline">
            <input type="checkbox" class="form-check-input" id="proPre" name="proPre" />
            <label class="form-check-label" htmlFor="proPre">Promoción y Prevención</label>
          </div>
          <div className="form-check form-check-inline">
            <input type="checkbox" class="form-check-input" id="proPre" name="proPre" />
            <label class="form-check-label" htmlFor="proPre">Promoción y Prevención</label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="descPlan">Descripción del Plan</label>
          <textarea name="descPlan" id="descPlan" class="form-control"
            value={this.state.descPlan} onChange={this.onChange.bind(this)}> </textarea>
          <div className="form-group">
            <label htmlFor="valTrat">Valor del Tratamiento</label>
            <textarea name="valTrat" id="valTrat" class="form-control"
              value={this.state.valTrat} onChange={this.onChange.bind(this)}> </textarea>
            <input type="text" id="valPeso" name="valPeso" class="form-control"
            value={this.state.valPeso} onChange={this.onChange.bind(this)} />
          </div>
        </div>
      </form>
    )
  }

}