import React, { useState } from "react"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import './App.css'
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Pizza from "./pages/Pizza"
import { Route, Routes } from "react-router-dom"
import Profile from "./pages/Profile"
import NotFound from "./pages/NotFound"
import CartProvider from "./context/CartContext"
import UserProvider from "./context/UserContext"

function App () {
  
  return (
    <div>
      <UserProvider>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="cart" element={<Cart />}/>
          <Route path="pizza/:id" element={<Pizza/>}/>
          <Route path="footer" element={<Footer/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </CartProvider>
      </UserProvider>
    </div>
  )
}

export default App