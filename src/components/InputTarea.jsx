import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import './InputTarea.css'
import OpcionesEisen from './eisenhower/OpcionesEisen'

function InputTarea({setTasks}) {
    const [inputValue, setInputValue] = useState('')
    const [taskId, setTaskId] = useState(0)
    const [clasificacion, setClasificacion] = useState('sinClasificar')

    // Función para agregar una tarea
    const addTask = (task) => {
        const newTask = {
            nombre: task,
            id: taskId,
            realizado: false,
            eliminado: false,
            editable: false,
            clasificacion: clasificacion
        }

        setTasks((prevTasks) => [...prevTasks, newTask])
        setTaskId((prevId) => prevId + 1)
        setInputValue('')
        setClasificacion('sinClasificar')
    }

    const handleAddTask = () => {
        if (inputValue.trim()) {
            if (clasificacion !== 'sinClasificar') {
                addTask(inputValue)
            } else {
                alert("Por favor, clasifica la tarea.")
            }
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAddTask()
        }
    }

    const handleClasificationChange = (nuevoValor) => {
        setClasificacion(nuevoValor)
    }

    return (
        
        <>
            <div className="agregar-tarea">
                <input
                    type="text"
                    placeholder="Agregar una tarea"
                    className="input-tarea"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <OpcionesEisen onClasificationChange={handleClasificationChange} />
                <FontAwesomeIcon icon={faPlusCircle} className="enter" onClick={handleAddTask} />
            </div>

            
        </> 
    )
}

export default InputTarea