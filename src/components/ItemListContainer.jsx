import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Item from "./Item";
import { arregloProductos } from "./baseDatos";
import './styles/ItemListContainer.css'


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    let {tipoProducto} = useParams()


    useEffect(() => {
        let productosFiltrados = arregloProductos;
        if (tipoProducto) {
            productosFiltrados = arregloProductos.filter(
                (product) => product.categoria === tipoProducto
            )
        }
        setProducts(productosFiltrados)
    }, [tipoProducto]);

return(
    <div className="item-list-container">
        {products.map(product => (
        <Link key={product.id} to={`/item/${product.id}`}>
        <Item className="item-card"
            id={product.id}
            pictureUrl={product.pictureUrl}
            title={product.title}
            price={product.precio}
        />
        </Link>
        ))}
    </div>

)
}

export default ItemListContainer

