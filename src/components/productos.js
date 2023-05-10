const productos = [
    {id: "lol" , title:'ChainsawMan 01' , price: 1800 , category:'Shonen' , editorial:'Ivrea' , description: '-' , img:"https://www.tematika.com/media/catalog/Ilhsa/Imagenes/683542.jpg"},
    {id: "2" , title:'Kaguya Sama 01' , price:1900 , category:'Seinen' , editorial:'Panini' , description:'-' , img:"https://www.tematika.com/media/catalog/Ilhsa/Imagenes/679006.jpg" },
    {id: "3", title:'Uzumaki' , price: 4900 , category:'Terror' , editorial: 'Ivrea', description:'-' , img:"https://http2.mlstatic.com/D_NQ_NP_683371-MLA27430242276_052018-O.jpg" },
    {id: "4" , title:'Vinland Saga', price:2700 , category:'Shonen' , editorial:'Ovni Press' , description:'-', img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/161/337/products/cci-356009789877249965-91d95f6c2c55cb324c16829774210546-640-0.webp"}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(productos)
        }, 2000)
    })
}

export const getProductsById = (productoId) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(productos.find((p)=>p.id.toString()===productoId.toString()))
        })

    })
}

export const getProductsByEditorial = (editorialId) =>{
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(productos.filter(productos => productos.editorial === editorialId))
        }, 2000)
    })
}