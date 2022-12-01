import React from "react";
import "../Pages/FundoWil.scss";
import dog from "../../images/wil_smith.png";

/*RESPONSIVIDADE PRONTINHA*/
const FundoWil = () => {
    return (
        <>
            <div className="fundo-wil">

                <div className="fundo-wil-texto">
                    <h1>Deixe tudo conosco e se preocupe apenas em curtir</h1><br />
                    <p>Aqui na crazy, você não precisa ficar desesperado, nós cuidamos de tudo para tornar sua experiência e sua vida mais feliz.
                        <br />Aproveite este lindo site para conhecer melhor os benefícios que temos para você e venha fazer parte do banco crazy.</p>
                </div>

                <div className="fundo-wil-img">
                    <img src={dog} alt="Foto de Cachorro com óculos" className="imagem-wil" />
                </div>

            </div>
        </>
    )


}
export default FundoWil;