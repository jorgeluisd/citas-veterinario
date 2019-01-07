import React, { Component } from 'react';

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
 
export default Appointment;