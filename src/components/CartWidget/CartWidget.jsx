
import "./CartWidget.css"
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom"
const CartWidget= () => {
    const { carrito } = useContext(CartContext);
    const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
    return(
        <div className="cartWidget">
        <Link to='/carrito' className="CartWidget">
        <span role="img" aria-label="cart" className="cartEmoji">🛒</span>
        </Link>
        <p className="contador">{totalItems}</p>
        </div>
    )
}
export default CartWidget