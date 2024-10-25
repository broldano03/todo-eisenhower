import { NavLink } from "react-router-dom"
import "./Menu.css"

const Menu = () => {
    return (
        <nav className="main-menu">
            <ul>
                <li><NavLink to="/" >Inicio</NavLink> </li>
                <li><NavLink to="/todobasic" >ToDo Basic</NavLink></li>
            </ul>

        </nav>
    )
}

export default Menu