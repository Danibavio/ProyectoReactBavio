import { useContext, useState } from "react";
import { db } from "../../services/firebase/firebaseConfig";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import Formulario from "./formulario";


const Checkout = () => {
    const { carrito, limpiarCarrito } = useContext(CartContext);
    const [orderId, setOrderId] = useState(null);

    const handleFormSubmit = async (formDatos) => {
        try {
            const order = {
                cliente: {
                    nombre: formDatos.nombre,
                    celular: formDatos.celular,
                    email: formDatos.email
                },
                productos: carrito
            };


            const docRef = await addDoc(collection(db, 'orders'), order);

            
            const orderId = docRef.id;

            limpiarCarrito();

            
            setOrderId(orderId);
        } catch (error) {
            console.error('Error al procesar el pedido:', error);
        }
    };

    return(
        <div>
            <h2>Checkout</h2>
        <Formulario onSubmit={handleFormSubmit}/>
        {orderId && 
        <p>Gracias por su compra! ID de orden: {orderId}</p>}
        </div>
    )
}

export default Checkout



