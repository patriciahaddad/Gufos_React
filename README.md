# GUFOS - Agenda de Eventos - React JS

## Requisitos
> - Node Js
> - Visual Studio Code

## Criação do Ambiente
> Instalamos globalmente nosso acesso ao create-react-app

```bash
npm install -g create-react-app
```
## Criação do Projeto
> Criamos nosso projeto:
```bash
create-react-app gufos_react
```
> Testamos nosso projeto:
```bash
  cd gufos_react
  npm start
```
> Quando precisar paramos a aplicação com **CTRL+C** e **S**

<br><br>

## Desenvolvendo a aplicação

> Alteramos o arquivo App.js para incluir o título da Home e um Rodapé:

```jsx
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Home</h1>
      <footer>Escola SENAI de Informática</footer>
    </div>
  );
}

export default App;
```

> Criamos a seguinte estrutura: src -> pages -> Categorias. E criar o arquivo Categorias.js dentro da pasta acabada de criar.

> Em *Categorias.js* colocamos a seguinte estrutura:
```jsx
import React, { Component } from 'react';

class Categorias extends Component {
    render(){
        return(
            <div>
                <h1>Categorias</h1>
                <footer>Escola SENAI de Informática</footer>
            </div>
        );
    }
}

export default Categorias;
```

<br><br>

> Para realizar o acesso a diferentes rotas, instalamos o react-router:
```bash
npm install --save react-router-dom
```

> O *index.js* possui toda a parte de roteamento e configuração. Vamos alterar esse arquivo para fazer com que as duas páginas sejam acessadas dessa forma:
- localhost:3000/
- localhost:3000/categorias
<br>

```jsx
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
```
> Rodamos a aplicação e testamos se as 2 urls estão funcionando corretamente:
- localhost:3000/
- localhost:3000/categorias

> Criamos uma página "Não encontrada", caso passe alguma rota inválida, e dentro dela passamos:
```jsx
import React, { Component } from 'react';

class NaoEncontrada extends Component {
    render(){
        return <div>404</div>
    }
}

export default NaoEncontrada;
```

> Alteramos o *index.js* chamando o *Switch* e importando nossa classe criada:
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


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
                <Route exact path="/" component={App} />
                <Route path="/categorias" component={Categorias} />
                <Route component={NaoEncontrada} />
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
```

> Com os arquivos de "gufos-base" em mãos, copiamos a pasta *assets* para dentro de *src*
> Depois pegamos nosso *<header>* e *<main>*, e colocamos dentro de *Categorias.js*, e alteramos tudo de *class* para *className*
> Além disso, importamos nosso logo dos assets para usálo como variável:
```jsx
import React, { Component } from 'react';
import Rodape from '../../components/Rodape/Rodape';

// Importamos nosso logo dos Assets
import logo from '../../assets/img/icon-login.png';

class Categorias extends Component {
    render(){
        return(
            <div className="App">
                <header className="cabecalhoPrincipal">
                    <div className="container">
                    <img src={logo} />

                    <nav className="cabecalhoPrincipal-nav">
                        Administrador
                    </nav>
                    </div>
                </header>

                <main className="conteudoPrincipal">
                    <section className="conteudoPrincipal-cadastro">
                    <h1 className="conteudoPrincipal-cadastro-titulo">Categorias</h1>
                    <div className="container" id="conteudoPrincipal-lista">
                        <table id="tabela-lista">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Título</th>
                            <th>Ação</th>
                            </tr>
                        </thead>

                        <tbody id="tabela-lista-corpo"></tbody>
                        </table>
                    </div>

                    <div className="container" id="conteudoPrincipal-cadastro">
                        <h2 className="conteudoPrincipal-cadastro-titulo">
                        Cadastrar Categoria
                        </h2>
                        <form>
                        <div className="container">
                            <input
                            type="text"
                            className="class__categoria"
                            id="input__categoria"
                            placeholder="tipo do evento"
                            />
                            <button
                            id="btn__cadastrar"
                            className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro"
                            >
                            Cadastrar
                            </button>
                        </div>
                        </form>
                    </div>
                    </section>
                </main>
                <footer className="rodapePrincipal">
                    <section className="rodapePrincipal-patrocinadores">
                    <div className="container">
                        <p>Escola SENAI de Informática - 2019</p>
                    </div>
                    </section>
                </footer>
            </div>
        );
    }
}

export default Categorias;
```

> Em *index.js* importamos os estilos:
```jsx
// Importamos os estilos:
import './assets/css/flexbox.css';
import './assets/css/reset.css';
import './assets/css/style.css';
```

<br><br>

## Componetização

> Como os dois componentes/páginas possuem o Rodapé, podemos criar um outro componente externo a fim de facilitar as futuras modificações e/ou alterações.

> Para isso criamos a seguinte estrutura:
 - src -> componentes -> Rodape -> criar um arquivo Rodape.js.

> Dentro deste arquivo colocamos a seguinte estrutura:
```jsx
import React from 'react';

