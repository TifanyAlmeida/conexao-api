import React from "react";
import '../Pages/Cartao.scss';
import cartao1 from '../../images/cartao1.png';

/*RESPONSIVIDADE PRONTINHA*/
const Cartao = () => {
    return (
        <div className="fundo-cartao" id="cartoes">
            <h1 className="titulo-cartao">Cartão</h1>
            <div className="conteudo-cartao">

                <div className="conteudo-cartao-esquerda">
                    <img src={cartao1} alt="Foto de Cartões do Banco des" className="imagem-cartao1" />
                </div>

                <div className="conteudo-cartao-direita">
                    <div className="div-textos-cartao">

                        <div className="card-cartao">
                            <h3 className="titulo-pq-adquirir-cartao">Porque Adquirir</h3>
                            <p>Com o cartão des você compra tudo o que quiser ao redor do mundo. Sem taxa, sem cobrança e com muitos prêmios e cashbacks.</p>
                        </div>

                        <div className="texto-card-cartao">
                            <h3 className="titulo-como-adquirir-cartao">Como Adquirir</h3>
                            <p>Clique no botão abaixo e em apenas 5 minutos o seu cartão estará na porta da sua casa com o limite inicial de 50 mil crazys .</p>
                        </div>

                        <button className="botao-adquirir-cartao">Solicitar Análise</button>

                    </div>
                </div>

            </div>

        </div>
    )
}
export default Cartao;