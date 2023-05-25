import { useContext, useState } from "react"
import ItemCount from "../ItemCount"
import './ItemDetail.css'
import {Link} from "react-router-dom"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({id, price, title, editorial, img, description, stock}) =>{
    const [cantidadAgregada, setCantidadAgregada] = useState(0)
    const {añadirItem} = useContext(CartContext)

    const handleOnAdd = (cantidad) => {
        setCantidadAgregada(cantidad)

        const item = {
            id, title, price
        }
        añadirItem(item, cantidad)
        
    }
    return(
        <div className="itemDetail">
            <picture className="imgDetail">
                <img src={img} alt={title} />
            </picture>
            <div className="itemDetailCard">
                <h2>{title}</h2>
                <h3>Editorial {editorial}</h3>
                <p>{description}</p>
                <h3>${price}</h3>
            <footer className="ItemDetailFooter">
                {
                    cantidadAgregada > 0 ? (
                        <Link to='/carrito' className="botonContador">Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )
                }
            </footer>
        </div>
        </div>
    )
}

export default ItemDetail