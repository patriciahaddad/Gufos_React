import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Importamos os estilos:
import './assets/css/flexbox.css';
import './assets/css/reset.css';
import './assets/css/style.css';



// Importamos as dependências necessárias:
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

// Importamos as páginas criadas
import Categorias from './pages/Categorias/Categorias';
import NaoEncontrada from './pages/NaoEncontrada/NaoEncontrada';

// Realizamos a criação das Rotas:
const Rotas = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={ () => <App titulo_pagina="Inicio | Gufos" /> } />
                <Route path="/categorias" component={ () => <Categorias titulo_pagina="Categorias | Gufos" /> } />
                <Route component={ () => <NaoEncontrada titulo_pagina="404 | Gufos" /> } />
            </Switch>
        </div>
    </Router>
)

// Trocamos ao App padrão pelas nossas rotas
ReactDOM.render(Rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
