import PropTypes from 'prop-types'

function Item({marca, lancamento}) {

  return (
    <>
      <li>
        {marca} - {lancamento}
      </li>
    </>
  )
}

Item.propTypes = {
  marca: PropTypes.string.isRequired,
  ano_lancamento: PropTypes.number,

}

Item.defaultProps = {
  marca: 'Faltando Marca',
  ano_lancamento: 0,
}

export default Item