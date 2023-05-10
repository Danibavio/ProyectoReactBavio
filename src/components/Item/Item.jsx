import { Link } from "react-router-dom"
import '../Item/Item.css'

const Item = ({id ,title, price, editorial, img}) =>{
    console.log(id, title, price)
    return(
        <div className="card">
            <picture className="imgCard">
                <img src={img} alt={title} />
            </picture>
            <h3>{title}</h3>
            <p>Editorial {editorial}</p>
            <p> Precio: ${price}</p>
            <Link to={`/item/${id}`} className="DetalleBoton">Ir al detalle</Link>
        </div>
    )
}

export default Item