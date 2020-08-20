import React, { Component } from 'react';
import MyButton from './MyButton';
import Buscador from './Buscador';

class MyHeader extends Component {
    render() {
        return (
            <header>
                <h1>Soy un encabezado</h1>
                <Buscador />
                <MyButton />
            </header>
        );
    }
}

export default MyHeader;