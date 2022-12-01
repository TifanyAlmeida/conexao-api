import React from "react";
import "../Pages/Sobre.scss";

/* RESPONSIVIDADE PRONTINHA */
const Sobre = () => {
    return (
        <div className="fundo-sobre">

            <div className="cards-sobre">
                <div className="card-sobre">
                    <div id="imagem-um-sobre" className="foto-sobre-numeros" ></div>
                    <div className="card-sobre-texto">
                        <h1>Inspiração</h1>
                        <p>
                            Primeiro de tudo, é sobre inspirar-se ao redor do mundo, nas essências e jeitos de outras pessoas.
                            Viver bem sua própria vida sem desrespeitar ninguém para que isso seja possível. Em cada uma dessas particularidades
                            existe um problema a ser solucionado, escolhemos um para o crazy.
                        </p>
                    </div>
                </div>

                <div className="card-sobre">
                    <div id="imagem-dois-sobre" className="foto-sobre-numeros"></div>
                    <div className="card-sobre-texto">
                        <h1>Objetivo</h1>
                        <p>
                            O que nos inspirou foi a vontade das pessoas de um banco simples, fácil, rápido, sem roubos e montanhas de burocracias.
                            Então, temos o objetivo de trazer essa e mais vantagens a todo crazyano
                        </p>
                    </div>
                </div>

                <div className="card-sobre">
                    <div id="imagem-tres-sobre" className="foto-sobre-numeros"></div>
                    <div className="card-sobre-texto">
                        <h1>Realização</h1>
                        <p>
                            Para a realização desse objetivo, a fundadora da crazy: Tifany Almeida dos Santos, aos 19 anos, desenvolveu um website
                            para que seu propósito pudesse alcançar a todos.
                        </p>
                    </div>
                </div>
            </div>

            <div className="foto-pessoal-sobre">
                <div className="foto-perfil-sobre"></div>
            </div>

        </div>
    )
}
export default Sobre;