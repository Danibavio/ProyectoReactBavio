import { Link, NavLink} from "react-router-dom"
import CartWidget from "../CartWidget"
import "./navBar.css"
const NavBar =() => {
    return(
        <nav>
            <div className="header">
                <h3 className="header-titulo">Coder Comics</h3>
            </div>
                <ul className="navegacion">
                    <Link to={"/"}>Inicio</Link>
                    <NavLink to={"/editorial/Ivrea"}>Manga Ivrea</NavLink>
                    <NavLink to={"/editorial/Panini"}>Manga Panini</NavLink>
                    <NavLink to={"/editorial/Ovni Press"}>Manga Ovni Press</NavLink>
                    <CartWidget/>
                </ul>
                
        </nav>
    )

}
export default NavBar