import React, {useEffect, useState} from "react";
import apiLogin from "../services/api";
import "../styles/pages/Login.scss";

const Login = () => {

    const [user, setUser] = useState();
    const [emailL, setEmail] = useState('');
    const [senhaL, setSenha] = useState('');
    
    const submit = useEffect(() => {
        apiLogin
            .post("http://127.0.0.1:8000/api/login/", {
                email: emailL,
                password: senhaL
        })
        .then((response) => setUser(response.data))
        .catch((err) => {
            console.error("ops! ocorreu um erro "+err)
        });

    }, []);
    
    // }
    return (
        <div className="fundo-login-page">
            <div className="card-login-externo">
                <h1>Login</h1>

                <form onSubmit={submit}>

                    <label for="email">Email</label>
                    <input type="email" name="email" onChange={e => setEmail(e.target.value)} required/>

                    <label for="senha">Senha</label>
                    <input type="password" name="senha" onChange={e => setSenha(e.target.value)} required/>

                    <button type="submit" className="botao-entrar-login">Entrar</button>

                </form>
            </div>
        </div>
    );
}
export default Login;