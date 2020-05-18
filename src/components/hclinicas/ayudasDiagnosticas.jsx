import React from 'react';

class ayudasDiagnosticas extends React.Component {

  constructor(args) {
    this.state = {
      peripical: '',
      panorama: '',
      bitewing: '',
      oclusal: '',
      modelos: '',
      otros: '',
      observaciones: ''
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form >
        <div className='form-group'>
          <h3>Ayudas Diagnosticas</h3>
          <br />
          <div class="custom-control custom-checkbox custom-control-inline">
            <input type="checkbox" class="custom-control-input" id="peripical" name="peripical"
            value={this.state.peripical} onChange={this.onChange.bind(this)}/>
            <label class="custom-control-label" htmlFor="peripical">Peripical</label>
          </div>
          <div class="custom-control custom-checkbox custom-control-inline">
            <input type="checkbox" class="custom-control-input" id="panorama" name="panorama"
            value={this.state.panorama} onChange={this.onChange.bind(this)}/>
            <label class="custom-control-label" htmlFor="panorama">Panorama</label>
          </div>
          <div class="custom-control custom-checkbox custom-control-inline">
            <input type="checkbox" class="custom-control-input" id="bitewing" name="bitewing"
            value={this.state.bitewing} onChange={this.onChange.bind(this)}/>
            <label class="custom-control-label" htmlFor="bitewing">Bitewing</label>
          </div>
          <div class="custom-control custom-checkbox custom-control-inline">
            <input type="checkbox" class="custom-control-input" id="oclusal" name="oclusal"
            value={this.state.oclusal} onChange={this.onChange.bind(this)}/>
            <label class="custom-control-label" htmlFor="oclusal">Oclusal</label>
          </div>
          <div class="custom-control custom-checkbox custom-control-inline">
            <input type="checkbox" class="custom-control-input" id="modelos" name="modelos"
            value={this.state.modelos} onChange={this.onChange.bind(this)}/>
            <label class="custom-control-label" htmlFor="modelos">Modelos</label>
          </div>
        </div>
        <div className='form-group'>
          <label htmlFor="observaciones">Observaciones</label>
          <textarea name="observaciones" id="observaciones" class="form-control"
            value={this.state.observaciones} onChange={this.onChange.bind(this)}> </textarea>
        </div>
      </form>
    )
  }
}