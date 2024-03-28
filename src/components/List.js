import Item from './Item'

function List() {
  return (
    <>
      <h1>Minha lista</h1>
      <ul>
        <Item marca="Fiat" ano_lancamento={1998} />
        <Item marca="VW" ano_lancamento={2010} />
        <Item marca="GM" ano_lancamento={2014} />
      </ul>
    </>
  )
}

export default List