import { getFirestore, collection, addDoc } from "firebase/firestore";


export const createOrder = async (productos) => {
    const order = {
        comprador: { nombre: 'dani', telefono: '123456', email: 'lol@lol.com'},
        item : [{ title: productos.title, price:productos.price}],
        total: productos.total
    }
    const db = getFirestore()
    const orderCollection = collection(db, 'orders')
    addDoc(orderCollection, order).then(({id}) =>{
        return id
    })
}