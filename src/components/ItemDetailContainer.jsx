import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';
import { getDoc, doc } from "firebase/firestore";
import { db } from './fireBase';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const productoRef = doc(db, 'camisetas', id);

        getDoc(productoRef)
            .then((docSnapshot) => {
                if (docSnapshot.exists()) {
                    setProducto({ id: docSnapshot.id, ...docSnapshot.data() });
                } else {
                    console.log('No se encontró el producto');
                }
            })
            .catch((error) => {
                console.log('Error obteniendo producto: ', error);
            });
    }, [id]);

    return (
        <div className="container my-4">
            <Item producto={producto} />
        </div>
    );
};

export default ItemDetailContainer;