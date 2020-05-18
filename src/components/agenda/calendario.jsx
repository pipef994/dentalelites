import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class calendario extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  renderButtons() {

    const horas = ["09:00 AM",
      "09:30 AM",
      "10:00 AM",
      "10:30 AM",
      "11:00 AM",
      "11:30 AM",
      "12:00 AM",
      "12:30 AM",
      "01:00 PM",
      "01:30 PM",
      "02:00 PM",
      "02:30 PM",
      "03:00 PM",
      "03:30 PM",
      "04:00 PM",
      "04:30 PM",
      "05:00 PM",
      "05:30 PM",
      "06:00 PM",
      "06:30 PM"]

    return (
      <div className="container-fluid">
        <div className="row">
          {horas.map((hora) => {
            return (
              <div className="col-xs-6 col-sm-6 col-md-3 py-1 text-center" key={hora}>
                <button type="button" className="btn btn-success">{hora}</button>
              </div>
            )
          })}
        </div>
      </div>)
  }

  render() {
    return (
      <div className="container row ">
        <div className="calendar col-md-4 col-sm-12 aling-items-center">
          <Calendar
            className = "mx-auto"
            onChange={this.onChange}
            value={this.state.date}
          />
        </div>
        <div className="horas col-md-8 py-4 col-sm-12">
          {
            this.renderButtons()
          }
        </div>
      </div>
    );
  }
}
export default calendario