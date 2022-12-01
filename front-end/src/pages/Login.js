import React from "react";
import "../styles/pages/Login.scss";

const Login = () => {
    return (
        <div className="fundo-login-page">
            <div className="card-login-externo">
                <h1>Login</h1>

                <form action="" method="POST">

                    <label for="email">Email</label>
                    <input type="email" name="email"/>

                    <label for="senha">Senha</label>
                    <input type="password" name="senha"/>

                    <button type="submit" className="botao-entrar-login">Entrar</button>

                </form>
            </div>
        </div>
    )
}
export default Login;