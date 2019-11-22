import React, { Component } from 'react';
import Logo from '../../assets/img/icon-login.png';
import '../../assets/css/cabecalho.css';
// Para utilizar o Link é necessário importa-lo
import {Link} from 'react-router-dom';

export default class Cabecalho extends Component {
    render() {
        return (
            <header className="cabecalhoPrincipal">
                <div className="container">
                    <img src={Logo} alt="Logo do site."/>

                    <nav className="cabecalhoPrincipal-nav">
                        {/* Referenciando os links, aqueles que foram definidos no index.js */}
                        <Link to="/">Home</Link>
                        <Link to="/eventos">Eventos</Link>
                        <Link to="/categorias">Categorias</Link>
                        <Link to="/login" className="cabecalhoPrincipal-nav-login">Login</Link>
                    </nav>
                </div>
            </header>
        );
    }
}