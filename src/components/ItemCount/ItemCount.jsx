import { useState } from "react";
import './ItemCount.css'


const ItemCount = ({stock, initial, onAdd}) => {
    const [cantidad, setCantidad] = useState(initial)

    const sumarCantidad = () =>{
        if(cantidad < stock){
            setCantidad(cantidad + 1)
        }
    }

    const restarCantidad = () =>{
        if(cantidad > 1){
            setCantidad(cantidad - 1)
        }
    }


return(
    <div className="Contador">
        <div className="sumaryRestar">
            <button className="botonContador" onClick={restarCantidad}>-</button>
            <h4 className="cantidad">{cantidad}</h4>
            <button className="botonContador" onClick={sumarCantidad}>+</button>
        </div>
        <div>
            <button className="botonContador" onClick={()=> onAdd(cantidad)} disabled={!stock}>Añadir al carrito</button>
        </div>
    </div>
)

}

export default ItemCount