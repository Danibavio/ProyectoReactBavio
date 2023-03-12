import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { arregloProductos } from "./baseDatos";
import "./styles/ItemDetailContainer.css"
import { CartContext } from "../context/CartContext";
import ItemQuantitySelector from "./ItemQuantitySelectos";

const ItemDetailContainer = () => {
    const id = parseInt(useParams().id)
    const [product, setProduct] = useState({});
    const { agregarItem } = useContext(CartContext);

    useEffect(() => {
        const fetchProduct = async () => {
        const product = await arregloProductos.find(
        product => product.id === parseInt(id)
        );
        setProduct(product);
    };
    fetchProduct();
    }, [id]);

    return (
    <div className="item-detail-card">
        {product && (
                <>
                    <h2>{product.title}</h2>
                    <img src={product.pictureUrl} alt={product.title} />
                    <p>Precio: ${product.precio}</p>
                    <p>Categoría: {product.categoria}</p>
                    <button onClick={()=> agregarItem(product)}>Agregar al carrito</button>
                    
                    <ItemQuantitySelector/>
                </>
        )}
    </div>
    );
};

export default ItemDetailContainer;