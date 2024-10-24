import React, { useState } from 'react'
import './OpcionesEisen.css'

const OpcionesEisen = () => {
    const [seleccion, setSeleccion] = useState('')

    const handleChange = (e) => {
        setSeleccion(e.target.value)
    }

    const opciones = [
        { valor: 'sinClasificar', texto: 'No Clasificado' },
        { valor: 'Importante-Urgente', texto: 'Importa y Urge' },
        { valor: 'Importante-NoUrgente', texto: 'Importa y No Urge' },
        { valor: 'NoImportante-Urgente', texto: 'No Importa y Urge' },
        { valor: 'NoImportante-NoUrgente', texto: 'No Importa y No Urge' }
    ]

    return (
        <div >
            <select value={seleccion} onChange={handleChange} className='optionEisen'>
                {opciones.map((opcion) => (
                    <option key={opcion.valor} value={opcion.valor} className={`{opcion.valor}`}>
                        {opcion.texto}
                    </option>
                ))}
            </select>  
        </div>
    )
}

export default OpcionesEisen
