import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import CardPizza from '../components/CardPizza'
import napolitana from '../assets/imgs/napolitana.png'
import española from '../assets/imgs/española.png'
import pepperoni from '../assets/imgs/pepperoni.png'
import { CartContext } from '../context/CartContext'


const Home = () => {
    const {cart, setTotal, buyPizza, setBuyPizza} = useContext(CartContext)
    const [totalPizzas, setTotalPizzas] = useState([])

    const getDatos = async () => {
        const response = await fetch(cart)
        const pizzas = await response.json()
        setTotalPizzas(pizzas)
    }

    const getDatosCart = async () => {
        const response = await fetch(cart)
        const pizzas = await response.json()
        const pizzasInCart = pizzas.map(obj => ({...obj, quantity: 1, total: obj.price}))
        let tempTotal = pizzasInCart.reduce(
            (acc, obj)=> acc + obj.total, 0
        )
        setBuyPizza(pizzasInCart)
        setTotal(tempTotal)
    }
    
    useEffect(() => {
        getDatos()
        getDatosCart()
    }, [])


    return (
        <div className="tarjetas-home">
            <Header />
            <div className="row mt-5 gap-5">
                {totalPizzas.map(pizza => (
                <CardPizza key={pizza.id} 
                pizza = {pizza}
                />
                ))}
                
            </div>
        </div>
    )
}
export default Home