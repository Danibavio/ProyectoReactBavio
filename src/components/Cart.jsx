import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { getDocs, collection } from 'firebase/firestore';
import { db } from './fireBase';
const Cart = () => {
    const { cartItems, eliminarItem, limpiarCarrito, precioTotal } = useContext(CartContext);

    const handleEliminarItem = (itemId) => {
        eliminarItem(itemId);
    };

    const handleLimpiarCarrito = () => {
        limpiarCarrito();
    };

    const renderCartItems = async () => {
        const camisetasCollection = collection(db, 'camisetas');
        const camisetasSnapshot = await getDocs(camisetasCollection);
        const camisetas = camisetasSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        return cartItems.map((cartItem) => {
            const camiseta = camisetas.find((c) => c.id === cartItem.item);
            return (
                <div key={cartItem.item}>
                    <h3>{camiseta.title}</h3>
                    <p>Cantidad: {cartItem.cantidad}</p>
                    <p>Precio unitario: ${camiseta.precio}</p>
                    <button onClick={() => handleEliminarItem(cartItem.item)}>Eliminar</button>
                </div>
            );
        });
    };

    return (
        <>
            <h2>Carrito</h2>
            {cartItems.length > 0 ? (
                <>
                    <div>{renderCartItems()}</div>
                    <p>Total: ${precioTotal()}</p>
                    <button onClick={handleLimpiarCarrito}>Limpiar carrito</button>
                    <Link to="/checkout">
                        <button>Comprar</button>
                    </Link>
                </>
            ) : (
                <p>El carrito está vacío.</p>
            )}
        </>
    );
};

export default Cart;
