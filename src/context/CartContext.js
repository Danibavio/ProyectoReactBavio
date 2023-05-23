import { createContext, useState } from "react";

export const CartContext = createContext({
    carrito: []
})


export const CartProvider = ({ children }) =>{
    const [carrito, setCarrito] = useState ([])


    console.log(carrito)

    const añadirItem = (item, cantidad) => {
    if(!productoEnCarrito(item.id)) {
        setCarrito(prev => [...prev, {...item, cantidad}])
    } else {
        console.error('El producto ya fue agregado')
    }
}

const removerItem = (itemId) =>{
    const actualizarCarrito = carrito.filter(producto => producto.id !== itemId)
    setCarrito(actualizarCarrito)
}

const limpiarCarrito = () => {
    setCarrito([])
}

const productoEnCarrito = (itemId) => {
    return carrito.some(prod => prod.id === itemId)
}

return(
    <CartContext.Provider value={{carrito, añadirItem, removerItem, limpiarCarrito}}>
        {children}
    </CartContext.Provider>
)



}