import React, { Component } from 'react';
import Appointment from './Appointment';
import PropTypes from 'prop-types';

class AppointmentList extends Component {

    render() { 
        const appointments = this.props.appointments;
        const message = Object.keys(appointments).length ? 'Administra tus citas aqui' : 'No hay citas';

        return (  
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">{message}</h2>

                    <div className="lista-citas">

                        {Object.keys(this.props.appointments).map(appointment => (
                            <Appointment 
                                key = {appointment}
                                data={this.props.appointments[appointment]}
                                destroyAppointment = {this.props.destroyAppointment}
                            />
                        ))}

                    </div>
                </div>
            </div>
        );
    }
}

AppointmentList.propTypes = {
    appointments: PropTypes.array.isRequired,
    destroyAppointment: PropTypes.func.isRequired
}
 
export default AppointmentList;