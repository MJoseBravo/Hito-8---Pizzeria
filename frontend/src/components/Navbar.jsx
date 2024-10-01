import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
    const {total} = useContext(CartContext)
    const {token, setToken} = useContext(UserContext)
    const {logout} = useContext(UserContext)
 
    // const logout = () => {
    //     setToken (false)
    // }

    

    return (
        <nav className="opcion-navbar navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid barra-principal">
                <Link className="navbar-brand" to="/">Pizzeria Mamma Mia</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-start" id="navbarNavAltMarkup">
                   <div className="navbar-nav barra-nav">
                        <Link className="nav-link active" aria-current="page" to="/"><i className="fa-solid fa-pizza-slice"></i>Home</Link>
                        <Link className="nav-link" to="/profile">
                            {
                            token ? <div><i className="fa-solid fa-lock-open"></i>Profile</div> : null
                            }  
                        </Link>
                        <Link className="nav-link" to="/">
                            {
                            token ? <div onClick={logout}><i className="fa-solid fa-lock"></i>Logout</div> : null
                            }
                        </Link>
                        <Link className="nav-link" to="/login">
                            {
                            token ? null : <div><i className="fa-solid fa-key"></i>Login</div>
                            } 
                        </Link>
                        <Link className="nav-link" to="/register">
                            {
                            token ? null : <div><i className="fa-solid fa-user"></i>Register</div>
                            }           
                        </Link>
                   </div>
                   <div className="nav navbar-nav navbar-right boton-total">
                   <Link className="btn btn-success" to="/cart" type="submit"><i className="fa-solid fa-cart-shopping"></i>Total: ${numberWithCommas(total)}</Link>
                   </div>
                </div>
            </div>
        </nav>
    )
}

function numberWithCommas(x) {
    if (x == null) 
        return "0"
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default Navbar



