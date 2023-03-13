import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { useContext } from "react";

const CartList = () => {
    const {cartItems} = useContext(CartContext);
    console.log(cartItems)

    return (
        <div className="cart-list">
            {cartItems.map((item, index) => (
                <CartItem
                    key={index}
                    producto={item.producto}
                    cantidad={item.cantidad}
                    precioTotal={item.producto ? item.cantidad * item.producto.precio : 0}
                />
            ))}
        </div>
        
    );
};


export default CartList