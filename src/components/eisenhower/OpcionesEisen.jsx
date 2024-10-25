import { useEffect, useState } from 'react'
import './OpcionesEisen.css'

const OpcionesEisen = ({onClasificationChange, clasificacionActual}) => {
    const [seleccion, setSeleccion] = useState('Hacer')

    useEffect(() => {
        setSeleccion(clasificacionActual)
    }, [clasificacionActual])

    const handleChange = (e) => {
        const nuevoValor = e.target.value
        setSeleccion(nuevoValor)
        onClasificationChange(nuevoValor)
    }

    const opciones = [
        { valor: 'sinClasificar', texto: 'No Clasificado' },
        { valor: 'Hacer', texto: 'Importa y Urge' },
        { valor: 'Planificar', texto: 'Importa y No Urge' },
        { valor: 'Delegar', texto: 'No Importa y Urge' },
        { valor: 'Eliminar', texto: 'No Importa y No Urge' }
    ]

    return (
        <div >
            <select value={seleccion} onChange={handleChange} className='optionEisen'>
                {opciones.map((opcion, index) => (
                    <option 
                        key={`${opcion.valor}-${index}`}
                        value={opcion.valor}
                        className={`${opcion.valor}`}
                    >
                            {opcion.texto}
                    </option>
                ))}
            </select>  
        </div>
    )
}

export default OpcionesEisen
