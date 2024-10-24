import { useState } from 'react'
import './OpcionesEisen.css'

const OpcionesEisen = ({onClasificationChange}) => {
    const [seleccion, setSeleccion] = useState('')

    const handleChange = (e) => {
        setSeleccion(e.target.value)
        onClasificationChange(e.target.value)
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
                    <option key={`${opcion.valor}-${index}`} value={opcion.valor} className={`${opcion.valor}`}>
                        {opcion.texto}
                    </option>
                ))}
            </select>  
        </div>
    )
}

export default OpcionesEisen
