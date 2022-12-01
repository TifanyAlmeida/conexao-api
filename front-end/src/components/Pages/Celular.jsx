import React from "react";
import "../Pages/Celular.scss";
import celular_img from "../../images/celular.png"
import jake from "../../images/jake_des.png"

/* RESPONSIVIDADE PRONTINHA */
const Celular = () => {
    return (
        <>
            <div className="fundo-celular">
                <div className="fundo-celular-esquerda">
                    <img src={celular_img} alt="Imagem de celular exibindo aplicativo do banco crazy" className="celular-img" />
                    <h1>Baixe o nosso App</h1>
                </div>
                <div className="fundo-celular-direita">
                    <div className="texto-celular-direita">
                        <h1>Sobre o App</h1>
                        <p>Nosso app tem as funcionalidades que você precisa. Você poderá concorrer a sorteios diários no valor de 20.000 Bitcoins. Baixe e desfrute de translações, pix, empréstimos, navegação facilitada, acessível e ágil.</p>
                        <button className="botao-baixar-app">Baixar</button>
                    </div>
                    <img src={jake} alt="Foto de jake peralta olhando para o logo do banco" className="celular-img-jake" />
                </div>
            </div>
        </>
    )
}
export default Celular;