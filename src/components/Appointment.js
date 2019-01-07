import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Appointment extends Component {

    delete = () => {
        this.props.destroyAppointment(this.props.data.id);
    }

    render() { 
        const {pet,owner,date,time,symptoms} = this.props.data;
        return ( 
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className="mt-0 text-uppercase">{pet}</h3>
                    <p className="card-text"><span>Nombre del dueño: </span>{owner}</p>
                    <p className="card-text"><span>Fecha: </span>{date}</p>
                    <p className="card-text"><span>Hora: </span>{time}</p>
                    <p className="card-text"><span>Sintomas: </span>{symptoms}</p>

                    <button onClick={this.delete} className="btn btn-danger">Eliminar &times;</button>
                </div>
            </div>
         );
    }
}

Appointment.propTypes = {
    destroyAppointment: PropTypes.func.isRequired,
    //Para validar cada registro del arreglo
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        pet: PropTypes.string.isRequired,
        owner: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        symptoms: PropTypes.string.isRequired
    })
}
 
export default Appointment;