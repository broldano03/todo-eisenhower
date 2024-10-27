import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import './InputTarea.css'
import OpcionesEisen from './eisenhower/OpcionesEisen'

function InputTarea({tasks, setTasks, taskId, setTaskId}) {
    const [inputValue, setInputValue] = useState('')
    const [clasificacion, setClasificacion] = useState('Hacer')

    const addTask = (task) => {
        const newTask = {
            nombre: task,
            id: taskId,
            realizado: false,
            eliminado: false,
            editable: false,
            clasificacion: clasificacion
        }

        setTasks((prevTasks) => {
            const updateTasks = [...prevTasks, newTask]
            localStorage.setItem ('tasks', JSON.stringify(updateTasks) )
            return updateTasks
        })
        setTaskId((prevId) => prevId + 1)
        setInputValue('')
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
