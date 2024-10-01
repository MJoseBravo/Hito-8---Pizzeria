import React, { useState, useEffect, useContext } from 'react'
import Header from '../components/Header'
import { CartContext } from '../context/CartContext'
import { useParams } from 'react-router-dom'

const url = "http://localhost:9000/api/pizzas"

const Pizza = () => {
    const { id } = useParams()


    const [infoPizza, setInfoPizza] = useState([])
    

    const getDatos = async ( id ) => {
        const response = await fetch(url + "/" + id)
        const pizza = await response.json()
        setInfoPizza(pizza)
    }

    useEffect(() => {
        getDatos(id)
    }, [id])

    return (
        <div>
            <Header />
            <div className="card d-flex gap-2 mt-2">
                <div>
                    <img className='pt-3' style={{ width: '50%' }} src={infoPizza.img} alt="" />
                </div>
                <div className='card-body' key={id}>
                    <h5>Pizza {infoPizza.name}</h5>
                    <p>{infoPizza.desc}</p>
                    <p>🍕Ingredientes</p>
                    <div>
                        {
                            infoPizza.ingredients != null && infoPizza.ingredients.length > 0 ?
                                <ul>
                                    {
                                        infoPizza.ingredients.map((detalle, index) => <li key={index} className='list-group'>{detalle}</li>)
                                    }
                                </ul>
                                : <div><p>No existen ingredientes para mostrar</p></div>
                        }
                    </div>
                    <p>${numberWithCommas(infoPizza.price)}</p>
                    <button className='btn btn-info'>Añadir al carro</button>
                </div>

            </div>
        </div>
    )
}

function numberWithCommas(x) {
    if( x == null)
        return ""
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default Pizza
