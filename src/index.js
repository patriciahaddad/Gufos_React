import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// Importamos as dependências necessárias:
import {Route, BrowserRouter as Router} from 'react-router-dom';

// Importamos a página de Categorias:
import Categorias from './pages/Categorias/Categorias';

// Realizamos a criação das Rotas:
const Rotas = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/categorias" component={Categorias} />
        </div>
    </Router>
)

// Trocamos ao App padrão pelas nossas rotas
ReactDOM.render(Rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
