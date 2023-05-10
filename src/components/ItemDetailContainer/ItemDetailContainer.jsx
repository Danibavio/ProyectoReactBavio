import { useState, useEffect } from "react";
import { getProductsById } from "../productos";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css'


const ItemDetailContainer= () =>{
    const [product, setProducts] = useState(null)

    const { itemId } = useParams()

    useEffect(()=>{
        getProductsById(itemId)
        .then(response =>{
            setProducts(response)
        })
        .catch(error=>
            console.error(error))
    },[itemId])
    return(
        <div className="ItemDetailContainer">
            {<ItemDetail {...product} />}
        </div>
    )



}

export default ItemDetailContainer