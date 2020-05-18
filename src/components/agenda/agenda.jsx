import React from 'react'
import {
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Calendario from "./calendario";


class agenda extends React.Component {
  constructor(args) {
    super(args)
    this.state = {
      tipServ: '',
      odont: ''
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form action="">
        {/* <div className="form-group"> */}
          <h1>Agenda</h1>
          <br />
          <div className="form-group">
            <label htmlFor="tipServ">Tipo Servicio</label>
            <select id="tipServ" name="tipServ"
              value={this.state.tipServ}
              onChange={this.onChange.bind(this)} >
              <option value="wh"></option>
              <option value="gn">General</option>
              <option value="es">Especializado</option>
            </select>
          </div>
          <label htmlFor="odont">Odontologo</label>
          <input type="text" name="odont" id="odont" />
          <hr />
          <br />
          <div className="footer">
            <button type="button" className="next" >
              Siguiente
        </button>
            <NavLink to="/agenda/calendario" className="btn btn-dark" activeClassName="active">
              Calendario
        </NavLink>
          </div>
          <Switch>
            <Route path="/agenda/calendario">
              <Calendario />
            </Route>
          </Switch>
        {/* </div> */}
      </form >
    )
  }
}

export default agenda
