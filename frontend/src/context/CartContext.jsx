import  { createContext, useState } from "react"
import { Navigate } from "react-router-dom"

export const CartContext = createContext()

const url = "http://localhost:9000/api/pizzas"

const CartProvider = ({children}) => {
    const [cart, setCart] = useState(url)
    const [total, setTotal] = useState()
    const [buyPizza, setBuyPizza] = useState([]) 
    const [infoPizza, setInfoPizza] = useState([])
    const [message, setMessage] = useState("")

    return (
        <CartContext.Provider value={{cart, setCart, total, setTotal, buyPizza, setBuyPizza, infoPizza, setInfoPizza}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
