import './Encabezado.css'
import Menu from './menu/Menu'

function Encabezado ({titulo, subtitulo}) {

    return (
        <div className='encabezado'>
            <div className='titulos'>
            <h1>{titulo}</h1>
            <span>{subtitulo}</span>
            </div>
            <Menu/>
        </div>
    )
}

export default Encabezado