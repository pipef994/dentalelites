import React from 'react'


class datosIdentificacion extends React.Component {

  constructor(args) {
    super(args)
    this.state = {
      FlastName: '',
      SlastName: '',
      name: '',
      nIdent: '',
      direction: '',
      tell: '',
      cell: '',
      muni: '',
      email: '',
      rh: '',
      tvinculacion: '',
      grammar: '',
      age: '',
      sex: '',
      estC: '',
      Ocupacion: '',
      nResponsible: '',
      relationship: '',
      tellp: '',
      nAccompanying: '',
      tAccompanying: ''
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
        <h1>Datos Identificación</h1>
        <br />
        <div className="form-group">
          <label htmlFor="FlastName">Primer Apellido</label>
          <input type="text" className="form-control"
            id="FlastName" name="FlastName"
            value={this.state.FlastName}
            onChange={this.onChange.bind(this)} ></input> />
          <label htmlFor="SlastName">Segundo Apellido</label>
          <input type="text" className="form-control"
            id="SlastName" name="SlastName"
            value={this.state.SlastName}
            onChange={this.onChange.bind(this)} />
          <label htmlFor="name">Nombre</label>
          <input type="text" className="form-control"
            id="name" name="name" value={this.state.name}
            onChange={this.onChange.bind(this)} />
          <label htmlFor="nIdent">N° Identificación</label>
          <input type="text" className="form-control"
            id="nIdent" name="nIdent" value={this.state.nIdent}
            onChange={this.onChange.bind(this)} />
          <label htmlFor="direction">Direccón</label>
          <input type="text" className="form-control"
            name="direction" id="direction" value={this.state.direction}
            onChange={this.onChange.bind(this)} />
          <label htmlFor="tell">Telefono</label>
          <input type="text" className="form-control"
            name="tell" id="tell" value={this.state.tellq}
            onChange={this.onChange.bind(this)} />
          <label htmlFor="cell">Cell</label>
          <input type="text" className="form-control"
            name="cell" id="cell" value={this.state.cell}
            onChange={this.onChange.bind(this)} />
          <label htmlFor="muni">Municipio</label>
          <input type="text" className="form-control"
            name="muni" id="muni" value={this.state.muni}
            onChange={this.onChange.bind(this)} />
          <label htmlFor="email">Correo Electronico</label>
          <input type="email" className="form-control"
            name="email" id="email" value={this.state.email}
            onChange={this.onChange.bind(this)} />
          <label htmlFor="rh">RH</label>
          <input type="text" className="form-control"
            name="rh" id="rh" value={this.state.rh}
            onChange={this.onChange.bind(this)} />
        </div>
        <div className="form-group">
          <label htmlFor="tvinculacion">Tipo Vinculación EPS</label>
          <br />
          <select className="form-control" id="tvinculacion" name="tvinculacion"
            value={this.state.tvinculacion} onChange={this.onChange.bind(this)}>
            <option value="wh"></option>
            <option value="sub">SUB</option>
            <option value="ccot">C.COT</option>
            <option value="cben">C.BEN</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="grammar">Fecha Nacimiento</label>
          <input type="date" className="form-control"
            name="grammar" id="grammar" value={this.state.grammar}
            onChange={this.onChange.bind(this)} />
          <label htmlFor="age">Edad</label>
          <input type="number" className="form-control"
            name="age" id="age" value={this.state.age}
            onChange={this.onChange.bind(this)} />
        </div>
        <div className="form-group">
          <label htmlFor="sex">sexo</label>
          <br/>
          <select name="" id="" className="form-control" id="sex" name="sex"
            value={this.state.sex} onChange={this.onChange.bind(this)}>
            <option value="wh"></option>
            <option value="men">Hombre</option>
            <option value="woman">Mujer</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="estC">Estado Civil</label>
          <select className="form-control" id="estC" name="estC"
            value={this.state.estC} onChange={this.onChange.bind(this)}>
            <option value="soltero">Soltero</option>
            <option value="casado">Casado</option>
            <option value="unionLibre">Union libre</option>
            <option value="divorciado">Casado</option>
            <option value="viudo">Viudo</option>
          </select>
        </div>
        <div className="form-group">
          <div className="mb-3">
            <label htmlFor="Ocupacion">Ocupación</label>
            <textarea class="form-control" id="Ocupacion"
              value={this.state.Ocupacion} onChange={this.onChange.bind(this)}></textarea>
          </div>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="nResponsible">Nombre de Responsable</label>
          <input type="text" className="form-control"
            name="nResponsible" id="nResponsible" value={this.state.nResponsible}
            onChange={this.onChange.bind(this)} />
          <div class="invalid-feedback">
            (en caso de emergencia)
         </div>
          <div className="form-group">
            <label htmlFor="relationship">parentesco</label>
            <input type="text" className="form-control"
              name="relationship" id="relationship" value={this.state.relationship}
              onChange={this.onChange.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="tellp">Telefono</label>
            <input type="text" className="form-control"
              name="tellp" id="tellp" value={this.state.tellp}
              onChange={this.onChange.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="nAccompanying">Nombre del Acompañante</label>
            <input type="text" className="form-control"
              name="nAccompanying" id="nAccompanying" value={this.state.nAccompanying}
              onChange={this.onChange.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="tAccompanying">Telefono del Acompañante</label>
            <input type="text" className="form-control"
              name="tAccompanying" id="tAccompanying" value={this.state.tAccompanying}
              onChange={this.onChange.bind(this)} />
          </div>
        </div>
      </form>
    )
  }

}