function Rodape(){
    return (
        <div>
            <footer className="rodapePrincipal">
                <section className="rodapePrincipal-patrocinadores">
                <div className="container">
                    <p>Escola SENAI de Informática - 2019</p>
                </div>
                </section>
            </footer>
        </div>
    )
}

export default Rodape;
```

>Dentro do arquivo *App.js*, comentamos o rodapé que tinha fixo e incluímos o novo:
```jsx
import React from 'react';
import './App.css';
// Importamos nosso componente
import Rodape from './components/Rodape/Rodape';

function App() {
  return (
    <div className="App">
      <h1>Home</h1>
      <Rodape />
      {/* <footer>Escola SENAI de Informática</footer> */}
    </div>
  );
}

export default App;
```

> Fazemos o mesmo em *Categorias.js* :
```jsx
import React, { Component } from 'react';
import Rodape from '../../components/Rodape/Rodape';

// Importamos nosso logo dos Assets
import logo from '../../assets/img/icon-login.png';

class Categorias extends Component {
    render(){
        return(
            <div className="App">
                <header className="cabecalhoPrincipal">
                    <div className="container">
                    <img src={logo} />

                    <nav className="cabecalhoPrincipal-nav">
                        Administrador
                    </nav>
                    </div>
                </header>

                <main className="conteudoPrincipal">
                    <section className="conteudoPrincipal-cadastro">
                    <h1 className="conteudoPrincipal-cadastro-titulo">Categorias</h1>
                    <div className="container" id="conteudoPrincipal-lista">
                        <table id="tabela-lista">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Título</th>
                            <th>Ação</th>
                            </tr>
                        </thead>

                        <tbody id="tabela-lista-corpo"></tbody>
                        </table>
                    </div>

                    <div className="container" id="conteudoPrincipal-cadastro">
                        <h2 className="conteudoPrincipal-cadastro-titulo">
                        Cadastrar Categoria
                        </h2>
                        <form>
                        <div className="container">
                            <input
                            type="text"
                            className="class__categoria"
                            id="input__categoria"
                            placeholder="tipo do evento"
                            />
                            <button
                            id="btn__cadastrar"
                            className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro"
                            >
                            Cadastrar
                            </button>
                        </div>
                        </form>
                    </div>
                    </section>
                </main>
                <Rodape />
            </div>
        );
    }
}

export default Categorias;
```

> Rodamos a aplicação e verificamos o resultado.
> Com a aplicação rodando, testamos o componente incluindo o ano no Rodapé

<br><br><br>


# Ciclos de Vida

> Em *Categorias.js* importamos o *Link* do react-router-dom:
```jsx
import {Link} from 'react-router-dom';
```
> Em seguida, colocamos um Link para voltar para a home, em baixo do logo do Gufos:
```jsx
<Link to="/">Voltar</Link>
```

> Em *Categorias.js* colocamos os seguintes ciclos:
```jsx
    componentWillMount(){
        console.log('Will');
    }

    componentDidMount(){
        console.log('Did');
    }

    componentDidUpdate(){
        console.log("Update");
    }

    componentWillUnmount(){
        console.log("Unmount")
    }
```
> No console testamos os primeiros 3, que são muito parecidos, e depois clicamos no link *Voltar* para notar que o Unmount foi acionado


# Props e States

> Para passar uma Prop nas rotas , usamos uma arrow function :
```jsx
// Declaração na index.js
<Route path="/categorias" component={ () => <Categorias titulo_pagina="Categorias | Gufos" /> } />
```
```jsx
// Chamada em Categorias.js , dentro do ciclo willMount
componentWillMount(){
    document.title = this.props.titulo_pagina;
    console.log('Will');
}
```

<br><br>

## Consumindo a API

> Criamos uma lista fixa de objeto para testarmos, dentro de um método construtor, passada via state:
```jsx
    constructor(){
        super();
        this.state = {
            lista : [
                {idCategoria: 1, titulo: "Design"},
                {idCategoria: 2, titulo: "Jogos"},
                {idCategoria: 3, titulo: "Meetup"}
            ]
        }
    }
```

> Varremos esta lista com *map* , dentro da tabela:
```jsx
                        <tbody id="tabela-lista-corpo">
                            {
                                this.state.lista.map(function(categoria){
                                    return (
                                        <tr key={categoria.categoriaId}>
                                            <td>{categoria.categoriaId}</td>
                                            <td>{categoria.titulo}</td>
                                            <td>Alterar/Excluir</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
```

> Antes de prosseguir, devemos comentar o HTTPS redirection no backend, e nos certificarmos de que o Cors está habilitado...
> Alteramos para fazermos a chamada de API, utilizando fetch:
```jsx
    constructor(){
        super();
        this.state = {
            lista : []
            //     {idCategoria: 1, nome: "Design"},
            //     {idCategoria: 2, nome: "Jogos"},
            //     {idCategoria: 3, nome: "Meetup"}
            // ]
        }
    }

    listaAtualizada = () =>{
        fetch("http://localhost:5000/api/categoria")
            .then(response => response.json())
            .then(data => this.setState( {lista: data } ));
    }

    componentDidMount(){
        this.listaAtualizada();
    }
```
