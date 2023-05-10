import { useState, useEffect } from "react"
import { getProducts, getProductsByEditorial } from "../productos"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const {editorialId} = useParams()

    useEffect(()=> {
        const asyncFunc = editorialId ? getProductsByEditorial : getProducts
        asyncFunc(editorialId)
            .then(response => {
                setProducts(response)
            })
            .catch(error =>{
                console.error(error)
            })
        }, [editorialId])
    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer