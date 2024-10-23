import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheckCircle, faPencil, faList } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'


function MostrarTarea ({tasks, setTasks}) {

    const tareaRealizada = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, realizado: !task.realizado } : task
            )
        )
    }

    const tareaEliminada = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.filter(
                (task) => task.id !== taskId
            )
        )
        
    }

    const activarInput = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, editable: !task.editable } : task
            )
        )
    }

    const editarTarea = (taskId, nuevoNombre) => {
        setTasks((prevTasks) => 
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, nombre: nuevoNombre} : task
            )
        )
    }

    return (
        <div className="seccion-tarea">
            <h3>Estos son tus pendientes</h3>
            <ul id="lista">
                {tasks.map((task) => (
                    <li key={task.id} className="elementodelista">
                        <FontAwesomeIcon icon={task.realizado ? faCheckCircle : faCircle} 
                        onClick={() => tareaRealizada(task.id)}/>

                        <input
                        className={`text ${task.realizado ? 'line-through' : ''} 
                        ${task.editable ? "por-editar": ""} `}
                        value={task.nombre} readOnly={!task.editable} 
                        onChange={e => editarTarea(task.id, e.target.value)}
                        onKeyDown={(e) => {
                            if (task.editable) {
                                if (e.key === 'Enter') {
                                    activarInput(task.id)
                                }
                            }
                        }}
                        onBlur={() => {
                            if (task.editable) {
                                activarInput(task.id);
                            }
                        }}
                        />
                        
                        
                        <FontAwesomeIcon icon={faPencil} 
                        onClick={() => activarInput(task.id)}/>
                        <FontAwesomeIcon icon={faList} />
                        <FontAwesomeIcon icon={faTrash} className="de" 
                        onClick={() => tareaEliminada(task.id)}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MostrarTarea