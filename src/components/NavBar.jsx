import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { BsBag } from 'react-icons/bs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import './styles/NavBar.css'

const NavBar = () => {
    const { getCantidad } = useContext(CartContext);
    return (
        <nav className="nav-container">
            <Link to="/" className="sacar-color">
            <FontAwesomeIcon icon={ faFutbol} className="icon" size="2x"/>
            </Link>
            <div className="navegacion">
                <NavLink exact="true" to="/" activeclassname="active-link" >
                    Inicio
                </NavLink>
                <NavLink to="/productos/Futbol Local" >
                    Futbol Local
                </NavLink>
                <NavLink to="/productos/Seleccion" >
                    Seleccion
                </NavLink>
                <NavLink to="/productos/Futbol Europeo" >
                    Futbol Europeo
                </NavLink>
            </div>
            <Link to="/carrito" className="cart-widget">
                <BsBag className="cart-icon" />
                {getCantidad() > 0 && (
                    <div className="cart-quantity">
                        <p>{getCantidad()}</p>
                    </div>
                )}
            </Link>
        </nav>
    );
};

export default NavBar;