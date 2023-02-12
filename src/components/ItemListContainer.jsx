import { useState } from "react";
import { Link } from "react-router-dom";
import Item from "./Item";
import { arregloProductos } from "./baseDatos";

const ItemListContainer = () => {
    const [products, setProducts] = useState(arregloProductos.items)

return(
    <div>
        {products.map(product => (
            <Item
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            />
        ))}
    </div>

)
}

export default ItemListContainer

