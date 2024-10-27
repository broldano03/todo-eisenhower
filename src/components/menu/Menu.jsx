import { NavLink, useNavigate } from "react-router-dom"
import "./Menu.css"
import { useMenuContext } from "../../context/MenuContext"

const Menu = () => {

    const {setSelectedComponent} = useMenuContext ()

    const handleComponentSelect = (componentName) => {
        setSelectedComponent(componentName)
    }
    
    const navigation = useNavigate()

    return (
        <nav className="main-menu">
            <ul>
                <li><NavLink to="/" >Inicio</NavLink> </li>
                <li onClick={() => handleComponentSelect("EisenHower")}>EisenHower</li>
                <li onClick={() => handleComponentSelect("ToDo-Basic")}>ToDo-Basic</li>
                <li><a onClick={() => {
                    localStorage.removeItem("tokenTODO")
                    navigation('/login')
                }} >Cerrar Sesión</a></li>
            </ul>

        </nav>
    )
}

export default Menu