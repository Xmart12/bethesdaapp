import React from 'react';

import './Movements.css'
import db from '../../dependences/database';

class Movements extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            movements: []
        }
    }

    componentDidMount() {

        this.getMovement();

    }

    getMovement = () => {
        db.collection('movements').get().then((querySnapshot) => {
            const data = querySnapshot.docs.map(doc => doc.data());
            console.log(data);
            this.setState({ movements: data });
        });
    }

    render() {

        const { movements } = this.state;

        return (
            <React.Fragment>
                
                <table border="1">
                    <thead>
                        <tr>
                        <th>DUI</th>
                        <th>Nombre</th>
                        <th>Primer Apellido</th>
                        <th>Segundo Apellido</th>
                        <th>Nacionalidad</th>
                        <th>Direccion</th>
                        <th colSpan="2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        { movements.map(movement => (
                        <tr>
                            <td>{ movement.accountname }</td>
                            <td>{ movement.categoryname }</td>
                            <td>{ movement.value }</td>
                            <td>{ movement.description }</td>
                            <td>{ movement.reference }</td>
                            <td>{ movement.responsable }</td>
                            <td><button onClick={ () => this.updateData(movement) }>Editar</button></td>
                            <td><button onClick={ () => this.removeData(movement) }>Quitar</button></td>
                        </tr>
                        )) }
                    </tbody>
                </table>               


            </React.Fragment>
        )

    }

}

export default Movements;
