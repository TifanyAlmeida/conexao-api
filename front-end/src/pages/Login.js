import React, {useState} from "react";
import "../styles/pages/Login.scss";

const Login = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const submit = (e: SyntheticEvent) =>{
        e.preventDefault();

        console.log(email, senha)
        fetch('http://127.0.0.1:8000/api/login/')
    
    }
    return (
        <div className="fundo-login-page">
            <div className="card-login-externo">
                <h1>Login</h1>

                <form action="" method="POST">

                    <label for="email">Email</label>
                    <input type="email" name="email" onChange={e => setEmail(e.target.value)} required/>

                    <label for="senha">Senha</label>
                    <input type="password" name="senha" onChange={e => setSenha(e.target.value)} required/>

                    <button type="submit" className="botao-entrar-login">Entrar</button>

                </form>
            </div>
        </div>
    )
}
export default Login;