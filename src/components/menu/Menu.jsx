import { NavLink } from "react-router-dom"
import "./Menu.css"
import { useMenuContext } from "../../context/MenuContext"

const Menu = () => {

    const {setSelectedComponent} = useMenuContext ()

    const handleComponentSelect = (componentName) => {
        setSelectedComponent(componentName)
    }
    
    return (
        <nav className="main-menu">
            <ul>
                <li><NavLink to="/" >Inicio</NavLink> </li>
                <li onClick={() => handleComponentSelect("EisenHower")}>EisenHower</li>
                <li onClick={() => handleComponentSelect("ToDo-Basic")}>ToDo-Basic</li>
            </ul>

        </nav>
    )
}

export default Menu