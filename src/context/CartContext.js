import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const agregarItem = (item, cantidad) => {
        const itemIndex = cartItems.findIndex((cartItem) => cartItem.item.id === item.id);
        if (itemIndex !== -1) {
            const newCartItems = [...cartItems];
            newCartItems[itemIndex].cantidad += cantidad;
            setCartItems(newCartItems);
        } else {
            setCartItems([...cartItems, { item, cantidad }]);
        }
    };

    const eliminarItem = (itemId) => {
        const newCartItems = cartItems.filter((cartItem) => cartItem.item.id !== itemId);
        setCartItems(newCartItems);
    };

    const limpiarCarrito = () => {
        setCartItems([]);
    };

    const precioTotal = () => {
        return cartItems.reduce((total, cartItem) => total + cartItem.item.precio * cartItem.cantidad, 0);
    };
    const getCantidad = () =>{
        return cartItems.reduce((total, cartItem) => total + cartItem.cantidad, 0)
    }

    return (
        <CartContext.Provider value={{ cartItems, agregarItem, eliminarItem, limpiarCarrito, precioTotal, getCantidad }}>
            {children}
        </CartContext.Provider>
    );
};