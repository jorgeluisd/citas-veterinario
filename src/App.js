import React, { Component } from 'react';
import Header from './components/Header';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';

class App extends Component {

  state = {
    appointments: []
  }

  componentDidMount() {
    const appointmentsLS = localStorage.getItem('appointment');

    if(appointmentsLS) {
      this.setState({
        appointments: JSON.parse(appointmentsLS)
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem(
      'appointment',
      JSON.stringify(this.state.appointments)
    )
  }

  newAppointment = data => {
    const appointments = [...this.state.appointments, data];

    this.setState({
      appointments
    })
  }

  destroyAppointment = id => {
    //Hago copia del state
    const currentAppointments = [...this.state.appointments];
    //Borrar del state
    const appointments = currentAppointments.filter(appointment => appointment.id !== id);
    //Actualizar state
    this.setState({
      appointments
    })

  }

  render() {
    return (
      <div className="container">
        <Header 
          title="Administrador de Pacientes de Veterinaria"
        />

        <div className="row">

          <div className="col-md-6">
            <AppointmentForm 
              newAppointment = {this.newAppointment}
            />
          </div>

          <div className="col-md-6">
            <AppointmentList 
              appointments = {this.state.appointments}
              destroyAppointment = {this.destroyAppointment}
            />
          </div>

        </div>
      </div>
    );
  }
}

export default App;
