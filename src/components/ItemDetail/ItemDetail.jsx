import ItemCount from "../ItemCount"
import './ItemDetail.css'

const ItemDetail = ({id, price, title, editorial, img, description, stock}) =>{
    console.log(id)
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
                <ItemCount initial={1} stock={stock} onAdd={(cantidad) => console.log('cantidad agregada', cantidad)}/>
            </footer>
        </div>
        </div>
    )
}

export default ItemDetail