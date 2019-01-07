import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

class AppointmentForm extends Component {
    //Refs
    petRef = React.createRef();
    ownerRef = React.createRef();
    dateRef = React.createRef();
    timeRef = React.createRef();
    symptomsRef = React.createRef();

    state = {
        error:false
    }

    addNewAppointment = e => {
        e.preventDefault();

        //Creo variables para hacer validaciones de formulario
        const pet = this.petRef.current.value;
        const owner = this.ownerRef.current.value;
        const date = this.dateRef.current.value;
        const time = this.timeRef.current.value;
        const symptoms = this.symptomsRef.current.value;

        if(!pet || !owner || !date || !time || !symptoms) {
            this.setState({
                error: true
            })
        } else {
            //uuid es para generar una clave unica ya que no estamos usando base de datos
            //Creo objeto con la informacion del formulario
            const data = {
                id: uuid(),
                pet,
                owner,
                date,
                time,
                symptoms
            }
            //Paso objeto al padre para actualizar state
            this.props.newAppointment(data);

            //Blanqueo formulario
            e.currentTarget.reset();

            this.setState({
                error: false
            })
        }
    }

    render() { 
        return (  
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">Agrega las citas aquí</h2>

                    <form onSubmit={this.addNewAppointment}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input ref={this.petRef} type="text" className="form-control" placeholder="Nombre Mascota" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                            <div className="col-sm-8 col-lg-10">
                                <input ref={this.ownerRef} type="text" className="form-control"  placeholder="Nombre Dueño de la Mascota" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                                <input ref={this.dateRef} type="date" className="form-control" />
                            </div>                            

                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input ref={this.timeRef} type="time" className="form-control" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea  ref={this.symptomsRef} className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="form-group row justify-content-end">
                            <div className="col-sm-12 col-lg-4">
                                <button type="submit" className="btn btn-success w-100">Agregar</button>
                            </div>
                        </div>
                        {(this.state.error) ? <div className="alert alert-danger text-center">Todos los campos son obligatorios</div> : ''}
                    </form>
                </div>
            </div>
        );
    }
}

AppointmentForm.propTypes = {
    newAppointment: PropTypes.func.isRequired
}
 
export default AppointmentForm;