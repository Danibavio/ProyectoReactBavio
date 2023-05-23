const productos = [
    {id: "1" , title:'ChainsawMan 01' , price: 1800 , stock: 10,category:'Shonen' , editorial:'Ivrea' , description: 'Chainsaw Man  es la historia de Denji, un adolescente que carga con las inmensas deudas de su padre y que malvive como puede para saldarlas, ya sea vendiendo sus órganos o haciendo todo tipo de trabajos malpagados. Su única compañía es Pochita, un demonio motosierra.' , 
    img:"https://www.tematika.com/media/catalog/Ilhsa/Imagenes/683542.jpg"},
    {id: "2" , title:'Kaguya Sama 01' , price:1900 ,stock: 10, category:'Seinen' , editorial:'Panini' , description:"'Kaguya-sama: Love Is War' se centra en Miyuki Shirogane y Kaguya Shinomiya, quienes lideran el consejo estudiantil de su instituto. Todo el mundo cree que serían perfectos como pareja y aunque el realidad están coladísimos el uno por el otro, se niegan a admitirlo porque son demasiado orgullosos." , 
    img:"https://www.tematika.com/media/catalog/Ilhsa/Imagenes/679006.jpg" },
    {id: "3", title:'Uzumaki' , price: 4900 ,stock: 10, category:'Terror' , editorial: 'Ivrea', description:'Kurouzu, un pequeño pueblo rodeado por la niebla en la costa de Japón, está maldito. Según Shûichi Saitô, el novio de la joven Kirie Goshima, su hogar está encantado, no por una persona, sino por un patrón: UZUMAKI, la espiral, el secreto hipnótico que da forma al mundo.' ,
    img:"https://http2.mlstatic.com/D_NQ_NP_683371-MLA27430242276_052018-O.jpg" },
    {id: "4" , title:'Vinland Saga', price:2700 ,stock: 10, category:'Shonen' , editorial:'Ovni Press' , description:'Desafiando las rígidas leyes vikingas y a pesar de ser un gran guerrero, Thors decide huir de la cruenta vida que llevaba con su familia. Al ser descubierto, será perseguido durante su viaje marítimo por un mercenario de nombre Askeladd, cayendo finalmente en una emboscada junto a su expedición. Ganará la batalla contra sus atacantes, aunque a un alto precio: Thors dará su vida para que el resto de la tripulación, incluido su hijo Thorfinn, vivan. Desde aquel instante Thorfinn jura vengarse. Sin embargo, será apresado por Askeladd y obligado a enrolarse en su barco. Pero aún le quedará una esperanza. Según el código vikingo, Thorfinn tendrá derecho de retar a Askeladd a duelo si cumple una serie de difíciles tareas, como sabotear o matar a generales enemigos, lo que lo les llevará a involucrarse incluso en la guerra por la corona de Inglaterra.', 
    img:"https://image.cdn1.buscalibre.com/5b5a41061dc861974a8b4568.RS500x500.jpg"}
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
            resolve(productos.find(productos => productos.id === productoId))
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