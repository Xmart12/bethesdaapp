import React from 'react';
import './Movements.css'

import Firebase from 'firebase';
import config from './config';

class Movements extends React.Component {

    constructor(props) {
        super(props);

        //
        Firebase.initializeApp(config);

        this.state = {
            movements: []
        }
    }

    render() {

        return (
            <React.Fragment>
                Holo
            </React.Fragment>
        )

    }

}

export default Movements;
