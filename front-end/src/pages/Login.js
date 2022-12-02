import React, {useEffect, useState} from "react";
import axios from "axios";
import "../styles/pages/Login.scss";

const Login = () => {

    const [post, setPost] = useState();
    const [emailL, setEmail] = useState('');
    const [senhaL, setSenha] = useState('');
    
    const baseURL = "http://127.0.0.1:8000/api/login/";

    React.useEffect(() => {
        axios.get({baseURL}).then((response) => {
            setPost(response.data);
          });
    }, []);
    
    const submit = useEffect(() => {
        axios
            .post(baseURL, {
                email: emailL,
                password: senhaL
        })
        .then((response) => response.json())
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