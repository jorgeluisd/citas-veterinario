import React, { Component } from 'react';
import Header from './components/Header';
import AppointmentForm from './components/AppointmentForm';

class App extends Component {

  state = {
    appointments: []
  }

  newAppointment = data => {
    const appointments = [...this.state.appointments, data];

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
        </div>
      </div>
    );
  }
}

export default App;
