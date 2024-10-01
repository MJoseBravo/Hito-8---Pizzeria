import { useState } from "react"
import { useEffect } from "react"

const CartItem = ({id, purchased, addTotalPizza}) => {
    const [cantidad, setCantidad] = useState (purchased.quantity)
    const agregar = () => {
        purchased.quantity += 1
        purchased.total = purchased.quantity * purchased.total
        setCantidad(cantidad + 1)
    }
    const restar = () => {
        if (purchased.quantity > 0)
            purchased.quantity -= 1
            purchased.total = purchased.quantity * purchased.total
            setCantidad(cantidad - 1)
    }
    let isVisible = true
    if (purchased.quantity <= 0) {
        isVisible = false
    }

    addTotalPizza(purchased.id, purchased.price * cantidad)
   
  

  return (
    isVisible ? 
    <div className='item d-flex justify-content-start pt-3' key={id}>     
        <div>
            <img className='img-thumbnail' style={{width: "50%"}} src={purchased.img} alt={purchased.name} />
        </div>
        <div className="d-flex flex-column align-items-start">
            <h3>Pizza {purchased.name}</h3>
            <p>$ {numberWithCommas(purchased.price)}</p>
            <p> Cantidad:{cantidad}</p>
            <div className='d-flex mb-2 gap-3 justify-content-center'>
                <button className='btn btn-primary' onClick={agregar}> + </button>
                <button className='btn btn-primary' onClick={restar}> - </button>
            </div>
        </div>
    </div>
    : null
  )
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default CartItem
