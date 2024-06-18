import { Button, Table } from 'react-bootstrap';
import NavBar_ from '../../../../component/barraNavegacao';
import '../../Listagem/styles.css';
import Axios from "axios";
import { useState, useEffect } from "react";

function Cliente() {

    return (
        <section>
            <header>
                <NavBar_ />
            </header>
            <main>
                <h1 className="text"> <strong> Cliente </strong> </h1>
                <div className="cliente-dados">
                    <label>Nome:</label>
                    <span>Fernando Pessoa</span>

                    <label>Nome Social:</label>
                    <span>Fernando Pessoa</span>

                    <label>Data de Nascimento:</label>
                    <span>10/05/1980</span>

                    <label>CEP:</label>
                    <span>12255-678</span>

                    <label>Rua:</label>
                    <span>Rua das um, 123</span>

                    <label>Bairro:</label>
                    <span>Centro</span>

                    <label>Cidade:</label>
                    <span>Araraquara</span>

                    <label>Estado:</label>
                    <span>São Paulo</span>

                    <label>País:</label>
                    <span>Brasil</span>

                    <label>Código Postal:</label>
                    <span>123456/01</span>

                    <label>CPF:</label>
                    <span>123.456.789-99</span>

                    <label>RG:</label>
                    <span>12.345.678-9</span>

                    <label>Data de Emissão do RG:</label>
                    <span>05/06/2012</span>

                    <label>Passaporte:</label>
                    <span>AB123450</span>

                    <label>Telefone:</label>
                    <span>(11) 99234-5668</span>

                    <label>Tipo:</label>
                    <span>Pessoa Física</span>

                    <div className="btns">
                        <Button className="add add-color" variant="outline-dark" type="button">Voltar</Button>
                        <Button className="add add-color" variant="outline-dark" type="button">Dependentes</Button>
                    </div>
                </div>
            </main>
        </section>
    );
}

export default Cliente;