import { useState, useEffect } from "react"
/* import { getProducts, getProductsByEditorial } from "../productos" */
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const {editorialId} = useParams()

    useEffect(()=> {
        /* const asyncFunc = editorialId ? getProductsByEditorial : getProducts
        asyncFunc(editorialId)
            .then(response => {
                setProducts(response)
            })
            .catch(error =>{
                console.error(error)
            }) */

            const collectionRef = editorialId
            ? query(collection(db, 'productos'), where('editorialId', '==', editorialId))
            : collection(db,'productos')

            getDocs(collectionRef)
            .then(response => {
                const productosFB = response.docs.map(doc =>{
                    const data = doc.data()
                    return { id: doc.id, ...data}
                })
                setProducts(productosFB)
            })
            .catch(error =>{
                console.error(error)
            })
            
        },[editorialId])
    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer