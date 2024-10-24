import './Encabezado.css'

function Encabezado ({titulo, subtitulo}) {

    return (
        <div className='encabezado'>
            <h1>{titulo}</h1>
            <span>{subtitulo}</span>
        </div>
    )
}

export default Encabezado