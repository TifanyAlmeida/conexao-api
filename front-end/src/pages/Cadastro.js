import React, {useState} from "react";
import "../styles/pages/Cadastro.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {

    const [user, setUser] = useState(null);

    const [nome, setNome] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigate = useNavigate()

    const baseURL = "http://127.0.0.1:8000/api/register/";

    const submit = () => {
        console.log(nome)
        axios
            .post(baseURL, {
                nome: nome,
                nascimento: nascimento,
                cpf: cpf,
                email: email,
                password: senha
            })

            .then((response) => response.json())
            .catch((err) => {
                console.error("ops! ocorreu um erro "+err)
            });
        navigate('/login')
    };

    return (
        <div className="fundo-cadastro-page">

            <div className="card-cadastro-externo">
                <h1>Cadastro</h1>

                <form onSubmit={submit}>

                    <label for="nome"> Nome</label>
                    <input type="text" name="nome" placeholder="Tifany Almeida" onChange={e => setNome(e.target.value)} required/>

                    <label for="nascimento">Nascimento</label>
                    <input type="date" name="nascimento" onChange={e => setNascimento(e.target.value)} required/>

                    <label for="cpf">CPF</label>
                    <input type="cpf" name="cpf" onChange={e => setCpf(e.target.value)} required/>

                    <label for="email">Email</label>
                    <input type="email" name="email" placeholder="ti@gmail.com" onChange={e => setEmail(e.target.value)} required/>

                    <label for="senha">Senha</label>
                    <input type="password" name="senha" onChange={e => setSenha(e.target.value)} required/>

                    <button type="submit" className="botao-cadastro">Cadastro</button>

                </form>
            </div>
        </div>
    )
}
export default Cadastro;