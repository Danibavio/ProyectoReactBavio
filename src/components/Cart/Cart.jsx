import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

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
            <ul>
                {carrito.map((item) => (
                    <li key={item.id}>
                        <div>
                            <h3>{item.title}</h3>
                            <p>Cantidad: {item.cantidad}</p>
                            <p>Precio unitario: ${item.price}</p>
                            <p>Precio total: ${item.price * item.cantidad}</p>
                            <button onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
                        </div>
                    </li>
                ))}
            </ul>
            <p>Precio total: ${getTotalPrice()}</p>
        </div>
    );
}

export default Carrito;