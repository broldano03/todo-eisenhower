import { Outlet } from "react-router-dom"
import Encabezado from "./components/Encabezado"

const Template = () => {
    return (
        <>
            <Encabezado titulo="TO-DO LIST" subtitulo="¡Vamos por tus metas!" />
            <Outlet/>
        </>
    )
}

export default Template