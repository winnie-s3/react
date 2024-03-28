function SeuNome({setNome}) {

  return (
    <div>
      <p>Seu nome: </p>
      <input type="text" placeholder="Insira seu nome" onChange={(e) => setNome(e.target.value)} />
    </div>
  )
}

export default SeuNome