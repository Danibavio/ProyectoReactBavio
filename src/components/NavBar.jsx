
import "./styles/NavBar.css" 

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFutbol} from "@fortawesome/free-solid-svg-icons"
import CartWidget from "./CartWidget"
import { NavLink, Link } from "react-router-dom"

const NavBar = ()=>{
    return(
        <nav className="nav-container">

            <Link to="/" className="sacar-color">
            <FontAwesomeIcon icon={faFutbol} size="2xl"/>
            </Link>
                <div className="navegacion">
                    <NavLink to="/">Inicio</NavLink>
                    <NavLink to="productos/Futbol Local">Futbol Local</NavLink>
                    <NavLink to="productos/Seleccion">Seleccion</NavLink>
                    <NavLink to="productos/Futbol Europeo">Futbol Europeo</NavLink>

                </div>
                <div>
            <CartWidget/>
                </div>        
        </nav>

    )

}

export default NavBar