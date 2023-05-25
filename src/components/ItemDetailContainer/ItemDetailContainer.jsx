import { useState, useEffect } from "react";
/* import { getProductsById } from "../productos"; */
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css'
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";


const ItemDetailContainer= () =>{
    const [product, setProducts] = useState(null)

    const { itemId } = useParams()

    useEffect(()=>{
        const docRef = doc(db, 'productos', itemId)

        getDoc(docRef)
        .then(response =>{
            const data = response.data()
            const productoFB = {id: response.id, ...data}
            setProducts(productoFB)
        })
        .catch(error =>{
            console.log(error)
        })
    },[itemId])
    return(
        <div className="ItemDetailContainer">
            {<ItemDetail {...product} />}
        </div>
    )



}

export default ItemDetailContainer