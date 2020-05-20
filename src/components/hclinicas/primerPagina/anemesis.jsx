import React from 'react';


class anemesis extends React.Component {

  constructor(args) {
    super(args)
    this.state = {
      motConsul: '',
      enfActual: ''
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
        <h2>Anemesis</h2>
        <br />
        <div className="form-group">
          <label htmlFor="mtvConsul">Motivo de consulta</label>
          <textarea name="mtvConsul" id="mtvConsul" class="form-control"
            value={this.state.mtvConsul} onChange={this.onChange.bind(this)}> </textarea>
          <br />
          <label htmlFor="enfActu">Enfermedad Actual</label>
          <textarea name="enfActu" id="enfActu" class="form-control"
            value={this.state.enfActu} onChange={this.onChange.bind(this)}> </textarea>
        </div>
      </form>
    )
  }




}