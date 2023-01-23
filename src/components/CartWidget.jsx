import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import "./styles/CartWidget.css"

const CartWidget = () =>{
    return(
        <div className="carrito">
            <FontAwesomeIcon icon={faCartShopping} size="xl" color="black"/>
            <div className="CantidadProductos">0</div>
        </div>
    )
}


export default CartWidget