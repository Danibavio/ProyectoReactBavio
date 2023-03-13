import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { getDocs, collection, where } from "firebase/firestore";
import { db } from './fireBase';

function useCategoria(){
    const {categoria} = useParams()
    return categoria
}

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const categoria = useCategoria()


    useEffect(() => {
        console.log('categoria:', categoria);
        const productosRef = collection(db, 'camisetas');
        const query = categoria ? where(productosRef, 'categoria', '==', categoria) : productosRef;
        getDocs(query)
            .then((querySnapshot) => {
                const productosArr = [];
                querySnapshot.forEach((doc) => {
                    productosArr.push({ id: doc.id, ...doc.data() });
                });
                setProductos(productosArr);
            })
            .catch((error) => {
                console.log('Error obteniendo productos: ', error);
            });
    },[categoria]);
    return (
        <div className="container">
            <h2 className="my-4">{typeof categoria === 'string' ? categoria.toUpperCase() : 'PRODUCTOS'}</h2>
            <ItemList productos={productos} />
        </div>
    );
};

export default ItemListContainer;
