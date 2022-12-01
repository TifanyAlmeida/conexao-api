import React from "react";
import "../Pages/Vantagens.scss";
import ondas from "../../images/ondas.svg";

/* RESPONSIVIDADE PRONTINHA */
const Vantagens = () => {
    return (
        <div className="fundo-texto-vantagem">
            <img src={ondas} className="div-imagem-fundo-onda" alt="Imagem de ondas" id="vantagens" />
            <div className="conteudo-ondas">

                <p id="sub-title-conteudo-ondas"><h1 className="title-conteudo-ondas">Aqui, você tem todos os benefícios</h1>Veja abaixo, todas as parcerias que separamos para você.</p>

                <div className="div-cards-externo">

                    <div className="card-1">
                        <div className="imagem-delivery-vantagens"></div>
                        <div className="texto-card1-vantagens">
                            <h3>Delivery</h3>
                            <p>Aqui, você tem crazys diários equivalente a R$20/dia para gastar em qualquer aplicativo de delivery.</p>
                        </div>
                    </div>

                    <div className="card-1">
                        <div className="imagem-transporte-vantagens"></div>
                        <div className="texto-card1-vantagens">
                            <h3>Transporte</h3>
                            <p>Duas Viagens gratis por semana nas gigantes do transporte.</p>
                        </div>
                    </div>

                    <div className="card-1">
                        <div className="imagem-stream-vantagens"></div>
                        <div className="texto-card1-vantagens">
                            <h3>Streaming</h3>
                            <p>Assinatura combo! Troque alguns de seus crazys e pague apenas R$ 10/mês para ter acesso a todas as plataformas de streaming.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Vantagens;