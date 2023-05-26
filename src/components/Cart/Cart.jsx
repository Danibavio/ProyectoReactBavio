import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './Cart.css'

const Carrito = () => {
    const { carrito, removerItem } = useContext(CartContext);

    const handleRemoveItem = (itemId) => {
        removerItem(itemId);
    };

    const getTotalPrice = () => {
        return carrito.reduce((total, item) => total + item.price * item.cantidad, 0);
    };

    if (carrito.length === 0) {
        return (
            <div>
                <p>No hay ítems en el carrito.</p>
                <Link to="/">Volver a la página principal</Link>
            </div>
        );
    }

    return (
        <div>
            <h2>Carrito de compras</h2>
            <ul className='ul-cart'>
                {carrito.map((item) => (
                    <li  key={item.id} >
                        <div className='carrito'>
                            <h3 className='cart-title'>{item.title}</h3>
                            <p className='cart-info'>Cantidad: {item.cantidad}</p>
                            <p className='cart-info'>Precio unitario: ${item.price}</p>
                            <p className='cart-info'>Precio total: ${item.price * item.cantidad}</p>
                            <button className='cart-button' onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
                        </div>
                    </li>
                ))}
            </ul>
            <p className='cart-total'>Precio total: ${getTotalPrice()}</p>
            <Link to="/checkout" className='cart-checkout'>Finalizar Compra</Link>
        </div>
    );
}

export default Carrito;