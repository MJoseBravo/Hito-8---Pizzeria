import fondo from '../assets/imgs/fondo.png'

const Header = () => {
    return (
        <div className='header' style={{backgroundImage: `url(${fondo})`}}>
            <div className='content-header'>
                <h1> ¡Pizzeria Mamma Mia! </h1>
                <p> 'Las mejores pizzas' </p>
            </div>
        </div>
    )
}

export default Header