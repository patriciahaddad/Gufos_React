import React, { Component } from 'react';
import Rodape from '../../components/Rodape/Rodape';

import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';
import Cabecalho from '../../components/Cabecalho/Cabecalho';
import api from '../../services/api';

class Eventos extends Component {

    constructor() {
        super();
        this.state = {
            lista: [],
            listaCategorias: []
        }
    }

    componentDidMount() {
        this.listaAtualizada();
        this.listaAtualizadaCategorias();
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    // GET
    listaAtualizada = () => {

        fetch("http://localhost:5000/api/evento")
            .then(response => response.json())
            .then(data => {
                this.setState({ lista: data })
            })
            .catch(error => {
                console.log(error);
            })
    }

    // GET - Categorias
    listaAtualizadaCategorias = () => {

        api.get("/categoria")
            .then(data => {
                this.setState({ listaCategorias: data })
            })
            .catch(error => {
                console.log(error);
            })
    }

    // POST



    render() {
        return (
            <div>
                <Cabecalho />
                <main className="conteudoPrincipal">
                    <section className="conteudoPrincipal-cadastro">
                        <h1 className="conteudoPrincipal-cadastro-titulo">Eventos</h1>
                        <div className="container" id="conteudoPrincipal-lista">
                            <table id="tabela-lista">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Evento</th>
                                        <th>Data</th>
                                        <th>Acesso Livre</th>
                                        <th>Tipo do Evento</th>
                                        <th>Açoes</th>
                                    </tr>
                                </thead>

                                <tbody id="tabela-lista-corpo">
                                    {
                                        this.state.lista.map(function (evento) {
                                            return (
                                                <tr key={evento.eventoId}>
                                                    <td>{evento.eventoId}</td>
                                                    <td>{evento.titulo}</td>
                                                    <td>{evento.dataEvento}</td>
                                                    <td>
                                                        {evento.acessoLive && "Sim"}
                                                        {!evento.acessoLive && "Não"}
                                                    </td>
                                                    <td>{evento.categoria.titulo}</td>
                                                    <td>
                                                        <button>Alterar</button>
                                                        <button>Excluir</button>
                                                    </td>
                                                </tr>
                                            )
                                        }.bind(this))
                                    }
                                </tbody>
                            </table>
                        </div>

                        <div className="container" id="conteudoPrincipal-cadastro">
                            <h2 className="conteudoPrincipal-cadastro-titulo">Cadastrar Evento</h2>
                            <form onSubmit={this.cadastrarEvento}>
                                <div className="container">
                                    <input
                                        type="text"
                                        id="evento__titulo"
                                        placeholder="título do evento"
                                    />
                                    <input type="date" id="evento__data" placeholder="dd/MM/yyyy" />
                                    <select id="option__acessolivre">
                                        <option value="1">Livre</option>
                                        <option value="0">Restrito</option>
                                    </select>
                                    <select id="option__tipoevento">
                                        {
                                            this.state.listaCategorias.map(function (categorias) {
                                                return (
                                                    <option key={categorias.categoriaId} value={categorias.categoriaId}>
                                                        {categorias.titulo}
                                                    </option>
                                                )
                                            }.bind(this))
                                        }
                                    </select>
                                    <button
                                        className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro"
                                        type="submit"
                                    >
                                        Cadastrar
                            </button>
                                </div>

                            </form>
                        </div>
                    </section>
                </main>
                <Rodape />


                <MDBContainer>
                    {/* <MDBBtn onClick={this.toggle}>Modal</MDBBtn> */}
                    <form onSubmit={this.salvarAlteracoes}>
                        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                            <MDBModalHeader toggle={this.toggle}>Editar</MDBModalHeader>
                            <MDBModalBody>
                                <MDBInput
                                    label="Categoria"
                                />
                            </MDBModalBody>
                            <MDBModalFooter>
                                <MDBBtn color="secondary" onClick={this.toggle}>Fechar</MDBBtn>
                                <MDBBtn color="primary" type="submit">Alterar</MDBBtn>
                            </MDBModalFooter>
                        </MDBModal>
                    </form>
                </MDBContainer>

            </div>
        )
    }

}

export default Eventos;