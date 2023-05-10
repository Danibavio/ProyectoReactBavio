import Item from "../Item/Item";

const ItemList = ({products}) => {
    const productList = Object.values(products)
    return(
        <div className="listaProductos">
            {productList.map((producto)=> {
                return(
                    <Item
                    key={producto.img}
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