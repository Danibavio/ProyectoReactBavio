import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { arregloProductos } from "./baseDatos";
import "./styles/ItemDetailContainer.css"

const ItemDetailContainer = () => {
    const id = parseInt(useParams().id)
    const [product, setProduct] = useState({});

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
                    <p>Precio: ${product.price}</p>
                    <p>Categoría: {product.categoria}</p>
                </>
        )}
    </div>
    );
};

export default ItemDetailContainer;