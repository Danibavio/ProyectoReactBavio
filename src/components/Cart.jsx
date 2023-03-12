import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartItem = (props) => {
    
    return (
        <div className="cart-item">
            {props.producto && (
                <img src={props.producto.pictureUrl} alt={props.producto.title} />
            )}
            <div>
                <h3>{props.producto.title}</h3>
                <p>Cantidad: {props.cantidad}</p>
                <p>Precio Total: $ {(props.precioTotal)}</p>
            </div>
        </div>
    
    );
};


const CartList = () => {
    const {cartItems} = useContext(CartContext);

    return (
        <div className="cart-list">
            {cartItems.map((item) => (
                <CartItem
                    key={item.producto.id}
                    producto={item.producto}
                    cantidad={item.cantidad}
                    precioTotal={item.producto ? item.cantidad * item.producto.precio : 0}
                />
            ))}
        </div>
        
    );
};

const Cart = () => {
    const {cartItems, precioTotal} = useContext(CartContext);

    return (
        <div className="cart">
            <h2>Carrito de Compra</h2>
            {cartItems.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <>
                    <CartList />
                    <p>Total: {(precioTotal())}</p>
                </>
            )}
        </div>
    );
};

export default Cart;
