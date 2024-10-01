import { CartContext } from "../context/CartContext"
import { useContext } from "react"
import Pizza from "../pages/Pizza"
import { Navigate, useNavigate } from "react-router-dom"

const CardPizza = ({ pizza}) => {

  

    const { buyPizza, setBuyPizza, setTotal, infoPizza} = useContext(CartContext)
    const navigate = useNavigate()

    const ver = () => {
        navigate(`/pizza/${pizza.id}`);
      };


    const addPizza = () => {  
        if (buyPizza.find(element => element.name == pizza.name)){
            const buyPizzaUpdated = buyPizza.map(element => element.name == pizza.name ? {...element, quantity: element.quantity + 1, total: element.price * (element.quantity + 1)} : element)
            let tempTotal = buyPizzaUpdated.reduce(
                (acc, obj)=> acc + obj.total, 0
            )
            setTotal(tempTotal)
            setBuyPizza (buyPizzaUpdated)
        } else {
            const buyPizzaUpdated = [...buyPizza, {...pizza, quantity: 1, total: element.price}]
            let tempTotal = buyPizza.reduce(
                (acc, obj)=> acc + obj.total, 0
            )
            setTotal(tempTotal)
            setBuyPizza(buyPizzaUpdated)
            
        }
        

    }
    

    return (
        <div className="card d-flex tarjetas">
            <div className="card-img-top">
                <img style={{width: '90%'}} src={pizza.img} alt={pizza.name} />
            </div>
            <div className="tarjeta-pizza">
                <h3> Pizza {pizza.name}</h3>
                <p> 🍕Ingredientes:</p>
                <div className="list-group ps-0 pb-3 ">
                    <ul className="list-group" style={{}}>
                        {pizza.ingredients.map((ingrediente, index) => {
                            return <li className="list-group" key={index}>{ingrediente}</li>
                        })
                        }
                    </ul>
                </div>
                <p>${numberWithCommas(pizza.price)}</p>
                <div className="btn-primary d-flex">
                    <button onClick={ver}>Ver más</button>
                    <button onClick={addPizza}>Añadir al carro</button> 
                </div>
                 
            </div>
        </div>
    )
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default CardPizza
