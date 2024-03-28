import { useState } from 'react'

function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault()
    console.log(`Usuário ${name} com a senha ${password} foi cadastrado.`)
  }

  const [name, setName] = useState()
  const [password, setPassword] = useState()

  return (
    <div>
      <h1>Meu cadastro</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id='name'
            name='name'
            placeholder="Insira seu nome"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id='password'
            name='password'
            placeholder="Insira sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  )
}

export default Form