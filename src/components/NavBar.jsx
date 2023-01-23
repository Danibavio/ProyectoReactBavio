
import "./styles/NavBar.css" 

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFutbol} from "@fortawesome/free-solid-svg-icons"
import CartWidget from "./CartWidget"

const NavBar = ()=>{
    return(
    <header>
        <div className="header-container">

            
        <nav>
            <ul className="nav-container">
            <div>
            <FontAwesomeIcon icon={faFutbol} size="2xl"/>
            </div>
                <li>
                    <a href="/">Inicio</a>
                </li>
                <li>
                    <a href="/">Productos</a>
                </li>
                <li>
                    <a href="/">Contacto</a>
                </li>
                <div>
            <CartWidget/>
                </div>
            </ul>
            
        </nav>
        </div>

    </header>
    )

}

export default NavBar