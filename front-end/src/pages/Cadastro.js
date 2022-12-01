import React, {SyntheticEvent, useState} from "react";
import "../styles/pages/Cadastro.scss";

const Cadastro = () => {

    const [nome, setNome] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const submit = (e: SyntheticEvent) =>{
        e.preventDefault();

        console.log({
            nome, email, cpf, nascimento, senha
        })
    
    }

    return (
        <div className="fundo-cadastro-page">

            <div className="card-cadastro-externo">
                <h1>Cadastro</h1>

                <form onSubmit={submit}>

                    <label for="nome"> Nome</label>
                    <input type="text" name="nome" placeholder="Tifany Almeida" onChange={e => setNome(e.target.value)}/>

                    <label for="nascimento">Nascimento</label>
                    <input type="date" name="nascimento" onChange={e => setNascimento(e.target.value)}/>

                    <label for="cpf">CPF</label>
                    <input type="cpf" name="cpf" onChange={e => setCpf(e.target.value)}/>

                    <label for="email">Email</label>
                    <input type="email" name="email" placeholder="ti@gmail.com" onChange={e => setEmail(e.target.value)}/>

                    <label for="senha">Senha</label>
                    <input type="password" name="senha" onChange={e => setSenha(e.target.value)}/>

                    <button type="submit" className="botao-cadastro">Cadastro</button>

                </form>
            </div>
        </div>
    )
}
export default Cadastro;