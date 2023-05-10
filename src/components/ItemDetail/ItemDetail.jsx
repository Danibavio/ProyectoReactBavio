

const ItemDetail = ({id, price, title, editorial, img, description}) =>{
    console.log(id)
    return(
        <div className="itemDetail">
            
            <picture>
                <img src={img} alt={title} />
            </picture>
            <div className="ItemDetailCard">
                <h2>{title}</h2>
                <h3>{editorial}</h3>
                <h3>{price}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ItemDetail