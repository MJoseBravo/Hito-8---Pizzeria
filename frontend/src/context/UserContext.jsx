import { createContext, useEffect, useState } from "react"
import { Navigate } from "react-router-dom"

export const UserContext = createContext()

const url = "http://localhost:9000/api"
const initialStateToken = localStorage.getItem("token") || null

const UserProvider = ({children}) => {
    const [email, setEmail] = useState("")
    const [token, setToken] = useState(initialStateToken)
    const [message, setMessage] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [confirmarContraseña, setConfirmarContraseña] = useState("")

    useEffect(() => {
        if (token) {
            localStorage.setItem("token", token)
        } else {
            localStorage.removeItem("token")
        }
    }, [token])

//validar login de usuario
    const validarLogin = async (email, contraseña) => {
        const response = await fetch(`${url}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "email":email, "password":contraseña }),
        })

        const data = await response.json()
       

        if ("token" in data){
            setToken(data.token)
            localStorage.setItem("token", data.token)
            return <Navigate to="/register"/>
        }
        return data
    }

//validar el registro del usuario
    const validarRegister = async (email, contraseña, confirmarContraseña) => {
        const response = await fetch(`${url}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "email":email, "password":contraseña }),
        })
        const data = await response.json()
        
        if ("token" in data){
            setToken(data.token)
            localStorage.setItem("token", data.token)
            return <Navigate to="/register"/>
        }
        return data
    }

//Logout de sesión en profile y navbar
    const logout = () => {
            setToken (false)
            setEmail("")
            setContraseña("")
            setToken(null)
            setMessage("Sesión cerrada exitosamente")
            setTimeout(() => setMessage(""), 3000)
        }

       

    return (
        <UserContext.Provider value={{validarLogin, validarRegister, email, setEmail, message, contraseña, setContraseña, token, setToken, logout, confirmarContraseña, setConfirmarContraseña}}>
            {children}
        </UserContext.Provider>        
        )

}

export default UserProvider