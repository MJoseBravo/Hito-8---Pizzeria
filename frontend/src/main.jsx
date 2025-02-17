// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client"
import React from "react"
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import CartProvider from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider> 
  </React.StrictMode>
)
