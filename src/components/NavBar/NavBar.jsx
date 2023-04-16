import CartWidget from "../CartWidget"
import "./navBar.css"
const NavBar =() => {
    return(
        <nav>
            <div className="header">
                <h3 className="header-titulo">Coder Comics</h3>
            </div>
                <ul className="navegacion">
                    <li>Inicio</li>
                    <li>Manga Ivrea</li>
                    <li>Manga Panini</li>
                    <li>Manga Ovni Press</li>
                    <li>Funko Pops</li>
                    <li>Contacto</li>
                    <CartWidget/>
                </ul>
                
        </nav>
    )

}
export default NavBar