import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheckCircle, faPencil, faList, faBorderAll } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import './MostrarTarea.css'

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

    function taskDone (task) { return task.realizado ? faCheckCircle : faCircle }
    function lineThrough (task) {return task.realizado ? 'line-through' : ''}
    function editable (task) {return task.editable ? "por-editar": ""}
    function editTask (task) {return e => editarTarea(task.id, e.target.value)}
    function inputEnter (task) {return ((e) => { if (task.editable) {
                                        if (e.key === 'Enter') { activarInput(task.id)}}})}
    function editExitClick (task) {return (() => { if (task.editable) 
                                        { activarInput(task.id)}})}
    return (
        <div className="seccion-tarea">
            <h3>Pendientes</h3>
            <ul id="lista">
                {tasks.map((task) => (
                    <li key={task.id} className="elementodelista">
                        <FontAwesomeIcon icon={taskDone(task)} 
                        onClick={() => tareaRealizada(task.id)}/>

                        <input
                        className={`text ${lineThrough(task)} 
                        ${editable(task)} `}
                        value={task.nombre} readOnly={!task.editable} 
                        onChange={editTask(task)}
                        onKeyDown={inputEnter(task)}
                        onBlur={editExitClick(task)}
                        />
                        
                        <FontAwesomeIcon icon={faPencil} className="pencil"
                        onClick={() => activarInput(task.id)}/>
                        <FontAwesomeIcon icon={faBorderAll}  className='falist'/>
                        <FontAwesomeIcon icon={faList}  className='falist'/>
                        <FontAwesomeIcon icon={faTrash} className="de" 
                        onClick={() => tareaEliminada(task.id)}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MostrarTarea