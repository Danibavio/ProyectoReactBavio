import Item from "../Item/Item";
import "./ItemList.css"

const ItemList = ({products}) => {
    const productList = (products)
    return(
        <div className="listaProductos">
            {productList.map((producto)=> {
                return(
                    <Item
                    key={producto.id}
                    id={producto.id}
                    img={producto.img}
                    description={producto.description}
                    price={producto.price}
                    title={producto.title}
                    editorial={producto.editorial}
                    category={producto.category}
                    
                    />
                )
            })}
        </div>
    )
}

export default ItemList