import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <h4>La ruta de acceso no existe</h4>
        <Link to="/">Volver</Link>
    </div>
  )
}


export default NotFound