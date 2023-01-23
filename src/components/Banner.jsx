import "./styles/Banner.css"


const Banner = ({title}) =>{
    return(
        <section className="banner">
            <div className="banner-contenedor">
                <article>
                    <h1>{title}</h1>
                    <div>
                        <p>La tienda online del fuvolero</p>
                    </div>
                </article>
            </div>
        </section>
    )

}


export default Banner