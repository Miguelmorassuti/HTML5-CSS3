import PropTypes from 'prop-types'; //BIBLIOTECA INSTALADA JUNTO COM O REACT

function Item({marca, ano}){
    return (
        <>
            <li>{marca} - {ano}</li>
        </>
    )

}

Item.propTypes = { //VALIDANDO A NÍVEL DE PROGRAMAÇÃO
    marca: PropTypes.string,
    ano: PropTypes.number,
}

Item.defaultProps = { // PARA COLOCAR UM VALOR DEFAULT NA PROPS
    marca: null,
    ano: null,
}
export default Item