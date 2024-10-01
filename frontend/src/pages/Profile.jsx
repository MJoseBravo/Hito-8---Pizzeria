import React, { useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const Profile = () => {
  const {email} = useContext(UserContext)
  const {token} = useContext(UserContext)
  const {logout} = useContext(UserContext)
  if(!token){
    return <Navigate to="/login"/>
  }
  return (
    <div className='pt-3 pb-3'>
        <h4>{email}</h4>
        <Link onClick={logout} className="btn btn-secondary">Cerrar sesión</Link>
    </div>
  )
}

export default Profile
