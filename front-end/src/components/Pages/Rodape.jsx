import React from "react";
import "../Pages/Rodape.scss";
import ico_instagram from "../../images/instagram.png";
import ico_facebook from "../../images/facebook.png";
import ico_email from "../../images/marketing-de-email.png";
import ico_whatsapp from "../../images/whatsapp.png";

/* RESPONSIVIDADE PRONTINHA */
const Rodape = () => {
    return (
        <footer className="fundo-rodape">

            <div className="fundo-contato-rodape">

                <div className="contato-rodape">
                    <img src={ico_instagram} alt="icone do instagram" width="40px" className="icones_contato" />
                    <a href="">@crazyBank</a>
                </div>

                <div className="contato-rodape">
                    <img src={ico_facebook} alt="icone do facebook" width="40px" className="icones_contato" />
                    <a href="">Crazy Bank</a>
                </div>

                <div className="contato-rodape">
                    <img src={ico_email} alt="icone de email" width="40px" className="icones_contato" />
                    <a href="">crazy@bank.com</a>
                </div>

                <div className="contato-rodape">
                    <img src={ico_whatsapp} alt="icone de whatsapp" width="40px" className="icones_contato" />
                    <a href="">(19)9987-31874</a>
                </div>
            </div>
        </footer>
    )
}
export default Rodape;