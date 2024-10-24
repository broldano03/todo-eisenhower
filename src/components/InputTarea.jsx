import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faBorderAll } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import './InputTarea.css'

function InputTarea({setTasks}) {
    const [inputValue, setInputValue] = useState('')
    const [taskId, setTaskId] = useState(0) 

    // Función para agregar una tarea
    const addTask = (task) => {
        const newTask = {
            nombre: task,
            id: taskId,
            realizado: false,
            eliminado: false,
            editable: false
        };

        setTasks((prevTasks) => [...prevTasks, newTask])
        setTaskId((prevId) => prevId + 1)
        setInputValue('')
    };

    const handleAddTask = () => {
        if (inputValue.trim()) {
            addTask(inputValue)
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAddTask()
        }
    };

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
                <FontAwesomeIcon icon={faBorderAll}  className='falist'/>
                <FontAwesomeIcon icon={faPlusCircle} className="enter" onClick={handleAddTask} />
            </div>

            
        </> 
    )
}

export default InputTarea